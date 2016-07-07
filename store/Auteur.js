
// Magasin pour Auteur
//  In this code, proxy was set and data is being retrieved from JSON file. So create a JSON file in data folder.

Ext.define('WinApp.store.Auteur', {

  extend : 'Ext.data.Store',
  requires:['WinApp.view.auteur.Auteur'],
  model: 'WinApp.view.auteur.Auteur',
  storeId : 'auteur',

  initComponent: function(){
    console.log('Init Auteur Store');
    // this.callParent(arguments);
  },

  //  le proxy est la manière dont les données circulent : JSON, REST, ...
  proxy: {
     type: 'ajax',
     // ici les données fournies par ce magasin proviennent du fichier json situé dans le dossier store/data/
     url: 'data/auteurs.json',
     reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
