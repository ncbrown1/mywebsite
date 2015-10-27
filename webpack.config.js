var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var deps = [
    'react/dist/react.min.js',
    'react-dom/dist/react-dom.min.js',
    'react-bootstrap/dist/react-bootstrap.min.js',
    'bootstrap/dist/css/bootstrap.min.css'
];

var config = {
    entry: path.resolve(__dirname, 'src/main.js'),
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: path.resolve(node_modules_dir, deps[0]),
            loader: "expose?React"
        }, { 
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   
            loader: "url?limit=10000&mimetype=application/font-woff" 
        }, { 
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   
            loader: "url?limit=10000&mimetype=application/font-woff2" 
        }, { 
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, { 
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file" 
        }, { 
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml" 
        }]
    }
}

// Run through deps and extract the first part of the path, 
// as that is what you use to require the actual node modules 
// in your code. Then use the complete path to point to the correct
// file and make sure webpack does not try to parse it
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});


module.exports = config;