import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })

    return categories
  })

  app.get('/category/:slug/medications', async (req, res) => {
    console.log(req.params)
    console.log(res)
    return 'ok'
  })
}