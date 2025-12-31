import { forms } from './forms'
import { categories } from './categories'
import { medications } from './medications'
import { prisma } from '../../src/lib/prisma'

export async function main() {
  await prisma.category.deleteMany()
  await prisma.medication.deleteMany()
  await prisma.form.deleteMany()

  categories.map(async ({ name, slug }) => {
    await prisma.category.create({
      data: {
        name,
        slug
      }
    })
  })

  medications.forEach(async ({ generic_name }) => {
    await prisma.medication.create({
      data: {
        name: generic_name
      }
    })
  })

  forms.map(async ({ name, slug, unit_label }) => {
    await prisma.form.create({
      data: {
        name,
        slug,
        unit_label
      }
    })
  })

  console.log('🌱 Seed executado com sucesso')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })