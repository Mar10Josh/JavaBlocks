Blockly.JavaScript['run_js'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = eval(value_name);
  return code;
};

Blockly.JavaScript['stopcustomalert'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  alert(value_name)
};

Blockly.JavaScript['stoptemplate'] = function(block) {
  var dropdown_alert = block.getFieldValue('Alert');
  // TODO: Assemble JavaScript into code variable.
  alert(dropdown_alert)
};

Blockly.JavaScript['encode'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Not Finished. Expect a future update!';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_EXTERNAL];
};

Blockly.JavaScript['decode'] = function(block) {
  var value_code = Blockly.JavaScript.valueToCode(block, 'Code', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Not Finished. Expect a future update!';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_EXTERNAL];
};