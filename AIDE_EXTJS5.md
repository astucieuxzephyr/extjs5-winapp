# Aide sur Ext JS 5

### Ordre de développement d'une application :
- 1 - Décrire Le(s) layouts et les components 
- 2 - Définir la structure des Models
- 3 - Définir les Magasins pour les modèles (storage)
- 4 - Définir les liens (bindings) pour les structures (Models) 
- 5 - Définir les comportements pour les Components et les Modèles.

## Développement : 
* Lancement du watch (rebuild automatique en cours de développement) : `sencha app watch`
* Pour générer une entité (avec Model, Controller et ViewModel), faire : `sencha generate view livre.Livre`

CE QUI VA GENERER TROIS FICHIERS (Model, Controller et ViewModel) DANS un sous dossier livre :
- livre/Livre.js           : Vue ()
- livre/livreController.js : Contrôleur
- livre/LivreModel.js      : Modèle de données

OU BIEN `sencha generate model Server name:string`

### Faire une application Windows 8 :

You can build native Windows 8 applications using Ext JS, just as you would any other web application.
To install the ext-win8 package, simply add ”ext-win8“ to your application’s app.json file under ”requires“.

    "requires": [
      "ext-win8",        <=== pour application win8 native
	  "sencha-charts" <=== pour les graphiques si on les veut
    ],

Then use Sencha Cmd to refresh your application:

$ sencha app refresh --packages

// OU
$ sencha app build development

// OU PLUS SIMPLEMENT
$ sencha app refresh


Sencha Cmd will then download the ext-win8 package from our CDN and install it into your machine’s local repository (e.g. /Users/arthurakay/bin/Sencha/Cmd/repo/pkgs/).
As part of the refresh/build process, Sencha Cmd will copy ext-win8 to your application (or workspace) and rebuild your application’s dependency chain, ultimately including the necessary Windows 8 hooks.

### Installer des packages optionnels :

Pour VOIR CE QUI EXISTE :

    $ sencha package list

Pour INSTALLER :

    $ sencha package get ext-win8

### Générer le modèle d'un objet (par exemple Voiture)

    $ sencha generate model Voiture name:string

Avec la commande ci-dessus on génère un modèle ayant pour nom Server, avec un champ de type string

Fichier Model/VoitureModel.js :

     Ext.define('extjsExample.model.Voiture', {
       extend: 'Ext.data.Model',
       fields: [
         { name: 'name', type: 'string' } 
       ]
     });

### Générer un contrôleur

    $ sencha generate controller Toto
    
### Générer une vue
Pour générer une vue "Registration" (avec un formulaire d'enregistrement)

    $ sencha generate view Registration

-----------------------------------
## Références :
voir : https://blogs.walkingtree.in/2013/04/09/create-build-sencha-extjs-project-using-sencha-cmd-3/


-----------------------------------
## Rappels :

### Syntaxe :
* En Js, NE PAS METTRE DE VIRGULE après la dernnière occurence d'une listeners
Sinon un warning apparaît dans la watch

### Vues : Grilles, Arbres, Panneaux
* TO DO !!
-----------------------
### Structure de l'application :

    Ext.Component
        - View { viewModel : nomDuViewModel }  (ViewModel = une classe qui gère les données spécifiques à une vue.)
              - composant X { bind: }
              - composant Y { bind: }
              - evenement A
              - evenement B

Etant donné que chaque composant peut vouloir interagir avec les données
On inclut des clés bind aux composants qui présentent ou éditent ces données
(Voir exemple ci-dessus)

-----------------------
## Formulaires
Ceux-ci sont des Panel particuliers (Ext.form.Panel)
-----------------------
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
