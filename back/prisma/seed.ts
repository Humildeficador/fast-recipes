import { prisma } from '../src/lib/prisma'

async function main() {
  // Limpa tudo
  await prisma.medication.deleteMany()
  await prisma.category.deleteMany()

  // Categorias
  const antibioticos = await prisma.category.create({
    data: { name: 'Antibióticos' },
  })

  const antiInflamatorios = await prisma.category.create({
    data: { name: 'Anti-inflamatórios' },
  })

  const analgesicos = await prisma.category.create({
    data: { name: 'Analgésicos' },
  })

  const antipireticos = await prisma.category.create({
    data: { name: 'Antipiréticos' },
  })

  const antiAlergicos = await prisma.category.create({
    data: { name: 'Antialérgicos' },
  })

  // Antibióticos
  await prisma.medication.createMany({
    data: [
      { name: 'Amoxicilina', categoryId: antibioticos.id },
      { name: 'Amoxicilina + Clavulanato', categoryId: antibioticos.id },
      { name: 'Azitromicina', categoryId: antibioticos.id },
      { name: 'Cefalexina', categoryId: antibioticos.id },
      { name: 'Ceftriaxona', categoryId: antibioticos.id },
      { name: 'Ciprofloxacino', categoryId: antibioticos.id },
      { name: 'Clindamicina', categoryId: antibioticos.id },
      { name: 'Doxiciclina', categoryId: antibioticos.id },
      { name: 'Levofloxacino', categoryId: antibioticos.id },
      { name: 'Metronidazol', categoryId: antibioticos.id },
      { name: 'Sulfametoxazol + Trimetoprima', categoryId: antibioticos.id },
    ],
  })

  // Anti-inflamatórios
  await prisma.medication.createMany({
    data: [
      { name: 'Ibuprofeno', categoryId: antiInflamatorios.id },
      { name: 'Nimesulida', categoryId: antiInflamatorios.id },
      { name: 'Diclofenaco', categoryId: antiInflamatorios.id },
      { name: 'Cetoprofeno', categoryId: antiInflamatorios.id },
      { name: 'Meloxicam', categoryId: antiInflamatorios.id },
      { name: 'Piroxicam', categoryId: antiInflamatorios.id },
      { name: 'Indometacina', categoryId: antiInflamatorios.id },
    ],
  })

  // Analgésicos
  await prisma.medication.createMany({
    data: [
      { name: 'Dipirona', categoryId: analgesicos.id },
      { name: 'Paracetamol', categoryId: analgesicos.id },
      { name: 'Tramadol', categoryId: analgesicos.id },
      { name: 'Codeína', categoryId: analgesicos.id },
    ],
  })

  // Antipiréticos
  await prisma.medication.createMany({
    data: [
      { name: 'Paracetamol', categoryId: antipireticos.id },
      { name: 'Dipirona', categoryId: antipireticos.id },
    ],
  })

  // Antialérgicos
  await prisma.medication.createMany({
    data: [
      { name: 'Loratadina', categoryId: antiAlergicos.id },
      { name: 'Desloratadina', categoryId: antiAlergicos.id },
      { name: 'Cetirizina', categoryId: antiAlergicos.id },
      { name: 'Fexofenadina', categoryId: antiAlergicos.id },
      { name: 'Hidroxizina', categoryId: antiAlergicos.id },
    ],
  })
}

main()
  .then(() => {
    console.log('🌱 Seed de medicações executada com sucesso')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })