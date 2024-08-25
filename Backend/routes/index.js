import { Router } from "express";
import { eventRoutes } from "./eventRoutes.js";
import { opportunityRoutes } from "./opportunitiesRoutes.js";
import { notesRouter } from "./notesRoutes.js";

const router = Router();

router.use("/events", eventRoutes);
router.use("/jobs", opportunityRoutes);
router.use("/notes", notesRouter);

export { router };
