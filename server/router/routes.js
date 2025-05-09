import express from "express";
import { linkGenerator, getLink } from "../controller/controller.js";
const router = express.Router();

router.get("/gen", linkGenerator);
router.get("/:code", getLink);

export default router;
