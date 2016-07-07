
// Définition de la fenetre de Login
// VOIR http://docs.sencha.com/extjs/5.1.2/guides/getting_started/login_app.html
Ext.define('WinApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        // on a besoin du controller de login
        'WinApp.view.login.LoginController',
        // on a besoin de form.Panel
        // parce que notre vue contient un Formulaire (Form Panel)
        'Ext.form.Panel'
    ],
    // Les données utilisées par cette vue Login sont fournies par le viewModel login.
    // (cf. le fichier LoginModel.js)
    viewModel: {
        type: 'login'
    },
    // définit le controller qui est attaché aux instances de la fenetre de Login
    // et qui prend la main. Ici login est l'alias de notre controller de Login.
    controller: 'login',
    // "10px" of padding around the exterior of the window's body content.
    bodyPadding: 10,
    // header
    title: 'Ptka - Connexion',
    // détermine si la fenetre peut etre fermée ou non
    // Ici c'est une fentre de login ; elle est obligatoire et ne peut etre close.
    closable: false,
    // Windows are hidden by default.
    // Setting autoShow to true will show the Window once it's created
    autoShow: true,

    // les items contiennent a Component or a Component configuration object
    items: {
      // "form" est le xtype of the Ext.form.Panel class : ici un Form Panel
      xtype: 'form',
      reference: 'form',
      items: [
          {
              xtype: 'textfield',
              name: 'username',
              fieldLabel: 'Username',
              bind: '{loginParDefaut}',
              allowBlank: false
          }, {
              xtype: 'textfield',
              name: 'password',
              inputType: 'password',
              fieldLabel: 'Password',
              bind: '{motDePasseParDefaut}',
              allowBlank: false
          }, {
              xtype: 'displayfield',
              hideEmptyLabel: false,
              value: 'Veuillez entrer un mot de passe non vide.'
          }
          ,
          // SELECTEUR avec les serveurs possibles
          {
              xtype: 'combo',
              name: 'server',
              allowBlank : true,
              fieldLabel: 'Serveur',

              // TODO
              // store: server, // CECI NE MARCHE PAS
              // CI DESSOUS : bonne méthode ?
              store: Ext.create('WinApp.store.Server'),
              // METHODE qui génère une erreur : Cannot modify ext-empty-store
              // store: Ext.data.StoreManager.lookup('server'),

              // queryMode: 'local'
              displayField: 'name',
              editable: false,
              // nom du champ contenant la valeur
              valueField: 'name'
          }

/*          , {
              text: 'Cancel',
                  handler: function() {
                  this.up('form').getForm().reset();
                  }
          }*/
      ],
      buttons: [{
          text: 'Login',
          // When a Component has formBind set to "true",
          // it will be disabled/enabled depending on the validity state of the Form.
          // This means that the Button will not be clickable until the two input fields contain values.
          formBind: true,
          // Ce qui se passe en cas de Clic : envoi vers la méthode onLoginClick
          listeners: {
              click: 'onLoginClick' // See LoginController.js
          }
      }]

    }
});

/*// CODE ORIGINAL
Ext.define('WinApp.view.login.Login',{
    extend: 'Ext.panel.Panel',

    requires: [
        'WinApp.view.LoginController',
        'WinApp.view.LoginModel'
    ],

    controller: 'login',


    html: 'Hello, World!!'
});*/
