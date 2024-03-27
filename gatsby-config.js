/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "contact book",
  },
  plugins: ["gatsby-plugin-styled-components"],
  proxy: {
    prefix: "/api",
    url: "http://localhost:8000",
  },
};