
## Application avec ExtJS (5.1.2)

Pour l'installation, il suffit de créer une application vide,
puis de placer l'ensemble des fichiers (Situés dans ce github) dans le dossier app

Si on utilise un dossier global nommé sencha, on aura par exemple :

    sencha/ext5       <=== le vendor
    sencha/my-app     <=== l'application générée via la commande `sencha -sdk ext5/ generate app MyApp my-app`
    sencha/my-app/app/ <=== Dans ce dossier on aura les fichiers situés sur ce dépôt.

## Installation de ExtJS
* Installer la Sencha CLI
* Placer le dossier du SDK EXT JS 5 dans etc/www/sencha

## Installation de cette application
* Le dossier avec le SDK EXT JS 5 est nécessaire, évidemment... (voir ci-dessus)
* On commence par générer une application VIDE my-app : `sencha -sdk ext5/ generate app MyApp my-app`
* Se placer dans le dossier de votre application : `cd my-app`
* Récupérer les sources à partir de GitHub et les mettre dans le dossier app : `git clone https://github.com/astucieuxzephyr/extjs5-winapp.git app`

## Lancement du serveur
* Se placer dans le dossier de votre application : `cd my-app`
* Faire : `sencha web start`
* Puis, dans le navigateur, allez à l'adresse : `localhost:1841`


## Quelques rappels sur ExtJs :

### Ordre de développement d'une application :
1 - Décrire Le(s) layouts et les components 
2 - Définir la structure des Models
3 - Définir les Magasins pour les modèles (storage)
4 - Définir les liens (bindings) pour les structures (Models) 
5 - Définir les comportements pour les Components et les Modèles.

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
