const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server is ready.'));

const fs = require('fs');
app.get('/api/v1/photo', (req, res) => {
  const options = {encoding: 'base64'};

  fs.readFile('./gratisography-paper-mache.jpg', options, (err, base64) => {
    if (err) {
      return res.status(404).send(err);
    }

    res.send('data:image/png;base64,' + base64);
  });
});
