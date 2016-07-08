Ext.define('WinApp.model.Livre', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'titre', type: 'string' },
        { name: 'soustitre', type: 'string' }
      //  ,
      //  { name: 'auteur', type: 'auteur' }
    ],

    initComponent: function() {
      console.log('Init Livre Model');
      // this.callParent(arguments);
    }

    // belongsTo / hasMany / associations


    // Chargement et sauvegarde des données
    proxy: {     // Ext.util.ObjectTemplate
        type: 'ajax',
        api: {
        // on définit le chemin souhaité
        read: 'resources/livre/get',
        update: 'resources/livre/update'
        },
        // http methods to use
        actionMethods:{
          read: 'POST',
          update: 'POST'
        },
        reader: {
            type: 'json',
            // racine de l'élément qui contient les données dans le JSON !!
            root: 'data'
        },
        writer: {
            type: 'json',
            allowSingle: false,
            root: 'data',
            encode: true
        }
    }


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
