
ExtJs 5.1.2

1) Lancement du serveur
sencha web start

Puis, dans le navigateur, allez à l'adresse : localhost:1841

2) Lancement du watch (rebuild automatique en cours de développement)
sencha app watch

=====================================
Pour générer une entité (avec Model, Controller et ViewModel)
FAIRE :
sencha generate view livre.Livre
CE QUI VA GENERER TROIS FICHIERS (Model, Controller et ViewModel) DANS un sous dossier livre :
- livre/Livre.js           : Vue ()
- livre/livreController.js : Contrôleur
- livre/LivreModel.js      : Modèle de données

OU
sencha generate model Server name:string



voir : https://blogs.walkingtree.in/2013/04/09/create-build-sencha-extjs-project-using-sencha-cmd-3/
Rappel : ViewModel = une classe qui gère les données spécifiques à une vue.


=====================================

RAPPEL :
En Js, NE PAS METTRE DE VIRGULE après la dernnière occurence d'une listeners
Sinon un warning apparaît dans la watch

======================================
Vues : Grilles, Arbres, Panneaux




Ext.Component
    - View { viewModel : nomDuViewModel }  (ViewModel = une classe qui gère les données spécifiques à une vue.)
          - composant X { bind: }
          - composant Y { bind: }
          - evenement A
          - evenement B

// Chaque composant peut vouloir interagir avec les données
// Donc on inclut des clés bind aux composants qui présentent ou éditent ces données
