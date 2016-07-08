
// Magasin pour Livre
//  In this code, proxy was set and data is being retrieved from JSON file. So create a JSON file in data folder.

Ext.define('WinApp.store.Livre', {

  extend : 'Ext.data.Store',

  requires:['WinApp.model.Livre'],
  model: 'WinApp.model.Livre',

  storeId : 'livre',
  //  le proxy est la manière dont les données circulent : JSON, REST, ...
  proxy: {
     type: 'ajax',
     // ici les données fournies par ce magasin proviennent du fichier json situé dans le dossier store/data/
     url: 'data/livres.json',
     reader: {
      type: 'json',
      rootProperty: 'data'
    }
  },
  initComponent: function() {
    console.log('Init Livre Store');
    // this.callParent(arguments);
  }
});
