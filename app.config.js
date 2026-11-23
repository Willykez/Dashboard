const base = require('./app.json');
module.exports = ({ config }) => {
  const repoBase = process.env.EXPO_PUBLIC_BASE_URL || '/';
  return {
    ...base.expo,
    ...config,
    experiments: {
      ...(base.expo.experiments || {}),
      ...(config.experiments || {}),
      baseUrl: repoBase
    },
    web: {
      ...(base.expo.web || {}),
      ...(config.web || {}),
      bundler: 'metro',
      output: 'single'
    }
  };
};
