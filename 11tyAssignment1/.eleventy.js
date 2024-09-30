
module.exports = function(eleventyConfig) {

    
    eleventyConfig.addCollection("products", function() {
        return require("./src/_data/products.json").products;
    
    });
    

    // Copy assets to the output folder
    eleventyConfig.addPassthroughCopy("src/assets");
    
    
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};


