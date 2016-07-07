This folder contains store instances (identified by storeId) and store types
(with "store.foo" aliases).

La classe store encapsule un cache côté client d'objets Models.
Les magasins chargent les données via un Proxy,
et fournissent des fonctions de :
- sorting / trier
- filtering / filtrer
- querying / requeter les instances Models qui sont contenus dedans.
