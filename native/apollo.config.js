module.exports = {
  client: {
    service: {
      includes: ['./operations/**/*.js'],
      localSchemaFile: './graphql-schema.json',
      name: 'todos-backend',
      url: `http://localhost:4000`,
    },
  },
};