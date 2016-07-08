/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * ViewControllers are designed to:
 * Make the connection to views using “listeners” and “reference” configs obvious.
 *
 * Leverage the life cycle of views to automatically manage their associated ViewController.
 * From instantiation to destruction, Ext.app.ViewController is tied to the component that referenced it.
 * A second instance of the same view class would get its own ViewController instance.
 * When these views are destroyed, their associated ViewController instance will be destroyed as well.
 * Provide encapsulation to make nesting views intuitive.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('WinApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    // requires: [
      //  'Ext.window.MessageBox'
    // ],

    alias: 'controller.main',

/* onClickDelogButton is the function that is called by the button handler
  in our (generated) "{appMain}/app/view/main/Main.js" view.
    */
    onClickDelogButton: function () {
        // Remove the localStorage key/value that maintains the user's logged in state.
        localStorage.removeItem('WinAppLoggedIn');
        // Remove Main View (Destroy the current view, which is WinApp.view.main.Main.)
        this.getView().destroy();
        // Recreate the Login View (Window)
        Ext.widget('login');
    },


    onClickButton: function () {
        // Fenetre de confirmation (décommenter le requires)
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onClickButton3: function () {
        // Fenetre de confirmation (décommenter le requires)
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            Ext.Msg.alert('(MainController.js)', 'You choosed YES !');
        }
    }
});
