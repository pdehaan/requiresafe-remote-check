'use strict';

import Hapi from 'hapi';
import routes from './routes';

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.route(routes);

export default server;
