const { composeWithJson } = require('graphql-compose-json');
const { schemaComposer } = require('graphql-compose');
const { printSchema } = require('graphql');
const argv = require('yargs')
.options({
    input:{
        alias: 'i',
        describe:'target json file\'s path',
        demandOption: true
    },
    name: {
        alias: 'n',
        describe: 'name for query type',
        demandOption: true
    },
    key: {
        alias: 'k',
        describe: 'key for query',
        demandOption: true
    }
})
.help()
.argv
const json = require(argv.input);

const GqlType = composeWithJson(argv.name, json);
schemaComposer.Query.addFields({
  [argv.key]: {
    type: GqlType,
    args: {
    }
  }
});

const schema = schemaComposer.buildSchema()
console.log(printSchema(schema));