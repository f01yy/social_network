import path from "path"
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default (env: { port?: number; mode?: 'production' }) => {
  const mode = env.mode
  const port = env.port
  const isDev = mode !== 'production'

  const config: webpack.Configuration = {
    mode: mode || 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: [
      new HtmlWebpackPlugin({ 
        template: path.resolve(__dirname, 'public', 'index.html'),
        title: 'Development',
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'src/[name].[contenthash:8].css',
        chunkFilename: 'src/[name].[contenthash:8].css',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      mainFiles: ['index'],
      alias: {},
    },
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devServer: mode !== 'production' ? {
      static: path.resolve(__dirname, 'dist'),
      open: true,
      hot: true,
      port: port || 3000,
      historyApiFallback: true,
    } : undefined,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', 
              options: {
                modules: {
                  namedExport: false,
                  auto: (resPath: string) => resPath.includes('.module.scss'),
                  localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                },
          
              }
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|woff|woff2)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ]
    },
  }

  return config
}