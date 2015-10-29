'use strict';

import server from './server';

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
