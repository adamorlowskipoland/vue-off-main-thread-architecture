/* eslint-disable */
const WorkerPlugin = require("worker-plugin");

module.exports = {
  chainWebpack: config => {
    config.plugin("worker").use(WorkerPlugin);
  },
  publicPath: process.env.NODE_ENV === "production"
    ? "/vue-off-main-thread-architecture/"
    : "/",
};
