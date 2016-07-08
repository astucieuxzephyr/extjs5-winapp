/*
 * Ce fichier contient toutes les constantes de l'application
 */
Ext.define('WinApp.Const',{
  statics: {
    staticStores:[
      // Placer ici les différents magasins statiques
      // qui sont définis dans store/statics/
      {
        storeId: 'statics.Countries'
        ,root: 'countries'
      }
    ]
    // the received data for stores is placed here
    ,stores:{}
  }
});
