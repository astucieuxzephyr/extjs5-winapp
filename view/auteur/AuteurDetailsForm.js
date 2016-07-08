Ext.create('Ext.form.Panel', {
    // renderTo: document.body,
    url: 'add_auteur',
    title: 'Auteur Form',
    height: 150,
    width: 300,
    bodyPadding: 10,
    // any of its items that do not have an xtype specified are Text Fields.
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'Prénom',
            name: 'prenom'
        },
        {
            fieldLabel: 'Nom',
            name: 'nom'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date de naissance',
            name: 'naissanceDate',
            msgTarget: 'under', // location of the error message
            // 0 : valeur fournie
            // 1 : format de date correct
            invalidText: '"{0}" : valeur incorrecte. Le format doit être "{1}".'
        }
    ],
    buttons: [
        {
            text: 'Enregistrer',
            handler: function() {
                var form = this.up('form'); // get the form panel
                if (form.isValid()) { // make sure the form contains valid data before submitting
                    form.submit({
                        success: function(form, action) {
                          // action.result refers to the parsed JSON method
                          // The expected JSON looks like this :
                          // { "success": true, "msg": "User added successfully" }
                           Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                } else { // display error alert if the data is invalid
                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                }
            }
        }
    ]
});
