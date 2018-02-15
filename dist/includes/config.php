<?php

$config = new \Doctrine\DBAL\Configuration();
$connectionParams = array(
    'url' => 'pdo_mysql://user:secret@localhost/mydb',
);
$conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
