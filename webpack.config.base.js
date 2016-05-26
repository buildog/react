import path from 'path';

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    },

    {
        //Image loader:
        //Le plugin file permet de chercher toutes les images et de les inclure dans output.path?name
        //Pour plus de détails: https://github.com/webpack/file-loader/blob/master/README.md
        test: /\.(jp[e]?g|png|gif|svg)$/i,
        loader: "file-loader?name=img/[name].[ext]"

        //loader:"file-loader?name=[path]/[name].[ext]"
    }

    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};
