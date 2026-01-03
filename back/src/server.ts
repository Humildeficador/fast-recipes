import fastify from 'fastify'
import cors from '@fastify/cors'
import { categoriesRoutes } from './routes/categories'
import { medicationsRotes } from './routes/medications'
import { prescriptionRoutes } from './routes/prescription'

async function bootstrap() {
  const app = fastify()

  await app.register(cors, { origin: 'http://localhost:5173' })

  await app.register(categoriesRoutes)
  await app.register(medicationsRotes)
  await app.register(prescriptionRoutes)

  try {
    await app.listen({ port: 3000 })
    console.log('Server running on http://localhost:3000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

bootstrap()