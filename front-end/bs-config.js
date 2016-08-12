// {
//   "proxy": "http://localhost:8080",
//   "port": 9000
// }


var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/todos', {
  target: 'http://localhost:8080',
  changeOrigin: true 
});

module.exports = {
  server: {
    middleware: {
      1: apiProxy
    }
  }
};
