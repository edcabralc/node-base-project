import { Router } from "express";

const routes = Router()

routes.get('/', (req, res)=> res.send('Servidor criado'))

export default routes
