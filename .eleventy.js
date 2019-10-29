module.exports = function(eleventyConfig) {

  // output
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "./",
      output: "./_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};