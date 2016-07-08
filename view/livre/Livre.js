
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


    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Titre',
        bind: '{titre}'
      },{
        fieldLabel: 'Sous-titre',
        bind: '{soustitre}'
      },{
        xtype: 'button',
        text: 'Enregistrer'
        // ,
        // handler: function(){},
        // bind: {
        //    hidden: '{!titre}'
        // }
      }
    ],

    html: 'LIVRE'
});
