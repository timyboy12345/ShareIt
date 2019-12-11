const path = require('path');

module.exports = {
    entry: './src/shareit.js',
    mode: 'production',
    output: {
        filename: 'shareit.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
