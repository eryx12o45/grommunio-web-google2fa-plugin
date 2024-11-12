# grommunio-web Google 2FA Plugin

This plugin will integrate two-factor authorization with an external OTP provider (Google Authenticator App) in grommunio-web.

# Dependencies

* make (to build plugin)
* NodeJS >=18
* * PHP >=8.2

# How to install plugin

* Check out the repository locally
* Execute ``npm install``
* Execute ```make DESTDIR=./google2fa```
* Copy folder ```google2fa``` to your Grommunio Webmail's plugin folder ``[default: /usr/share/grommunio-web/plugins]``
* As default the plugin is enabled for each user, but needs to be activated seperately in the plugin configuration
* Before setting the plugin to ``activated`` for a user, make sure to configure the Authenticator app.

# Configuration

The plugin configuration can be found in the **'config.php'** file.

```const PLUGIN_GOOGLE2FA_ENABLE = true;```

* Enable/Disable plugin
* Default for new users, this doesn't mean the activation of two-factor authentication!

```const PLUGIN_GOOGLE2FA_ALWAYS_ENABLED = false;```
* Enable plugin when plugin is loading, the user can't disable the plugin.

```const PLUGIN_GOOGLE2FA_ACTIVATE = false;```
* Activate / deactivate 2FA
* Default for new users.

```const PLUGIN_GOOGLE2FA_ALWAYS_ACTIVATED = false;```
* Activate 2FA when plugin is loading.

