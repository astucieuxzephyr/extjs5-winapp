Ext.define('WinApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    // Methode appelée en cas de clic sur le bouton défini dans Login.js
    onLoginClick: function() {

        // TODO
        // Here we need to verify the user's credentials via a server-side lookup.
        // This would generally come in the form of an AJAX or REST request.
        // BUT HERE we just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("WinAppLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        // Note: 'app-main' refers to the xtype that is defined on our Sencha Cmd generated "TutorialApp.view.main.Main" class located in "{appRoot}/app/view/main.Main.js".
        Ext.widget('app-main');

    }

});
