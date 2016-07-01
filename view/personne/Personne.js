
Ext.define('WinApp.view.personne.Personne',{
    extend: 'Ext.panel.Panel',

    requires: [
        'WinApp.view.personne.PersonneController',
        'WinApp.view.personne.PersonneModel'
    ],

    controller: 'personne',
    viewModel: {
        type: 'personne'
    },

    html: 'Hello, World!!'
});
