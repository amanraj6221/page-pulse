const axios = require("axios");
const cheerio = require("cheerio");

const analyzeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const startTime = Date.now();

    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent": "PagePulse/1.0",
      },
    });

    const responseTime = Date.now() - startTime;

    const html = response.data;

    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const metaDescription =
      $('meta[name="description"]').attr("content") || "";

    const h1Count = $("h1").length;

    const imagesMissingAlt = $("img").filter((i, el) => !$(el).attr("alt")).length;

    const wordCount = $("body").text().trim().split(/\s+/).length;

    return res.json({
      success: true,
      data: {
        status: response.status,
        responseTime: `${responseTime} ms`,
        title,
        metaDescription,
        h1Count,
        imagesMissingAlt,
        wordCount,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeWebsite,
};