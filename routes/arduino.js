var express = require('express');
var router = express.Router();
const arduinoService = require('../arduino/arduino.service')

router.get('/rgb', async (req, res) => {
  const { r, g, b, } = req.query;
  if (!r || !g || !b) {
    return res.status(400).send('Missing rgb property');
  }

  const rgb = {
    r: parseInt(r, 10),
    g: parseInt(g, 10),
    b: parseInt(b, 10),
  };

  // send instructions to arduino here
  const arduinoResponse = await arduinoService.sendRGB(rgb);
  return res.send(arduinoResponse);
});

module.exports = router;