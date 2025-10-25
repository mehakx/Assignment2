// UPDATE: This imports the base plugin
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	// UPDATE: This uses the base plugin
	eleventyConfig.addPlugin(HtmlBasePlugin);

	// Copy any CSS and Javascript files to the output directory
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("source/**/*.css");
	eleventyConfig.addPassthroughCopy("source/**/*.js");
};