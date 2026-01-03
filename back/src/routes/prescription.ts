import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function prescriptionRoutes(app: FastifyInstance) {
  app.get<{ Params: { formId: string, medicationId: string } }>
    ('/prescription/forms/:formId/medication/:medicationId', async (req, res) => {
      const { formId, medicationId } = req.params

      const hasMedicationForm = await prisma.medicationForm.findFirst({
        where: {
          formId: parseInt(formId),
          medicationId: parseInt(medicationId),
          isActive: true
        }
      })

      if (!hasMedicationForm) {
        return res.code(404).send({ message: 'Forma de aplicação não encontrada' })
      }

      const prescription = await prisma.prescription.findFirst({
        where: {
          medicationForm: {
            formId: parseInt(formId),
            medicationId: parseInt(medicationId),
            isActive: true
          }
        }
      })
      return prescription
    })
}