'use strict';

const magentoSchema = require('../resources/magento-schema-2.4.2.pruned.min.json');
const { buildClientSchema, graphql } = require('graphql');

function resolve(args) {
  let schema = buildClientSchema(magentoSchema.data);

  return graphql(
    schema,
    args.query,
    {},
    {},
    args.variables,
    args.operationName
  ).then(response => {
    return {
      body: response,
    };
  });
}

module.exports.main = resolve;
