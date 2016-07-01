Ext.define('WinApp.model.Server', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string' }

    ]
    //,

/*
    // Le schéma correspond au schéma Entité - Relation
    schema: {
      // By specifying this namespace all models gain a shortened name call an "entityName".
      // This short name is primarily useful when defining associations between models which we will see later.
      namespace: 'WinApp.model',  // generate auto entityName

      // "Proxy" config
      // Par exemple si on va à l'URL User.json
      // Ce sera une chaine JSON qui sera retournée
      proxy: {     // Ext.util.ObjectTemplate
          type: 'ajax',
          url: '{entityName}.json',
          reader: {
              type: 'json',
              rootProperty: '{entityName:lowercase}'
          }
      }
    }
*/

});
