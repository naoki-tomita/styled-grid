module.exports = {
  entry: "./example/index.jsx",
  output: {
    path: __dirname + "/example",
    filename: 'main.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};