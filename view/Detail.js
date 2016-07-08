
Ext.define('WinApp.view.Detail',{
  // Rappel : A Form Panel is nothing more than a basic Panel with form handling abilities added.
  extend: 'Ext.form.Panel',
  // layout: 'form', // utile ??
  title: 'Détail de l\'item',

  requires: [
   'WinApp.view.DetailController' //,
   // 'WinApp.view.DetailViewModel'
  ],

  controller: 'detailcontroller',
  viewModel : {
   type: 'detailform' // reference DetailViewModel
  },

  items: [
   {
     xtype: 'textfield',
     // voir ???
     bind: '(rec.nom)',
     fieldLabel: 'Nom'
   },
   {
     xtype: 'button',
     text: 'Enregistrer',
     // ???
     itemId : 'SaveRecord',
     listeners: {
       // la méthode du controller de détail qui sera appelée
       'click': 'onSave'
     }
   }
  ],
  initComponent: function() {
   console.log('Init Detail View (frame)');
   // this.callParent(arguments);
  }

});
