import express from "express";
import { getLink, linkGenerator } from "../controller/controller.js";
const router = express.Router();

router.get("/:code", getLink);
router.post("/", linkGenerator);

export default router;
