/**
 * This class is the view model for the Main view of the Login
 * Cette classe fournit les données qui seront utilisées dans la vue Main
 * Ici ce sont des données générales
 */
Ext.define('WinApp.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',

    fields:[
      'name',
      'loginParDefaut',
      'motDePasseParDefaut'
    ],
    // Données nécessaires au formulaire de Login
    data: {
        name: 'WinApp',
        loginParDefaut: 'astucieux',
        motDePasseParDefaut: 'xxxxxxx'
    }

});
