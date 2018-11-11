const fs = require('fs');
const path = require('path');

const sendMetadata = (req, res) => {
  const file = req.body.upfile;
  // fs.writeFile(path.resolve(__dirname, '../file'), file, /)
  fs.copyFile(file, path.resolve(__dirname, './file'), err => {
    if (err) throw err;
    console.log('file copied');
    res.sendFile(req.body.upfile);
  });
  // console.log(file);
  // res.send('ok');
}

module.exports = { sendMetadata };