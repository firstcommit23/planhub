module.exports = {
  webpack(config, { isServer }) {
    const prod = process.env.NODE_ENV === 'production';

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
};
