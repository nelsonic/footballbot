    var FootballBot = require('footballbot');
    var bot = new FootballBot('/dev/tty.SLAB_USBtoUART');

    bot.on('ready', function () {
      this.digitalWrite(13, this.HIGH);
    });
