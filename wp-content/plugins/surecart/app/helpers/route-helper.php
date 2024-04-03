<?php

/**
 * Handles a url $_GET request.
 *
 * @param string $var Url variable value.
 * @param string $name Name of URL var.
 */
function sc_url_var( $var, $name = 'action' ) {
	if ( ! $var ) return empty( $_GET[$name] ); // phpcs:ignore
	return ! empty( $_GET[$name] ) && $var === $_GET[$name]; // phpcs:ignore
}

/**
 * Handles a url $_GET request for sc_action.
 *
 * @param string $var Url variable value.
 * @param string $name Name of URL var.
 */
function sc_action( $var, $name = 'sc-action' ) {
	if ( ! $var ) return empty( $_GET[$name] ); // phpcs:ignore
	return ! empty( $_GET[$name] ) && $var ===  $_GET[$name]; // phpcs:ignore
}
