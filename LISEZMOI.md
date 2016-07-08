
# ExtJs 5.1.2

#1) Lancement du serveur
sencha web start
Puis, dans le navigateur, allez à l'adresse : localhost:1841

#2) Lancement du watch (rebuild automatique en cours de développement)
sencha app watch

=====================================
# Générer une entité
Pour générer une entité (avec Model, Controller et ViewModel)
FAIRE :
sencha generate view livre.Livre
CE QUI VA GENERER TROIS FICHIERS (Model, Controller et ViewModel) DANS un sous dossier livre :
- livre/Livre.js           : Vue ()
- livre/livreController.js : Contrôleur
- livre/LivreModel.js      : Vue-Modèle (Rappel : ViewModel = une classe qui gère les données spécifiques à une vue.)
voir : https://blogs.walkingtree.in/2013/04/09/create-build-sencha-extjs-project-using-sencha-cmd-3/

OU
sencha generate model Server name:string

=====================================
## RAPPEL :
En Js, NE PAS METTRE DE VIRGULE après la dernnière occurence d'une listeners
Sinon un warning apparaît dans la console qui gère le watch

======================================
Vues : Grilles, Arbres, Panneaux

    - Model
        -
        - Proxy pour le chargement et la sauvegarde des données

Ext.Component
    - View { viewModel : nomDuViewModel }  (ViewModel = une classe qui gère les données spécifiques à une vue.)
          - composant X { bind: }
          - composant Y { bind: }
          - evenement A
          - evenement B

// Chaque composant peut vouloir interagir avec les données
// Donc on inclut des clés bind aux composants qui présentent ou éditent ces données
====================================
## Formulaires
Ceux-ci sont des Panel particuliers (Ext.form.Panel)
====================================
## Fonctions utiles :
- Créer ses propres classes : Ext.define(name, data, callback)
- Créer une instance de classe : Ext.create(Class, Options);

Exemple :
    var MaVoiture = Ext.create('VoitureElectrique',{
      name: 'Ma Voiture électrique'
    });

## Conseils
- Eviter d'utiliser Ext.onReady() comme en jQuery
- Attention à ne pas utiliser Ext.create au lieu de Ext.define !!

## Comment créer ses propres Classes ?
On utilise la fonction Ext.define(name, data, callback)

### Exemple de classe :

    Ext.define('Voiture',{
      // nom : peut etre null
      name: null,
      // données de la classe
      constructor: function(name){
        if (name) {
          this.name = name;
        }
      },
      // callback
      start: function(){
        alert('Voiture démarrée');
      }
      });

### Exemple de classe dérivée
    Ext.define('VoitureElectrique',{
      extend: 'Voiture',
      // callback
      start: function(){
        alert('Voiture électrique démarrée');
      }
    });

## Remplacer une implémentation existante
    Ext.define('My.ux.Field.Text',{
      override: 'Ext.form.Field.Text',
      setValue: function(valeur){
        this.callParent(['In override']);
        return this;
      }
    });

## Créer une Classe singleton
    Ext.define('Logger',{
      singleton: true,
      log: function(msg){
        console.log(msg);
      }
    });
