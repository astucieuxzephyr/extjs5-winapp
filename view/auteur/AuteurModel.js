Ext.define('WinApp.view.auteur.AuteurModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.auteur',
    data: {
        name: 'WinApp',
        nom: '',
        prenom:''
    }

    formulas: {
        // We'll explain formulas in more detail soon.
        name: function (get) {
            var fn = get('prenom'), ln = get('nom');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        }
    }
});
