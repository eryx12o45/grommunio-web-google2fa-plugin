<?php

/**
 * Configuration for Google2FA plugin
 */

/**
 * Application name in Authenticator
 */
const PLUGIN_GOOGLE2FA_APPNAME = 'Grommunio WebApp';

/**
 * Enable/Disable plugin
 * Default for new users, this doesn't mean the activation of two-factor authentication!
 */
const PLUGIN_GOOGLE2FA_ENABLE = true;

/**
 * Enable plugin when plugin is loading, the user can't disable the plugin.
 * But if the activate button is enabled the user can deactivate the two-factor authentication!
 */
const PLUGIN_GOOGLE2FA_ALWAYS_ENABLED = false;

/**
 * Activate/Deactivate 2FA
 * Default for new users.
 */
const PLUGIN_GOOGLE2FA_ACTIVATE = false;

/**
 * Activate 2FA when plugin is loading.
 * If PLUGIN_GOOGLE2FA_ALWAYS_ACTIVATED is true, PLUGIN_GOOGLE2FA_ENBUTACTIV should be false
 */
const PLUGIN_GOOGLE2FA_ALWAYS_ACTIVATED = false;

/**
 * Enable/Disable button configuration in settings.
 * For example for admin administration in ldap, ...
 */
const PLUGIN_GOOGLE2FA_ENBUTCONF = true;

/**
 * Enable/Disable button activate/deactivate in settings.
 * For example for admin administration in ldap, ...
 */
const PLUGIN_GOOGLE2FA_ENBUTACTIV = true;

/**
 * Enable/Disable button reset configuration in settings.
 * For example for admin administration in ldap, ...
 */
const PLUGIN_GOOGLE2FA_ENBUTTRESET = true;

/**
 * As for security reasons, the version of Grommunio is not shown on the 2FA login screen any longer.
 */
const PLUGIN_GOOGLE2FA_LOGINSHOWVERSION = false;