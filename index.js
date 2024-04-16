const express = require('express');
const catsRouter = require('./routes/cat.routes');
const app = express();


app.use(express.json());

// Routes
app.use('/cats', catsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
