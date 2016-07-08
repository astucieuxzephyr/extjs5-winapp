Ext.define('WinApp.model.Auteur', {
    extend: 'Ext.data.Model'

    ,idProperty:'auteurid' // must be present


    ,fields: [
        // idProperty field must be present
        { name: 'auteurid', type: 'int' },
        { name: 'nom', type: 'string' },
        { name: 'prenom', type: 'string' }

    ],

    initComponent: function() {
      console.log('Init Auteur Model');
      // this.callParent(arguments);
    },

    // belongsTo / hasMany / associations


    // Chargement et sauvegarde des données
    proxy: {     // Ext.util.ObjectTemplate
        type: 'ajax',
        // URLs for CRUD operations
        api: {
          // on définit le chemin souhaité
          read: 'resources/auteur/get',
          update: 'resources/auteur/update'
          // read: 'data/get_user',
          // update: 'data/update_user'
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
