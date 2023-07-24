// task_2/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // You can change the level of messages to error, warning, info or none
              minimizerOptions: {
                plugins: ['optipng'],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
};

