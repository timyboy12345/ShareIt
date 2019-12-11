const path = require('path');

module.exports = {
    entry: './src/shareit.js',
    mode: 'development',
    output: {
        filename: 'shareit.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
