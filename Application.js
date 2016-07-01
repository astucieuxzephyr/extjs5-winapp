/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 *
 * Every Ext JS application starts with an instance of the Application Class.
 * This class is intended to be launch-able by app.js as well as instantiable for testing.
 * The Application Class contains global settings for your application, such as the app's namespace, shared stores, etc.
 * "Application.js" is the heart of your application.
 * You can find "Application.js" at the same level as your "view", "store", and "model" folders.
 * It provides a handy method called launch, which fires when your application has loaded all of its required classes.
 */
Ext.define('WinApp.Application', {
    extend: 'Ext.app.Application',

    name: 'WinApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // Launch the application
        // ================ LOGGING =====================
        // SEE http://docs.sencha.com/extjs/5.1.2/guides/getting_started/login_app.html
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        // Le résultat sera null ou true selon que la clé est stockée ou pas
        loggedIn = localStorage.getItem("WinAppLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'app-main' : 'login');
        // =============================================
        // La partie ViewPort sera ensuite appelée dans le app-main càd dans main.Main.js

        // NORMALEMENT ON NE PASSE PAS ICI car on a été redirigé !
        // Message éventuel
        // Ext.Msg.alert(this.name, 'Ready to go!');
    }
});
