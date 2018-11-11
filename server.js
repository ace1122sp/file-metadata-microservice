const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

// config 
const PORT = process.env.PORT || 3000;
const PUBLIC = path.resolve(__dirname, 'public');

// middlewares 
app.use(helmet());
app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.use('/public', express.static(PUBLIC));

// routes
app.get('/*', (req, res) => {
  res.send('helloworld');
});

// app.post('/api/fileanalyse', (req, res) => {});

// boot up the app
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

