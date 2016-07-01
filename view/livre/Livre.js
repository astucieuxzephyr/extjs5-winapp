
Ext.define('WinApp.view.livre.Livre',{
    extend: 'Ext.panel.Panel',

    requires: [
        'WinApp.view.livre.LivreController',
        'WinApp.view.livre.LivreModel'
    ],

    controller: 'livre',

    viewModel: {
        type: 'livre'
    },

    fields: [
        { name: 'name', type: 'string' },
        { name: 'titre', type: 'string' },
        { name: 'soustitre', type: 'string' },
        { name: 'auteur', type: 'string' }
    ],

    html: 'LIVRE'
});
