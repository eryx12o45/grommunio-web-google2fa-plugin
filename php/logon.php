<?php

require_once __DIR__ . "/vendor/autoload.php";

use OTPHP\TOTP;

/**
 * PHP file check code from two-factor authentication login page (login.php)
 */
require_once("../../../init.php");
require_once(BASE_PATH . "server/includes/bootstrap.php");
require_once(BASE_PATH . "server/includes/core/class.encryptionstore.php");

// Make sure the php session is started
WebAppSession::getInstance();

$code = ($_POST && array_key_exists('token', $_POST)) ? $_POST['token'] : '';

$encryptionStore = EncryptionStore::getInstance();
$secret = $encryptionStore->get('google2FASecret');
$user = $encryptionStore->get('username');

$otp = TOTP::createFromSecret($secret);
$otp->setLabel($user);
$verification = false;

if ($otp->verify($code)) {
    $verification = true;
}

if ($verification) {
    $_SESSION['google2FACode'] = $code; // to disable code
    $_SESSION['google2FALoggedOn'] = TRUE; // 2FA successful
    header('Location: ../../../index.php', true, 303);

} else {
    $_SESSION['google2FALoggedOn'] = FALSE; // login not successful
    header('Location: login.php', true, 303);
}
