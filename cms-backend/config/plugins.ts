export default {
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      depthLimit: 10,
      amountLimit: 100,
      defaultLimit: 100,
      maxLimit: 100,
    },
  },
};
