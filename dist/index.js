/** @license Apache-2.0 */

'use strict';

/**
* Test whether an object's own property is non-configurable.
*
* @module @stdlib/assert-is-nonconfigurable-property
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
* var isNonConfigurableProperty = require( '@stdlib/assert-is-nonconfigurable-property' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': true,
*     'writable': true,
*     'value': 'beep'
* });
*
* var bool = isNonConfigurableProperty( obj, 'boop' );
* // returns false
*
* bool = isNonConfigurableProperty( obj, 'beep' );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
