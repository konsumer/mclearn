var val = require('../utils').val

Blockly.Blocks['bot_connect_to_server'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('minecraft bot')
    this.appendValueInput('hostname')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('hostname')
      .appendField(new Blockly.FieldTextInput('localhost'), 'hostname')
    this.appendValueInput('port')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('port')
      .appendField(new Blockly.FieldTextInput('25565'), 'port')
    this.appendValueInput('username')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('username')
      .appendField(new Blockly.FieldTextInput('Bot'), 'username')
    this.appendValueInput('password')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('password')
    this.appendStatementInput('DO')
      .appendField('do')
    this.setColour(260)
    this.setTooltip('Connect to a server. This is the beginning of every Minecraft bot.')
    this.setHelpUrl('https://github.com/PrismarineJS/mineflayer/blob/master/doc/api.md#mineflayercreatebotoptions')
  }
}

// DEP: mineflayer
Blockly.JavaScript['bot_connect_to_server'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO')
  return `
var bot = mineflayer.createBot({
  host: ${val(block, 'hostname')},
  port: ${val(block, 'port')},
  username: ${val(block, 'username')},
  password: ${val(block, 'password')}
})

${statements_do}
`
}
