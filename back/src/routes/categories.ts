import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })

    return categories
  })
}