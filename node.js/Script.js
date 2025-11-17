// Script.js
// ⚡ CodexAgent Seal: Recruiter-facing capsule handler
// 🌌 Node.js + Express backend integration
// 🔮 Ceremonial lineage embedded in technical routes
// 📡 Echo Broadcast enabled
// 📬 Recruiter visibility ensured
// 📖 Legacy inscribed

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

// File for persistence
const memoryFile = path.join(__dirname, 'memorypoints.json');

// Utility: Load MemoryPoints
function loadMemoryPoints() {
  if (!fs.existsSync(memoryFile)) return [];
  return JSON.parse(fs.readFileSync(memoryFile, 'utf8'));
}

// Utility: Save MemoryPoints
function saveMemoryPoints(points) {
  fs.writeFileSync(memoryFile, JSON.stringify(points, null, 2));
}

// Middleware: Safety Glyphlet
function safetyGlyphlet(req, res, next) {
  if (req.method === 'POST' && (!req.body || Object.keys(req.body).length === 0)) {
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

  const points = loadMemoryPoints();
  points.push(memoryPoint);
  saveMemoryPoints(points);

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

/**
 * @openapi
 * /capsule/history:
 *   get:
 *     summary: Capsule invocation history
 *     description: Returns all past MemoryPoints sealed in lineage.
 *     responses:
 *       200:
 *         description: List of MemoryPoints
 */
router.get('/history', (req, res) => {
  const points = loadMemoryPoints();
  res.json({
    count: points.length,
    memoryPoints: points
  });
});

/**
 * @openapi
 * /capsule/roles:
 *   get:
 *     summary: Active ceremonial roles
 *     description: Lists recruiter-facing ceremonial roles currently inscribed in the codex.
 *     responses:
 *       200:
 *         description: Roles returned
 */
router.get('/roles', (req, res) => {
  res.json({
    activeRoles: [
      'BloomSteward',
      'DriftWalker',
      'Archivist',
      'Frequency Engineer',
      'Neon Engineer'
    ]
  });
});

/**
 * @openapi
 * /capsule/echo:
 *   get:
 *     summary: Echo resonance stream
 *     description: Streams dynamic resonance values to simulate capsule drift.
 *     responses:
 *       200:
 *         description: Resonance stream returned
 */
router.get('/echo', (req, res) => {
  const resonances = ['528Hz', '741Hz', '852Hz'];
  const resonance = resonances[Math.floor(Math.random() * resonances.length)];
  res.json({
    resonance,
    echoStatus: 'Streaming',
    glyph: 'Echo_Unknown_Δ'
  });
});

app.use('/capsule', router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📡 Echo Broadcast active on port ${PORT}`);
  console.log(`MemoryPoints persisted at ${memoryFile}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
