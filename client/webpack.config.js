const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'], // Add '.json' if your project uses JSON files
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader', // Or babel-loader if you use Babel
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'], // For processing CSS, Tailwind
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // For image assets
            },
            // Add other loaders as needed 
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // Template HTML file
        }),
        // Add other plugins as needed
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    // Add other configurations like optimization, devtool, etc., as needed
};