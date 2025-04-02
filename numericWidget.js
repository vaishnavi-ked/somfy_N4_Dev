require(['bajaux/Widget', 'baja!'], function (Widget, baja) {
  var NumericWidget = function NumericWidget() {
    Widget.apply(this, arguments);
  };
  NumericWidget.prototype = Object.create(Widget.prototype);

  // Reference to the NumericWritable point
  var numericOrd = 'local:|fox:|station:|slot:/alarm/NumericWritable';

  // Initialize UI
  NumericWidget.prototype.doInitialize = function (dom) {
    var that = this;
    dom.addClass('NumericWidget');

    // Create input field & save button
    dom.html('<input type="number" id="numInput" readonly />' + '<button id="refreshBtn">Refresh</button>' + '<button id="saveBtn">Save</button>');

    // Load initial value from Niagara
    that.loadNumericValue();

    // Event Listeners
    dom.find('#refreshBtn').on('click', function () {
      that.loadNumericValue(); // Refresh value from Niagara
    });
    dom.find('#saveBtn').on('click', function () {
      that.saveNumericValue(); // Save updated value
    });
  };

  // Fetch NumericWritable value from Niagara and display it
  NumericWidget.prototype.loadNumericValue = function () {
    var that = this;
    baja.Ord.make(numericOrd).get().then(function (numericWritable) {
      var value = numericWritable.get('out').getValue();
      that.$getInput().val(value);
    })["catch"](console.error);
  };

  // Save updated value back to Niagara
  NumericWidget.prototype.saveNumericValue = function () {
    var newValue = parseFloat(this.$getInput().val());
    baja.Ord.make(numericOrd).get().then(function (numericWritable) {
      return numericWritable.set('out', newValue);
    }).then(function () {
      console.log("Value updated successfully!");
    })["catch"](console.error);
  };

  // Get input element
  NumericWidget.prototype.$getInput = function () {
    return $('.NumericWidget #numInput');
  };
  return NumericWidget;
});
