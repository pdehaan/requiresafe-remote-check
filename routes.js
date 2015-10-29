'use strict';

import Boom from 'boom';
import checkPackage from './lib/checkpackage';

export default [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      reply('Hello, world!');
    }
  }, {
    method: 'GET',
    path: '/check/{name}/{version?}',
    handler: (req, reply) => {
      let {name, version} = req.params;
      checkPackage(name, version).then(reply).catch((err) => {
        Boom.wrap(err, 400);
        reply(err);
      });
    }
  }
];
