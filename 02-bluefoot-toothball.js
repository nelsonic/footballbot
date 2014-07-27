var FootballBot = require('footballbot');
var bot = new FootballBot('/dev/tty.HC-06-DevB');

// remember to change the pairing pin to 1234
// see: http://i.imgur.com/cltSClo.png
bot.on('ready', function () {
  this.digitalWrite(13, this.HIGH);
});
