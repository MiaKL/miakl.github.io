const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//app.use(express.static(path.join(__dirname, '../frontend')));

app.use(express.static(path.join(process.cwd(),'client','dist', 'frontend', 'index.html')));


app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, '../frontend/index.html'));
  res.sendFile(path.join(process.cwd(),'client','dist','index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});