const { defineConfig } = require('cypress');

const mobileConfig = {
    viewportWidth: 375,
    viewportHeight: 812,
}

const laptopConfig = {
    viewportWidth: 1366,
    viewportHeight: 768,
}

const env = process.env.CYPRESS_ENV;

let config;
switch (env) {
    case 'mobile':
        config = mobileConfig;
        break;
    case 'laptop':
        config = laptopConfig;
        break;
    default:
        console.error(`Invalid CYPRESS_ENV: ${env}`);
        process.exit(1);
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        ...config
    }
});
