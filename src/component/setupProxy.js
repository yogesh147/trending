const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("http://localhost:8080/", {
      target: "image/mysql.PNG",
      secure: false,
      changeOrigin: true
    })
  );

};
