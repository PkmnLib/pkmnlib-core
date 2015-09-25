import PkmnLibModule from './Module';

/**
 * The library.
 * @type {Object}
 */
class PkmnLib extends PkmnLibModule {
  /**
   * Sets up PkmnLib. Only call via loader.
   * @return {{}} Uninitialized PkmnLib instance
   */
  constructor() {
    super();
  }
  
  /**
   * Initializes PkmnLib. Makes `this.core` an instance of Core and merges `this.originalPkmnLib` into `this`.
	 * @override
   * @return {null} Returns nothing.
   */
  init() {
		/**
		 * Core Module
		 * @typedef {loaded: boolean} Core
		 * @property {boolean} loaded Always true.
		 */
		var Core = {
			loaded: true
		};
		
		/**
		 * Standard instance of Core.
		 * @type {Core}
		 */
    this.core = Core;
  }
}

/**
 * Final PkmnLib core export.
 * @type {PkmnLib}
 */
export default PkmnLib;