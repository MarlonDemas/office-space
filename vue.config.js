const DEV_PORT = 8081;
module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: DEV_PORT,
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Office Space",
    },
  },
};
