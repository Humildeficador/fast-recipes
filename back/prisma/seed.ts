import { prisma } from '../src/lib/prisma'

async function main() {
  // Limpa tudo
  await prisma.medication.deleteMany()
  await prisma.category.deleteMany()

  // ===== CATEGORIAS =====
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Antibióticos' },
      { name: 'Analgésicos' },
      { name: 'Antipiréticos' },
      { name: 'Anti-inflamatórios' },
      { name: 'Antialérgicos' },
    ],
  })

  const [
    antibioticos,
    analgesicos,
    antipireticos,
    antiInflamatorios,
    antiAlergicos,
  ] = await prisma.category.findMany({
    orderBy: { id: 'asc' },
  })

  // ===== MEDICAÇÕES =====

  // Analgésicos / Antipiréticos
  await prisma.medication.create({
    data: {
      name: 'Dipirona',
      categories: {
        connect: [
          { id: analgesicos.id },
          { id: antipireticos.id },
        ],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Paracetamol',
      categories: {
        connect: [
          { id: analgesicos.id },
          { id: antipireticos.id },
        ],
      },
    },
  })

  // Anti-inflamatórios
  await prisma.medication.create({
    data: {
      name: 'Ibuprofeno',
      categories: {
        connect: [
          { id: antiInflamatorios.id },
          { id: analgesicos.id },
        ],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Diclofenaco',
      categories: {
        connect: [{ id: antiInflamatorios.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Nimesulida',
      categories: {
        connect: [{ id: antiInflamatorios.id }],
      },
    },
  })

  // Antialérgicos
  await prisma.medication.create({
    data: {
      name: 'Loratadina',
      categories: {
        connect: [{ id: antiAlergicos.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Cetirizina',
      categories: {
        connect: [{ id: antiAlergicos.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Fexofenadina',
      categories: {
        connect: [{ id: antiAlergicos.id }],
      },
    },
  })

  // Antibióticos
  await prisma.medication.create({
    data: {
      name: 'Amoxicilina',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Amoxicilina + Clavulanato',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Azitromicina',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  await prisma.medication.create({
    data: {
      name: 'Cefalexina',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
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
