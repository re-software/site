const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist/codebase"),
    publicPath: "./codebase/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")({
                  browsers: ["last 2 versions", "ie >= 11"]
                }),
                require("css-mqpacker")(),
                require("cssnano")({
                  discardComments: {
                    removeAll: true
                  },
                  zindex: false
                })
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader?sourceMap',
      //     'postcss-loader'
      //   ]
      // },
      {
        test: /\.(tsx?|ts)$/,
        // use:'ts-loader'
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.svg$/,
        loader: "vue-svg-loader",
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          },
          {
            loader: 'image-webpack-loader'
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json", ".svg"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimize: true
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template:"./src/index_tpl.html",
      minify: true,
      hash: true
    })
  ]);
}
