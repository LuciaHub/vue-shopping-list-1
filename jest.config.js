module.exports = {
    "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
    ],
    "transform": {
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFiles: [
        './src/test-setup.js'
    ]
};