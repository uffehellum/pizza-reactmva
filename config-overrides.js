module.exports = function override(config, env) {
    process.env.PORT = 3001
    config.entry[1] = require.resolve(process.cwd() + '/src/sandbox/index.tsx')
    return config;
}
