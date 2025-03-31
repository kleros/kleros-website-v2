export default ({ env }) => {
  return {
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
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            region: env("AWS_REGION"),
            params: {
              ACL: env("AWS_ACL", "public-read"),
              signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
              Bucket: env("AWS_BUCKET_NAME"),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
      },
    },
  };
};
