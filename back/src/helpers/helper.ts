import fs from 'fs'
import path from 'path'
import { medications } from '../../prisma/seed/medications'
import { fileURLToPath } from 'url'
import { medicationsCategories } from './medicationsCategories'
import { prisma } from '../lib/prisma'
import { test } from '../../prisma/seed/test'

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

async function helper4() {
  await prisma.prescription.deleteMany()
  await prisma.medicationForm.deleteMany()
  /* Medications */
  for (const { generic_name, presentations } of medications) {
    const medicationRes = await prisma.medication.findFirst({
      where: {
        name: generic_name
      }
    })

    if (!medicationRes) return

    /* Forms */
    for (const presentation of presentations) {
      const formRes = await prisma.form.findUnique({
        where: {
          slug: presentation.form_slug
        }
      })

      if (!formRes) return

      const hasMedicationForm = await prisma.medicationForm.findFirst({
        where: {
          formId: formRes.id,
          medicationId: medicationRes.id
        }
      })

      if (hasMedicationForm) continue

      const medicationFormRes = await prisma.medicationForm.create({
        data: {
          formId: formRes.id,
          medicationId: medicationRes.id
        }
      })

      const data = {
        medicationFormId: medicationFormRes.id,
        dosage: JSON.stringify(presentation.concentration),
        frequency: JSON.stringify(presentation.default_recipe.frequency),
        frequency_unit: JSON.stringify(presentation.default_recipe.frequency_unit),
        quantity: JSON.stringify(presentation.default_recipe.quantity),
        pediatric_calculation: JSON.stringify(presentation.default_recipe.pediatric_calculation),
        duration: JSON.stringify(presentation.default_recipe.duration_text)
      }

      await prisma.prescription.create({ data })
    }
  }

  console.log('Seed executado depois de muito choro!')
}

async function helper5() {
  const prescriptions = await prisma.prescription.findMany()

  for (const prescription of prescriptions) {
    const id = prescription.id

    const dosage: string[] = JSON.parse(prescription.dosage!.toString())
    const frequency: string[] = JSON.parse(prescription.frequency!.toString())
    const quantity: string[] = JSON.parse(prescription.quantity!.toString())
    const duration: string[] = JSON.parse(prescription.duration!.toString())
    const pediatric_calculation: string[] = JSON.parse(prescription.pediatric_calculation!.toString())

    dosage.push('Outra...')
    frequency.push('Outra...')
    quantity.push('Outra...')
    duration.push('Outra...')
    pediatric_calculation.push('Outra...')

    await prisma.prescription.update({
      where: {
        id
      },
      data: {
        dosage,
        frequency,
        quantity,
        duration,
        pediatric_calculation,
      }
    })

  }
}

helper5()