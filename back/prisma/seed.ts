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

  /* DIPIRONA */
  await prisma.medication.create({
    data: {
      name: 'Dipirona',
      dosage: '500mg|1g',
      frequency: '6/6h|8/8h',
      duration: '3 dias|5 dias',
      categories: {
        connect: [
          { id: analgesicos.id },
          { id: antipireticos.id },
        ],
      },
    },
  })

  /* PARACETAMOL */
  await prisma.medication.create({
    data: {
      name: 'Paracetamol',
      dosage: '500mg|750mg',
      frequency: '6/6h|8/8h',
      duration: '3 dias|5 dias',
      categories: {
        connect: [
          { id: analgesicos.id },
          { id: antipireticos.id },
        ],
      },
    },
  })

  /* IBUPROFENO */
  await prisma.medication.create({
    data: {
      name: 'Ibuprofeno',
      dosage: '400mg|600mg',
      frequency: '8/8h',
      duration: '5 dias|7 dias',
      categories: {
        connect: [
          { id: antiInflamatorios.id },
          { id: analgesicos.id },
        ],
      },
    },
  })

  /* DISCLOFENACO */
  await prisma.medication.create({
    data: {
      name: 'Diclofenaco',
      dosage: '50mg',
      frequency: '8/8h|12/12h',
      duration: '5 dias',
      categories: {
        connect: [{ id: antiInflamatorios.id }],
      },
    },
  })

  /* NIMESULIDA */
  await prisma.medication.create({
    data: {
      name: 'Nimesulida',
      dosage: '100mg',
      frequency: '12/12h',
      duration: '5 dias',
      categories: {
        connect: [{ id: antiInflamatorios.id }],
      },
    },
  })

  /* LORATADINA */
  await prisma.medication.create({
    data: {
      name: 'Loratadina',
      dosage: '10mg',
      frequency: '1x/dia',
      duration: '7 dias|10 dias',
      categories: {
        connect: [{ id: antiAlergicos.id }],
      },
    },
  })

  /* CETIRIZINA */
  await prisma.medication.create({
    data: {
      name: 'Cetirizina',
      dosage: '10mg',
      frequency: '1x/dia',
      duration: '7 dias|10 dias',
      categories: {
        connect: [{ id: antiAlergicos.id }],
      },
    },
  })

  /* AMOXICILINA */
  await prisma.medication.create({
    data: {
      name: 'Amoxicilina',
      dosage: '500mg|875mg',
      frequency: '8/8h|12/12h',
      duration: '7 dias|10 dias',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  /* AMOXICILINA + CLAVULANATO */
  await prisma.medication.create({
    data: {
      name: 'Amoxicilina + Clavulanato',
      dosage: '500mg + 125mg|875mg + 125mg',
      frequency: '8/8h|12/12h',
      duration: '7 dias|10 dias',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  /* AZITROMICINA */
  await prisma.medication.create({
    data: {
      name: 'Azitromicina',
      dosage: '500mg',
      frequency: '1x/dia',
      duration: '3 dias|5 dias',
      categories: {
        connect: [{ id: antibioticos.id }],
      },
    },
  })

  /* CEFALEXINA */
  await prisma.medication.create({
    data: {
      name: 'Cefalexina',
      dosage: '500mg',
      frequency: '6/6h|8/8h',
      duration: '7 dias',
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
