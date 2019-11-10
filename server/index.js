const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server is ready.'));

const fs = require('fs');
app.get('/api/v1/photo', (req, res) => {
  const photo = fs.readFileSync('./gratisography-paper-mache.jpg');
  const data = Buffer.from(photo).toString('base64');

  res.send('data:image/png;base64,' + data);
});
