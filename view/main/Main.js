/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * Main.JS est la vue principale !!
 * Une View n'est rien de plus qu'un Component, qui est une sous-classe de Ext.Component.
 * A view contains all of your application's visual aspects.
 * La vue ne doit pas contenir la logique de l'application
 * All of your view's logical bits should be included in the ViewController
 * (ici donc dans MainController.js)
 * le ViewController : ici MainController.js
 * le ViewModel : ici MainModel.js (Le fournisseur de données de ce composant)
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
  var html_text = '<h2>Présentation.</h2>';
  var html_text_todo = '<p>Choses à faire</p>';

  // Cet affichage apparaitra seulement UNE FOIS
  Ext.Msg.alert('(Main.js)', 'Welcome to you !');
//  var leftPanel = Ext.create('Ext.panel.Panel', );

/*
  var panneauDeGaucheHaut = Ext.create('Ext.panel.Panel', {
    title: 'panneauDeGaucheHaut',
    html: 'Panel gauche haut'
  });

  var panneauDeGaucheBas = Ext.create('Ext.panel.Panel', {
    title: 'panneauDeGaucheHaut',
    html: 'Panel gauche bas',
    // topbar
    tbar: [
        {
          // bouton
           text: 'Bouton',
           // handler: 'onClickButton' // cf. MainController.js
        }, '->', {
            xtype: 'sparklineline',
            fillColor: '#ddf',
            width: 100,
            height: 20,
            values: [2, 3, 0, 4, -1]
        }
    ]
  });
*/

/*
// PANNEAU FLOTTANT QUI FONCTIONNE
var panelFlotting = Ext.create('Ext.panel.Panel', {
    width: 200,
    height: 100,
    floating: true, // make this panel an absolutely-positioned floating component
    title: 'Flottant',
    html: 'Test Panel flotting'
});
panelFlotting.show();
*/

// Définition d'une nouvelle widget
// On pourra ensuite appeler cette widget avec xtype: 'grilleauteurs'
Ext.define('GrilleAuteurs', {
   extend: 'Ext.grid.Panel',
   alias: 'widget.grilleauteurs',
   // TODO
  // store: Ext.data.StoreManager.lookup('sampleStore'),
   store: Ext.data.StoreManager.lookup('auteur'), //
   // ceci crée une erreur
   store: 'auteur',
   selType: 'checkboxmodel',
   selModel: {
       checkOnly: true,
       injectCheckbox: 1
   },
   columns: [{
      text: 'Nom de famille',
      width: 200,
      sortable: true,
      hideable: false,
      dataIndex: 'nom'
   },{
       text: 'Prénom',
       width: 150,
       sortable: true,
       hideable: true,
       dataIndex: 'prenom'
   }],
   height: 200,
   width: 450
});

 Ext.define('WinApp.view.main.Main', {
     extend: 'Ext.container.Container',
     requires: [
         'WinApp.view.main.MainController',
         'WinApp.view.main.MainModel'
         // Ajout des autres vues ici ??
         // 'WinApp.view.livre.'
     ],
     xtype: 'app-main',
     controller: 'main',
     // Cette ligne est importante :
     // Le plugin ViewPort n'est en effet pas appelé à partir de app.js
     // On l'appelle seulement ici, parce qu'il fallait d'abord passer par le login
     // Rappel des étapes de chargement :
     // App.js ==> Application.js ==> (si non Loggué) charge Login.js
     //                           ==> (si Loggué) LoginController.js ==> 'app-main' (Main.js c-à-d ce fichier)
     //                           ==> (si appui sur bouton de loggout) : MainController.js
     plugins: 'viewport',
     viewModel: {
         type: 'main'
     },
     layout: {
         type: 'border'
     },

     items: [
          // PANNEAU de GAUCHE (west)
          {
              xtype: 'panel', // utiliser seulement si le panel est un item
              // the title of the west region's panel is bound to the ViewModel
              // This means that the title will be populated by data's "name" value, which is managed in the ViewModel
              bind: {
                title: '{name}'
              },
              region: 'west',
              html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
              width: 250,
              height: 500,
              split: true,
              // topbar
              tbar: [
                  {
                    // bouton de DELOG
                     text: 'Déconnexion',
                     handler: 'onClickDelogButton' // cf. MainController.js
                  },
                  {
                    // bouton
                     text: 'Bouton',
                     handler: 'onClickButton' // cf. MainController.js
                  },
                  {
                    // bouton
                     text: 'Bouton3',
                     handler: 'onClickButton3' // cf. MainController.js
                  }
        /*          , '->', {
                      xtype: 'sparklineline',
                      fillColor: '#ddf',
                      width: 100,
                      height: 20,
                      values: [2, 3, 0, 4, -1]
                  }*/
              ]
//              items: [
              //  panneauDeGaucheHaut,
              //  panneauDeGaucheBas
//              ]

          },
          // TABPANEL
          {
            region: 'center',
            xtype: 'tabpanel',
            items:[{
                title: 'Tab 1',
                html: html_text
            },
            {
                title: 'Livres',
                html: '<h2>Content.</h2>',
                listeners: {
                    render: function() {
                        console.log('Tab Livres was rendered.');
                        // Ext.MessageBox.alert('Rendered Livres', 'Tab Livres was rendered.');
                    }
                }
            },
            {
                title: 'Auteurs',
                // html: '<h2>Auteurs.</h2>'
                // xtype: 'grid' : means "create standard Ext.grid.Panel and add it here"
                xtype: 'grilleauteurs',
                listeners: {
                    render: function() {
                        console.log('Tab Auteurs was rendered.');
                        //Ext.MessageBox.alert('Rendered Auteurs', 'Tab Auteurs was rendered.');
                    }
                }
            },
            {
                title: 'Concepts',
                html: '<h2>Concepts.</h2>'
            },
            {
                title: 'Aide',
                html: '<h2>Aide.</h2>'
            },
            {
                title: 'Todo',
                html: html_text_todo
            }]
          }
    ]
 });

 /*Ext.create('Ext.Component', {
     html: 'Hello world!',
     width: 800,
     height: 600,
     padding: 20,
     style: {
         color: '#FFFFFF',
         backgroundColor:'#000000'
     },
     renderTo: Ext.getBody()
 });
 Ext.create('Ext.form.Panel', {
     renderTo: document.body,
     title: 'User Form',
     height: 150,
     width: 300,
     bodyPadding: 10,
     defaultType: 'textfield',
     items: [
         {
             fieldLabel: 'First Name',
             name: 'firstName'
         },
         {
             fieldLabel: 'Last Name',
             name: 'lastName'
         },
         {
             xtype: 'datefield',
             fieldLabel: 'Date of Birth',
             name: 'birthDate'
         }
     ]
 });
*/
