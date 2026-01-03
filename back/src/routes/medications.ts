import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function medicationsRotes(app: FastifyInstance) {
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
                    where: {
                      isActive: true
                    },
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