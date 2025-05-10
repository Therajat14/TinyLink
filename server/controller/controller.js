import Link from "../model/model.js";
import { customAlphabet } from "nanoid";

// POST /api/shorten
const linkGenerator = async (req, res) => {
  const { originalUrl } = req.body;
  const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
  const code = nanoid();
  const shortUrl = `${req.protocol}://${req.get("host")}/${code}`;

  try {
    const newLink = new Link({
      uniqueId: code,
      originalUrl,
    });

    await newLink.save();

    return res.status(201).json({
      message: "Short URL created successfully",
      shortUrl,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating short URL",
      error,
    });
  }
};

// GET /:code
const getLink = async (req, res) => {
  const { code } = req.params;
  console.log(code);

  try {
    const link = await Link.findOne({ uniqueId: code });

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    link.clicks += 1;
    await link.save();
    // return res.status(200).json({
    //   message: "Link retrieved successfully",
    //   originalUrl: link.originalUrl,
    // });
    return res.redirect(link.originalUrl);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving link",
      error,
    });
  }
};

export { linkGenerator, getLink };
