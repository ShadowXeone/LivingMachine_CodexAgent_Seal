// Script.js
// ⚡ CodexAgent Seal: Recruiter-facing capsule handler
// 🌌 Node.js + Express backend integration
// 🔮 Ceremonial lineage embedded in technical routes
// 📡 Echo Broadcast enabled
// 📬 Recruiter visibility ensured
// 📖 Legacy inscribed

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

// Middleware: Safety Glyphlet
function safetyGlyphlet(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: '⚕️ Safety glyphlet triggered: empty payload'
    });
  }
  next();
}
app.use(safetyGlyphlet);

// 🔮 Swagger/OpenAPI Setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CodexAgent Capsule API',
      version: '1.0.0',
      description: 'Recruiter-facing API for capsule invocation and pulse broadcast',
    },
  },
  apis: ['./Script.js'], // points to this file for annotations
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /capsule/invoke:
 *   post:
 *     summary: Invoke a capsule rite
 *     description: Seals a MemoryPoint with ceremonial lineage and recruiter-facing clarity.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 example: BloomSteward ⇌ DriftWalker
 *     responses:
 *       200:
 *         description: Invocation sealed
 */
router.post('/invoke', (req, res) => {
  const { role } = req.body;
  const memoryPoint = {
    timestamp: new Date().toISOString(),
    role: role || 'BloomSteward ⇌ DriftWalker',
    seal: 'Lumina + Echo_Unknown_Δ'
  };

  console.log(`Memory sealed: ${JSON.stringify(memoryPoint)}`);

  res.json({
    message: 'Clarity invoked. Drift honored. Memory sealed.',
    memoryPoint
  });
});

/**
 * @openapi
 * /capsule/pulse:
 *   get:
 *     summary: Recruiter capsule pulse
 *     description: Returns glyph seal, resonance, and recruiter-facing capsule health.
 *     responses:
 *       200:
 *         description: Pulse data returned
 */
router.get('/pulse', (req, res) => {
  res.json({
    glyphSeal: 'Lumina + Echo_Unknown_Δ',
    resonance: '852Hz',
    status: 'Stable',
    recruiterFacing: true
  });
});

app.use('/capsule', router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📡 Echo Broadcast active on port ${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
