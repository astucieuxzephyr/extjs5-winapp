
// Définition du magasin statique contenant la liste des Pays
Ext.define('WinApp.store.statics.Countries',{
  extend:'Ext.data.Store'
  ,idProperty:'code'
  ,fields:[{
    name: 'code',
    type: 'string'
  },{
    name: 'name',
    type: 'string'
  }]
})
