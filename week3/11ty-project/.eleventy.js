module.exports = function(eleventyConfig) {

    // Copy assets to the output folder
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return {
    dir: {
        input: "src",
        output: "_site"
    }
    }
};

