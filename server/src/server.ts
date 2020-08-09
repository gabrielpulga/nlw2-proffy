import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
// tells express to use json as data format
app.use(express.json());
app.use(cors());
app.use(routes);

// GET: buscar ou listar info existente
// POST: criar info
// PUT: atualizar info existente
// DELETE: deletar info existente

// request body: dados para criação ou atualização de um registro
// route params: used to identify which resource to update or delete (e.g. :id)
// query params: paginação, filtros, ordenação 


//port we'll be utilizing : localhost:3333
app.listen(3333);