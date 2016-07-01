
Ext.define('WinApp.view.concept.Concept',{
    extend: 'Ext.panel.Panel',

    requires: [
        'WinApp.view.concept.ConceptController',
        'WinApp.view.concept.ConceptModel'
    ],

    controller: 'concept',
    viewModel: {
        type: 'concept'
    },

    html: 'Hello, World!!'
});
