import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      include: {
        medications: {
          orderBy: { name: 'asc' }
        }
      }
    })

    return categories
  })
}