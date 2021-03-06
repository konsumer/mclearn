Blockly.Blocks['bot_is_raining'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("it's raining")
    this.setOutput(true, 'Boolean')
    this.setColour(260)
    this.setTooltip('Is it raining in the world?')
    this.setHelpUrl('https://github.com/PrismarineJS/mineflayer/blob/master/doc/api.md#botisraining')
  },
  onchange: function (event) {
    var err = null
    if (!require('../utils').inBotBolock(this)) {
      err = 'This block must be inside a minecraft bot block.'
    }
    this.setWarningText(err)
  }
}

Blockly.JavaScript['bot_is_raining'] = function (block) {
  return ['bot.isRaining', Blockly.JavaScript.ORDER_NONE]
}
