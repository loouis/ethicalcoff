<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ethicalcoffee');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-8|K!Vfb3OyT{gIxsJTTY}.F],?zQjmx*<3D*u=x4QPJm#0E<h`K|0rQlxnHn>XD');
define('SECURE_AUTH_KEY',  '(+!?ZA,IWJX&3!E|QZ}53}i,`-k4=_9biAmWNV`=v<^3e%dXU_yF/Fk^RR$&d8V1');
define('LOGGED_IN_KEY',    'c=k}XPCc0OF!:5;r@0/IHE[2<etcc&N/5/[b-UQzk.)WZ&!_g83s#eQ03hH~5l4I');
define('NONCE_KEY',        '[eY%PPpIK_q{ZU9GqiAK:v!l={g3)o]Ut{H^S?K;RO1sY$zq p,L2jsV*J3@M8LP');
define('AUTH_SALT',        'mWwj|p$Ieb#3@n*f6JyYCt(:ek/M)ZEm^MRY]~QH_|[a@L}y^0A7=;-%saS]+~[4');
define('SECURE_AUTH_SALT', 'YEI%L_f~W-r9GQg>1~CK#NQM7We1Os$FK(0VX~qnDU8Ji+&|qE&ffO^xq3>rM(&s');
define('LOGGED_IN_SALT',   'cjuXs1JOO,e+5A[#|BHo~ppDga6yAB/c)N*0r7{r|f9YF wQE&ajQlBv|^dS^/}O');
define('NONCE_SALT',       'FMSv:JB1quyiKKNajY}RGsF-OP()r]5%ljv{aUvv)&z}M5Ize?FZ4+kTm}kSOZ@;');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
