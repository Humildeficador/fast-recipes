import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })

    return categories
  })

  app.get<{ Params: { slug: string } }>('/category/:slug/medications',
    async (req, res) => {
      const { slug } = req.params
      const category = await prisma.category.findFirstOrThrow({
        where: {
          slug
        },
        include: {
          medications: {
            orderBy: {
              medication: {
                name: 'asc'
              }
            },
            include: {
              medication: {
                include: {
                  forms: {
                    include: {
                      form: true
                    }
                  }
                }
              }
            },
          }
        }
      })  

      return category.medications.map(m => m.medication)
    }
  )
}