import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()

await app.register(cors, {
  origin: 'http://localhost:5173'
})

app.get('/health', async () => {
  return { ok: true }
})

try {
  await app.listen({ port: 3000 })
  console.log('Server running on http://localhost:3000')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}