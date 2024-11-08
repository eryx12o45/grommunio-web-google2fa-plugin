Ext.namespace("Zarafa.plugins.google2fa.settings");

/**
 * @class Zarafa.plugins.google2fa.settings.SettingsGoogle2FAWidget
 * @extends Zarafa.settings.ui.SettingsWidget
 * Widget view in settings for two-factor authentication
 */
Zarafa.plugins.google2fa.settings.GeneralSettingsWidget = Ext.extend(Zarafa.settings.ui.SettingsWidget, {
    /**
     * @constructor
     * @param {Object} config Configuration object
     */
    constructor: function (config) {
        config = config || {};
        Ext.applyIf(config, {
            title: dgettext("plugin_google2fa", "Configuration two-factor authentication"),
            layout: "form",
            items: [{
                xtype: "displayfield",
                hideLabel: true,
                value: dgettext("plugin_google2fa", "The two-factor authentication provides an additional protection for the WebApp.") + "<br />" +
                    dgettext("plugin_google2fa", "After activation you need next to your password an one-time code to log in.") + "<br />" + "<br />" +
                    dgettext("plugin_google2fa", "To generate an one-time code, you have to configure a second device, usually a smartphone.") + "<br />&nbsp;"
            }, {
                xtype: "button",
                text: dgettext("plugin_google2fa", "Configuration"),
                handler: this.openConfigurationDialog,
                scope: this,
                disabled: !container.getSettingsModel().get("zarafa/v1/plugins/google2fa/enable_but_conf"),
                width: 250
            }, {
                xtype: "displayfield",
                hideLabel: true,
                value: "<hr />" + dgettext("plugin_google2fa", "Activate or deactivate the two-factor authentication.") + "<br />&nbsp;"
            }, {
                xtype: "displayfield",
                fieldLabel: dgettext("plugin_google2fa", "Current status"),
                value: this.getStatus(),
                htmlEncode: true,
                ref: "status",
                width: 250
            }, {
                xtype: "displayfield",
                hideLabel: true,
                value: ""
            }, {
                xtype: "button",
                text: dgettext("plugin_google2fa", "Activation/Deactivation"),
                handler: this.activate,
                scope: this,
                disabled: !container.getSettingsModel().get("zarafa/v1/plugins/google2fa/enable_but_activ"),
                width: 250
            }, {
                xtype: "displayfield",
                hideLabel: true,
                value: "<hr />" + dgettext("plugin_google2fa", "You can completely reset the configuration.") + "<br />" +
                    dgettext("plugin_google2fa", "This deletes the secret key and deactivates the two-factor authentication.") + "<br />" +
                    dgettext("plugin_google2fa", "If fundamental changes in the configuration were changed, for example the encryption type, this step may be useful.") + "<br />&nbsp;"
            }, {
                xtype: "button",
                text: dgettext("plugin_google2fa", "Reset"),
                handler: this.openResetConfigurationDialog,
                scope: this,
                disabled: !container.getSettingsModel().get("zarafa/v1/plugins/google2fa/enable_but_reset"),
                width: 250
            }]
        });
        Zarafa.plugins.google2fa.settings.GeneralSettingsWidget.superclass.constructor.call(this, config);
    },
    getStatus: function () {
        return (Zarafa.plugins.google2fa.data.Configuration.isActivated() ? dgettext("plugin_google2fa", "Activated") : dgettext("plugin_google2fa", "Deactivated"));
    },
    openResetConfigurationDialog: function () {
        Zarafa.common.dialogs.MessageBox.show({
            title: dgettext("plugin_google2fa", "Reset"),
            msg: dgettext("plugin_google2fa", "Do you really want to reset the configuration?"),
            icon: Zarafa.common.dialogs.MessageBox.QUESTION,
            buttons: Zarafa.common.dialogs.MessageBox.YESNO,
            fn: this.resetConfiguration,
            scope: this
        });
    },
    resetConfiguration: function (a) {
        if (a === "yes") {
            container.getRequest().singleRequest("google2famodule", "resetconfiguration", {}, new Zarafa.plugins.google2fa.data.ResponseHandler({
                successCallback: this.openResetConfigurationFinishDialog.createDelegate(this)
            }));
        }
    },
    openResetConfigurationFinishDialog: function (a) {
        Zarafa.plugins.google2fa.data.Configuration.gotIsActivated(a);
        this.status.setValue(this.getStatus());
        Zarafa.common.dialogs.MessageBox.show({
            title: dgettext("plugin_google2fa", "Reset"),
            msg: dgettext("plugin_google2fa", "The configuration has been reset."),
            icon: Zarafa.common.dialogs.MessageBox.INFO,
            buttons: Zarafa.common.dialogs.MessageBox.OK,
            scope: this
        });
    },
    openConfigurationDialog: function () {
        container.getRequest().singleRequest("google2famodule", "getsecret", {}, new Zarafa.plugins.google2fa.data.ResponseHandler({
            successCallback: this.openConfigurationDialogX.createDelegate(this)
        }));
    },
    openConfigurationDialogX: function (a) {
        let secret = atob(a.secret);
        let qRCodeGoogleUrl = atob(a.qRCodeGoogleUrl);
        Zarafa.common.dialogs.MessageBox.addCustomButtons({
            title: dgettext("plugin_google2fa", "Configuration"),
            msg: dgettext("plugin_google2fa", "Please install an authentication App on second device:") + "<br />" +
                dgettext("plugin_google2fa", "Google Authenticator (Android, iOS, BlackBerry), Authenticator (Windows Phone)") + "<hr />" +
                dgettext("plugin_google2fa", "Open and configure the authentication app by scanning the QR code below.") + "<br /><br />" +
                "<img src='" + qRCodeGoogleUrl + "' /><br /><br />" +
                dgettext("plugin_google2fa", "Alternatively, you can manually create an account with the following information.") + "<br /><br />" +
                dgettext("plugin_google2fa", "Application") + ": " + a.application + "<br />" +
                dgettext("plugin_google2fa", "Account") + ": " + a.username + "<br />" + dgettext("plugin_google2fa", "Key") + ": " + secret + "<hr />" +
                dgettext("plugin_google2fa", "Afterwards test the function with a generated code to ensure that the configurations are correct."),
            fn: this.openVerifyCodeDialog,
            customButton: [{
                text: dgettext("plugin_google2fa", "Test generated code"),
                name: "verify"
            }],
            scope: this,
            width: 500
        });
    },
    openVerifyCodeDialog: function (a) {
        if (a === "verify")
            Zarafa.common.dialogs.MessageBox.prompt(dgettext("plugin_google2fa", "Test generated code"), dgettext("plugin_google2fa", "Please enter code"), this.verifyCode, this);
    },
    verifyCode: function (a, b) {
        if (a === "ok") {
            container.getRequest().singleRequest("google2famodule", "verifycode", {code: b}, new Zarafa.plugins.google2fa.data.ResponseHandler({
                successCallback: this.openResponseDialog.createDelegate(this)
            }));
        }
    },
    openResponseDialog: function (a) {
        if (a.isCodeOK) {
            Zarafa.common.dialogs.MessageBox.show({
                title: dgettext("plugin_google2fa", "Test generated code"),
                msg: dgettext("plugin_google2fa", "Valid code, you can use the two-factor authentication."),
                icon: Zarafa.common.dialogs.MessageBox.INFO,
                buttons: Zarafa.common.dialogs.MessageBox.OK,
                scope: this,
                width: 350
            });
        } else {
            Zarafa.common.dialogs.MessageBox.show({
                title: dgettext("plugin_google2fa", "Test generated code"),
                msg: dgettext("plugin_google2fa", "Invalid code, please check code.") + "<br />" +
                    dgettext("plugin_google2fa", "You can use a code only one-time.") + "<br />" +
                    dgettext("plugin_google2fa", "Please make sure that time from of server and second device are correct."),
                icon: Zarafa.common.dialogs.MessageBox.ERROR,
                buttons: Zarafa.common.dialogs.MessageBox.OK,
                scope: this,
                width: 350
            });
        }
    },
    activate: function () {
        container.getRequest().singleRequest("google2famodule", "activate", {}, new Zarafa.plugins.google2fa.data.ResponseHandler({
            successCallback: this.setStatus.createDelegate(this)
        }));
    },
    setStatus: function (a) {
        Zarafa.plugins.google2fa.data.Configuration.gotIsActivated(a);
        this.status.setValue(this.getStatus());
        container.getNotifier().notify("info.saved", dgettext("plugin_google2fa", "Two-factor authentication") + ": " + this.getStatus(),
            dgettext("plugin_google2fa", "Current status") + ": " + this.getStatus());
    }
});
Ext.reg("Zarafa.plugins.google2fa.generalsettingswidget", Zarafa.plugins.google2fa.settings.GeneralSettingsWidget);
