const express = require('express');
const connectDB = require('./html_css_theme/config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./html_css_theme/routes/api/users'));
app.use('/api/auth', require('./html_css_theme/routes/api/auth'));
app.use('/api/profile', require('./html_css_theme/routes/api/profile'));
app.use('/api/posts', require('./html_css_theme/routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use(cores());
  app.get('*', (req, res) => {
    res.setHeader('Access-control-allow-Credentials', true);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5017;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
