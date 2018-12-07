const path = require("path")
const { paths } = require("@craco/craco")

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, `${paths.appSrc}/components/`)
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@components(.*)$": "<rootDir>/src/components$1",
                "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
                "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
                "office-ui-fabric-react/lib/(.*)$": "office-ui-fabric-react/lib-commonjs/$1"
            }
        }
    }
}
