require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - ALLOW LOCALHOST
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
}));

// Body parser
app.use(express.json()); // Use express.json() instead of body-parser
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to contact route
app.use("/api/contact", limiter);

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Contact API",
    status: "active",
    timestamp: new Date().toISOString(),
    endpoints: {
      contact: "POST /api/contact",
      health: "GET /health",
      contactHealth: "GET /api/contact/health",
    },
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Contact routes
app.use("/api/contact", contactRoutes);

// 404 handler - FIXED: Use the correct syntax for catch-all route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
    availableEndpoints: {
      root: "GET /",
      health: "GET /health",
      contact: "POST /api/contact",
      contactHealth: "GET /api/contact/health",
    },
  });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`📧 Emails will be sent to: ${process.env.EMAIL_TO}`);
  console.log(`🔗 CORS enabled for: ${process.env.FRONTEND_URL }`);
});