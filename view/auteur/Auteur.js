
Ext.define('WinApp.view.auteur.Auteur',{
    extend: 'Ext.panel.Panel',

    requires: [
        'WinApp.view.auteur.AuteurController',
        'WinApp.view.auteur.AuteurModel'
    ],

    controller: 'auteur',
    viewModel: {
        type: 'auteur' // référence l'alias "viewmodel.auteur"
    },

    bind: {
        title: 'Hello {nom}'
    },

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Prénom',
        bind: '{prenom}'
      },{
        fieldLabel: 'Nom',
        bind: '{nom}'
      },{
        xtype: 'button',
        text: 'Enregistrer',

        // Fonction qui va gérer le traitement lors du clic sur le bouton
        // handler: function(){},

        // Mettre en hidden ce qui est different de nom
        bind: {
            hidden: '{!nom}'
        }
      }],

    initComponent: function() {
      console.log('Init View auteur/Auteur');
      // this.callParent(arguments);
    }

});
