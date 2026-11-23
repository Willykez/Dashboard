const base = require('./app.json');
module.exports = ({ config }) => {
  const repoBase = process.env.EXPO_PUBLIC_BASE_URL || '/';
  return {
    ...base.expo,
    ...config,
    web: {
      ...(base.expo.web || {}),
      ...(config.web || {}),
      bundler: 'metro',
      output: 'static',
      baseUrl: repoBase
    }
  };
};
