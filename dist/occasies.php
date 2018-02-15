<?php
use Doctrine\Common\ClassLoader;
require_once '../vendor/twigautoload.php';
require_once 'includes/config.php';
require_once 'includes/functions.php';
require '../vendor/doctrine/common/lib/Doctrine/Common/ClassLoader.php';

$classLoader = new ClassLoader('Doctrine', '../vendor/doctrine/common');
$classLoader->register();

$loader = new Twig_Loader_Array(__DIR__ . '/templates');
$twig = new Twig_Environment($loader);

echo $twig->render('occasies.twig', array(
    
));

// EOF