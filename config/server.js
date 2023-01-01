module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 6725),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env('STRAPI_BASE_URL', 'https://strapi-production-35f9.up.railway.app')
});
