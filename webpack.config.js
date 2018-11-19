const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    library: "MusicGenerator",
    //libraryExport: "default",
    libraryTarget: "window",
    
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
      ignored: [/node_modules/, /dist/]
  }
};