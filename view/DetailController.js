Ext.define('WinApp.view.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detailcontroller',

    onSave: function () {
        if (this.getView().isValid()){
          // do stuff...
          console.log('in Detail Controller : Detail View Validation is OK !!');
        }
    }

});
