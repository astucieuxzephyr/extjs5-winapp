
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

## Quelques rappels sur ExtJs 5 :
* Lire le fichier ./AIDE_EXTJS5.md
