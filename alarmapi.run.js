require(['baja!', 'bajaux/events', 'nmodule/alarmapi/rc/alarmapi', 'jquery', 'nmodule/alarmapi/rc/AlarmapiWidget', 'hbs!nmodule/alarmapi/rc/template/alarmapi'], function (baja, events, alarmapi, $, AlarmapiWidget, template) {
  'use strict';

  $("#template").html(template({
    virtues: alarmapi.extolVirtues()
  }));
  var widget = new AlarmapiWidget(),
    comp = baja.$('baja:Component', {
      'meritorious': true,
      'whimsical': true,
      'resplendent': true,
      'splendid': true,
      'superb': true
    });
  var widgetDiv = $('#widget'),
    description = $('#description');
  widget.initialize(widgetDiv).then(function () {
    widgetDiv.on(events.MODIFY_EVENT, function () {
      widget.read().then(function (value) {
        description.text(value);
      })["catch"](baja.error);
    });
    return widget.load(comp);
  })["catch"](baja.error);
});
