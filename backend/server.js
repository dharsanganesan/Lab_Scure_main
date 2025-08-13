const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json()); // replaces body-parser

const MONGODB_URI = 'mongodb+srv://admin:admin%40123@labsafetycluster.tmklrje.mongodb.net/labsafetyDB?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Force the schema to use the "userlog" collection (where you inserted data)
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, lowercase: true },
  password: { type: String, required: true },
}, { collection: 'userlog' });

const Admin = mongoose.model('Admin', adminSchema);

// MAKE THE ROUTE MATCH YOUR APP
app.post('/api/admin/login', async (req, res) => {
  console.log("Login request received:", req.body); // Logs incoming data

  const { email, password } = req.body;
  console.log("Email:", email);
  console.log("Password:", password);

  try {
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() }).lean();
    console.log("Admin found in DB:", admin);

    if (!admin || admin.password !== password) {
      console.log("Invalid credentials");
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    console.log("Login successful for:", email);
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/health', (_, res) => res.send('ok'));

app.listen(5000, '0.0.0.0', () => console.log('🚀 Server running on http://0.0.0.0:5000'));
