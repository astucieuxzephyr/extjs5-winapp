/**
 * Ext.App.Application est la classe qui représente/contient toute l'application.
 *
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
    name: 'WinApp', // Ceci va créer une variable globale appelée WinApp

    requires: [
      'WinApp.Const'
    ],
    errText:'WinApp.Application : Erreur inconnue du server',
    stores: [
        // TODO: add global / shared stores here
        // VOIR : http://extjs.eu/ext-examples/#loading-many-stores
        // Ici ne mettre que les magasins GLOBAUX, pour les autres, il est préférable de les charger au moment voulu.
        // Les magasns doivent être mis ici pour que ExtJS crée des instances
        // ce sont aussi les identifiants que l'on utilisera plus tard pour referencer  les magasins

        // Ceci génère une erreur : No such Entity "WinApp.view.auteur.Auteur"
        // 'Auteur', 'Bidon'
        // 'Livre'
        'statics.Countries' // Pays
    ],

    launch: function () {
        // Launch the application
        // ================== STATIC DATA ============
        var me = this;
        // On va chercher les données statiques dans le fichier resources/data.json
        Ext.Ajax.request({
          url:'resources/data.json'
          ,scope:me
          ,success:me.onSuccess
          ,failure:me.onFailure
        });

        // Cree le form avec les combos pour montrer quels magasins sont peuplés
        // ICI PAS BESOIN
        // See : http://extjs.eu/ext-examples/#loading-many-stores


        //
        //
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

        console.log('WinApp.Application : Sortie du launch');
        // =============================================
        // La partie ViewPort sera ensuite appelée dans le app-main càd dans main.Main.js

        // NORMALEMENT ON NE PASSE PAS ICI car on a été redirigé !
        // Message éventuel
        // Ext.Msg.alert(this.name, 'Ready to go!');
    }
    // The XMLHttpRequest object containing the response data
    // Success handler that processes the response and calls store loading function
    ,onSuccess:function(response) {

      var me = this
      ,o = {}
      ,C = WinApp.Const // CONSTANTES
      ;
      try{
        o = Ext.decode(response.responseText)
      } catch(e) {
        alert(e.message);
        return;
      }
      if(true !== o.success) {
        alert(me.errText);
        return;
      }

      // Save the received data
      C.stores = o.stores;
      // Populate the stores
      me.loadStaticStores();

    },
    onFailure:function(response){
      alert(this.errText);
    },
    loadStaticStores:function(){
      var C = WinApp.Const;
      Ext.each(C.staticStores, function(staticStore){
        var store = Ext.getStore(staticStore.storeId)
           ,data = C.stores[staticStore.root]
        ;
        if(store && data){
            store.loadData(data);
        }
      });
    }
});
