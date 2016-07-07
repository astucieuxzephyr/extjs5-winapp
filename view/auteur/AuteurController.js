Ext.define('WinApp.view.auteur.AuteurController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auteur',

    // TODO
/*
    // qu'ets-ce que c'est ???
    refs:[
      ref:'list',
      selector:'grid'
    ],
*/
    models: [
      'Auteur'
    ],
    stores: [
      'auteur'
    ],
    views: [
      'Auteur'
    ],

    init: function() {
      console.log('Initialisation AuteurController');
      this.control({
        'button': { click: this.refreshGrid }
      });
    },

    refreshGrid: function() {
      this.getList().store.load();
    }
});
