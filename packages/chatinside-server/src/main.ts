import 'dotenv/config'
import { Server } from './server'

const server = new Server()
server
  .build()
  .then(() => {
    server.run()
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
