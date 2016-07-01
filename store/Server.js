// Magasin Server
//  In this code, proxy was set and data is being retrieved from JSON file. So create a JSON file in data folder.
//  Ci dessous

Ext.define('WinApp.store.Server', {

  extend : 'Ext.data.Store',
  requires:['WinApp.model.Server'],
  model: 'WinApp.model.Server',
  storeId : 'server',
  //  le proxy est la manière dont les données circulent : JSON, REST, ...
  proxy: {
     type: 'ajax',
     // ici les données fournies pour le modèle serveur
     // proviennent du fichier json situé dans le dossier store/data/
     url: 'data/server.json',
     reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
