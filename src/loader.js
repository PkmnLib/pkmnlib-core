/*jslint node: true */

"use strict";

import PkmnLib from './core';

/**
 * Generates a PkmnLib instance from dependencies.
 * @private
 * @return {PkmnLib} An instance of PkmnLib.
 */
function walkerGen(deps, pkmnLib) {
  pkmnLib = (typeof pkmnLib === 'undefined') ? null : pkmnLib;
  
  for (let e of deps) {
    var newPkmnLib = new e();
    
    newPkmnLib.pkmnLib = pkmnLib;
    
    pkmnLib = newPkmnLib.pkmnLib;
  }
  
  delete pkmnLib.originalPkmnLib;
  
	Object.defineProperty(pkmnLib, 'constructor', {
  	value: PkmnLib,
  	writable: true,
  	enumerable: false,
  	configurable: true
	});
	
  return pkmnLib;
}

import flatten from './../lib/lodash-flatten/array/flatten';
import config from './../config';

/**
 * Finalized PkmnLib.
 * @type {PkmnLib}
 */
var pkmnLib = walkerGen(flatten(config.modules, true));

import Module from './Module';

//@if ES5=false
export {Module};
//@endif

//@if ES5=true
pkmnLib.Module = Module;
//@endif

export default pkmnLib;