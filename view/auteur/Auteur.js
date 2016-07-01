
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
        bind: {
            hidden: '{!nom}'
        }
    }]

});
