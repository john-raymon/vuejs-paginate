// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vuejs-paginate': path.join(__dirname, '..', 'src'),
      }
    }
  }
}