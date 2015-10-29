'use strict';

import check from 'requiresafe/lib/check';
import formatters from 'requiresafe/lib/formatters/index';
import packageJson from 'package-json';

export default (name, version = 'latest') => {
  return new Promise((resolve, reject) => {
    packageJson(name, version).then((data) => {
      if (!data) {
        throw new Error(`Unexpected name/version. Got: ${name}@${version}`);
      }
      check({package: data}, (err, results) => {
        resolve(formatters.summary(err, results));
      });
    }).catch((err) => reject(err));
  });
}
