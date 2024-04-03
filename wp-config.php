<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wprueba' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aWe&Q}$JR@&// |8+s1-{JZM}Ba_h(4(x^kT~p`:|qSkuSo&yN2P#n@gp*ntf4F*' );
define( 'SECURE_AUTH_KEY',  'pCI1tNi6j=FKMI=|p}cW{?:M`; c[nUZ~ItprTYaqtKUK%Zg=_i*N~]L)~ZWh2@?' );
define( 'LOGGED_IN_KEY',    ';4wo4I#v$3(0dgWG,|_GdjgO3-eG-=Z?GUw*O^?_Qd+qBmGAu29)VNp>)PRg[rYe' );
define( 'NONCE_KEY',        '[hB:5.OP*!Dl{yn2H0i[,5Or!5w B-vF0TkIt,[Og8$#Eh[mXw]j=U4Wc:/<DQ&{' );
define( 'AUTH_SALT',        'mSJ0im-#;J{Jq8scnO~n]u7LARL2^@dyTWq:YB}%<tYd. i<V(kft4H*[Iska|2@' );
define( 'SECURE_AUTH_SALT', '6zi|E{<|ec=rXTnJ<s!lq/Bila%U1sm1|Mk#/,gipszwHQ;w(K2b2zKAo(2wDRTr' );
define( 'LOGGED_IN_SALT',   'aPO7LLNwm}m+<k$Kyo,b9#<#j0vWM~Y>T{(VlEv|/qKQu4i.XzP*.MEkH3ni6G3%' );
define( 'NONCE_SALT',       '-E)_!`gtSfd@i/+U|W;VA+5IdgL%K}PY;ud~OGPy3vA:fRz}u/Yz(Q]ZA|FsitZ7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
