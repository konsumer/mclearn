// /blockfactory/#bot_health

Blockly.Blocks['bot_health'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('health')
    this.setOutput(true, 'Number')
    this.setColour(260)
    this.setTooltip('Number in the range [0, 20] representing the number of half-hearts.')
    this.setHelpUrl('https://github.com/PrismarineJS/mineflayer/blob/master/doc/api.md#bothealth')
  },
  onchange: function (event) {
    // TODO: check if it's in an on-block
  }
}

// TODO: validate this is in a bot flow

Blockly.JavaScript['bot_health'] = function (block) {
  return ['bot.health', Blockly.JavaScript.ORDER_NONE]
}

Blockly.addToolboxItem('bot_health', document.getElementById('tbMCclient'))
