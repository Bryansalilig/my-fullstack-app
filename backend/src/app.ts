import express from "express";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(express.json());
app.use("/api/v1", healthRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "Backend API is running",
  });
});

export default app;

// Express Configuration
