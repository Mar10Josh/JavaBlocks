CustomConstantsProvider = function() {
    // Set up all of the constants from the base provider.
    CustomConstantsProvider.superClass_.constructor.call(this);
  
    // Override a few properties.
    /**
     * The width of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_WIDTH = 50;
  
    /**
     * The height of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_HEIGHT = 5;
  
    /**
     * Rounded corner radius.
     * @type {number}
     * @override
     */
    this.CORNER_RADIUS = 100;
    /**
     * The height of the puzzle tab used for input and output connections.
     * @type {number}
     * @override
     */
    this.TAB_HEIGHT = 8;
  };
  Blockly.utils.object.inherits(CustomConstantsProvider,
      Blockly.blockRendering.ConstantProvider);
  



CustomRenderer = function(name) {
    CustomRenderer.superClass_.constructor.call(this, name);
  };
  CustomRenderer.prototype.makeConstants_ = function() {
    return new CustomConstantsProvider();
  };
  Blockly.utils.object.inherits(CustomRenderer,
      Blockly.blockRendering.Renderer);
      Blockly.blockRendering.register('custom_renderer', CustomRenderer);
