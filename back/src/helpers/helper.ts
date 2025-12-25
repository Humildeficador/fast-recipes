import fs from 'fs'
import path from 'path'
import { medications } from '../../prisma/seed/medications'
import { fileURLToPath } from 'url'
import { medicationsCategories } from './medicationsCategories'
import { prisma } from '../lib/prisma'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function helper() {

  const output = medications.map(({ generic_name, category_slugs }) => {
    return {
      name: generic_name,
      categories: category_slugs
    }
  })

  const finalPath = path.join(__dirname, 'medicationsCategories.json')

  fs.writeFileSync(finalPath, JSON.stringify(output))

  console.log(finalPath)

}

async function helper2() {
  const categoriesFromDb = await prisma.category.findMany({
    select: { slug: true }
  })

  const validSlugs = new Set(categoriesFromDb.map(c => c.slug))

  const fixedMedications = []
  const errors = []

  for (const med of medicationsCategories) {
    const validCategories = med.categories.filter(slug =>
      validSlugs.has(slug)
    )

    if (validCategories.length === 0) {
      errors.push({
        medication: med.name,
        originalCategories: med.categories
      })
      continue
    }

    fixedMedications.push({
      name: med.name,
      categories: validCategories
    })
  }

  console.log('✅ Medicações válidas:', fixedMedications.length)

  if (errors.length) {
    console.log('❌ Medicações sem categoria válida:')
    console.table(errors)
  }

  return fixedMedications
}

async function helper3() {
  const categories = await prisma.category.findMany({
    select: { id: true, slug: true }
  })

  const medications = await prisma.medication.findMany({
    select: { id: true, name: true }
  })

  const categoryMap = new Map(categories.map(c => [c.slug, c.id]))
  const medicationMap = new Map(medications.map(m => [m.name, m.id]))

  const relations = []

  for (const { name, categories } of medicationsCategories) {
    const medicationId = medicationMap.get(name)
    if (!medicationId) continue

    for (const categorySlug of categories) {
      const categoryId = categoryMap.get(categorySlug)
      if (!categoryId) continue

      relations.push({
        medicationId,
        categoryId
      })
    }
  }

  await prisma.categoryMedication.createMany({
    data: relations
  })
}