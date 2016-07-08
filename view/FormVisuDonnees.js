Ext.define('WinApp.view.FormVisuDonnees',{
  extend:'Ext.form.Panel'
  ,alias:'widget.visudonneesform'
  ,title:'Donnees Statiques'
  ,bodyPadding:10
  ,border:true
  // instructions
  ,html:''
  ,defaults:{
    xtype:'combo'
    ,queryMode:'local'
    ,anchor:'100%'
    ,forceSelection:true
    ,valueField:'id'
    ,displayField:'text'
    ,editable:false
  }

  /*
   * Ici on stocke les storeIds comme listés dans le tableau Application::store[]
   * Ext les a déjà créés et notre logique de chargement les remplira bientôt
   */
  ,items:[{
      fieldLabel:'Pays'
      ,store:'statics.Countries'
      // les deux champs ci dessous sont facultatifs
      ,valueField:'code'
      ,displayField:'name'
  }
  ]

});
