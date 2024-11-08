<?php
require_once("../../../init.php");
require_once(BASE_PATH . "server/includes/bootstrap.php");
require_once(BASE_PATH . "server/includes/core/class.webappsession.php");
require_once(BASE_PATH . "server/includes/core/class.webappauthentication.php");
require_once(BASE_PATH . "server/includes/core/class.theming.php");
require_once("../config.php");
$webappTitle = defined('WEBAPP_TITLE') && WEBAPP_TITLE ? WEBAPP_TITLE : 'WebApp';
$showVersion = defined('PLUGIN_GOOGLE2FA_LOGINSHOWVERSION') && (PLUGIN_GOOGLE2FA_LOGINSHOWVERSION == 'true');

// Make sure the php session is started
WebAppSession::getInstance();

$error = isset($_SESSION['google2FALoggedOn']) && !$_SESSION['google2FALoggedOn'];

/*
 * Get the favicon either from theme or use the default.
 *
 * @param string theme the users theme
 * @return string favicon
 */
function getFavicon($theme)
{

    if ($theme) {
        $favicon = Theming::getFavicon($theme);
    }

    if (!isset($favicon) || $favicon === false) {
        $favicon = 'client/resources/images/favicon.ico?kv2.2.0';
    }

    return $favicon;
}

$favicon = getFavicon(Theming::getActiveTheme());
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
    Remove this if you use the .htaccess -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php echo $webappTitle; ?></title>
    <meta name="description"
          content="Grommunio WebApp is the ultimate frontend client for Grommunio server. A rich collaboration platform utilizing e-mail, calendars, web meetings, file sharing and more.">
    <meta name="author" content="grommunio.com">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--link rel="apple-touch-icon" href="/apple-touch-icon.png"-->
    <link rel="icon" href="../../../<?php echo $favicon ?>" type="image/x-icon">
    <link rel="shortcut icon" href="../../../<?php echo $favicon ?>" type="image/x-icon">

    <?php
    if (file_exists("../../../client/resources/design2015/css/external/login.css")) // old version
        echo '                <link rel="stylesheet" type="text/css" href="../../../client/resources/design2015/css/external/login.css">';
    else
        echo '                <link rel="stylesheet" type="text/css" href="../../../client/resources/css/external/login.css">';

    $theme = Theming::getActiveTheme(); // Add the styling of the theme
    $css = Theming::getCss($theme);
    if (count($css)) {
        foreach ($css as $file) {
            echo '                <link rel="stylesheet" type="text/css" href="../../../' . $file . '">';
        }
    }
    ?>
    <script>
        navigator.sayswho = (function () {
            let ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'MSIE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

            return M.join(' ');
        })();

        let bodyEl;
        let cntEl;
        let bgEl;

        // Our designer doesn't want the box in the center of the screen, instead
        // he wants the center of the box at 7/16 of the height of the window :-)
        let centerlinePos = 7 / 16;

        function onResize() {
            if (!bodyEl) return;

            let top = centerlinePos * bodyEl.clientHeight - cntEl.clientHeight / 2;

            cntEl.style.top = top + 'px';
            cntEl.style.left = (bodyEl.clientWidth - cntEl.clientWidth) / 2 + 'px';
            bgEl.style.width = bodyEl.clientWidth + 'px';
            bgEl.style.height = bodyEl.clientHeight + 'px';
            bgEl.style.top = (-top + (navigator.sayswho === 'MSIE 9' ? 200 : 0) / 2) + 'px';
            bgEl.style.left = -(bodyEl.clientWidth - cntEl.clientWidth + (navigator.sayswho === 'MSIE 9' ? 200 : 0)) / 2 + 'px';
        };
        window.addEventListener('resize', onResize);

        function onLoad() {
            if (document.getElementById("token").value === "") {
                document.getElementById("token").focus();
            }
        }

        window.onload = onLoad;
    </script>
</head>

<body class="login">
<div id="form-container">
    <div id="bg"></div>
    <div id="content">
        <div class="left">
            <div id="logo"></div>
            <h2>WebApp <?php if ($showVersion) echo file_get_contents("../../../version"); ?><br/>
                Google2FA <?php if ($showVersion) echo file_get_contents("../version"); ?></h2>
        </div>
        <div class="right">
            <h1><?= $_SESSION['google2FAEcho']['boxTitle'] ?></h1>
            <form action="logon.php" method="post">
                <input type="text" name="token" id="token" class="inputelement">
                <?php if (isset($error) && $error) { ?>
                    <div id="error"><?php echo $_SESSION['google2FAEcho']['msgInvalidCode']; ?></div>
                <?php } ?>
                <a href="../../../index.php?logout"><?= $_SESSION['google2FAEcho']['butCancel']; ?></a>&nbsp;
                <input id="submitbutton" class="button" type="submit"
                       value="<?= $_SESSION['google2FAEcho']['butOk']; ?>"/>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript">
    bodyEl = document.getElementsByTagName('body')[0];
    cntEl = document.getElementById('form-container');
    bgEl = document.getElementById('bg');

    // Add some classes to the body tag, so we can change styles (for IE)
    bodyEl.className += (bodyEl.className.length > 0 ? ' ' : '') + navigator.sayswho.split(' ')[0];
    bodyEl.className += ' ' + navigator.sayswho.replace(' ', '');

    // Show the login box when the background image has loaded
    let img = document.createElement('img');
    img.onload = function () {
        cntEl.style.visibility = 'visible';
    }
    img.src = window.getComputedStyle(bodyEl, false).backgroundImage.slice(4, -1).replace(/"/g, "");

    // call it once to initialize the elements
    onResize();

    // Show a spinner when submitting
    let form = document.getElementsByTagName('form')[0];
    // Some browsers need some time to draw the spinner (MS Edge!),
    // so we use this variable to delay the submit a little;
    let firstSubmit = true;
    form.onsubmit = function () {
        if (!firstSubmit) {
            return true;
        }
        // Adding this class will show the loader
        cntEl.className += ' loading';
        // Call onResize, because an error message might have enlarged the login box,
        // so it is out of position.
        onResize();
        firstSubmit = false;
        window.setTimeout(function () {
            form.submit();
        }, 10);
        return false;
    };
</script>
</body>
</html>
