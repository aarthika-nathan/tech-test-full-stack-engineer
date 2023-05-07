import * as express from 'express';
import cors = require('cors');

let routes = require('./routes/jobRoutes');

const server = express();
const port = 8080;

server.use(cors());
server.use('/', routes);

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
