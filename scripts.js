
var workspace = Blockly.inject('blockly-div', {
    toolbox: document.getElementById('toolbox'),
    toolboxPosition: 'end',
    horizontalLayout: true,
    scrollbars: false
  });

Blockly.defineBlocksWithJsonArray([{
    "type": "run_js",
    "message0": "Run JS [Developers only] %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "stopcustomalert",
    "message0": "Stop current script and error %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "stoptemplate",
    "message0": "Stop and error with %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Alert",
        "options": [
          [
            "No error specified",
            "NO"
          ],
          [
            "Code is going wrong.",
            "WRONG"
          ],
          [
            "Code is in development.",
            "DEVELOPMENT"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "encode",
    "message0": "Encode text into JosiahEncrypt %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "decode",
    "message0": "Decode JosiahEncrypt Code %1",
    "args0": [
      {
        "type": "input_value",
        "name": "Code",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }])