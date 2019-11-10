const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server is ready.'));

const fs = require('fs');
app.get('/api/v1/photo', (req, res) => {
  const options = {encoding: 'base64'};
  const stream = fs.createReadStream(__dirname + '/gratisography-paper-mache.jpg', options);

  stream.pipe(res);
});
