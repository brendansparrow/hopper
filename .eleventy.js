const pluginPWA = require("eleventy-plugin-pwa");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // only content in the `posts` directory
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("./_site/posts/*.md").reverse();
  });

  // pass through manifest.json
  eleventyConfig.addPassthroughCopy("manifest.json");

  // output
  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "liquid",
    passthroughFileCopy: true,
    dir: {
      input: "./",
      output: "./_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    }
  };
};