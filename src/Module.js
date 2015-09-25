/**
 * A module for PkmnLib.
 */
class PkmnLibModule {
	/**
	 * Create uninitialized module.
	 * @return {PkmnLibModule} Returns uninitialized module.
	 */
  constuctor() {
    if (''+this.init == ''+(function init() {})) { // Yes, hack, but only way to compare the function to a blank one.
      throw new TypeError("Must override method init");
    }
  }
	
	/**
	 * Get instance with proper checks.
	 * @return {PkmnLib} Returns PkmnLib instance.
	 */
  get pkmnLib() {
		/**
		 * Non-scoped `this`.
		 * @private
		 */
    var self = this;

    if (typeof self.originalPkmnLib === 'undefined') {
      throw PkmnLibModule.NoPkmnLib();
    }

    return self;
  }
	
	/**
	 * Initialize this module in the chain. To initialize, assign the previous PkmnLib instance to this.
	 * @param {PkmnLib} val - See method description.
	 */
  set pkmnLib(val) {
		/**
		 * Previous PkmnLib instance.
		 * @private
		 * @type {PkmnLib}
		 */
    this.originalPkmnLib = val || {};

    this.init();
    
		/**
		 * `Object.assign` with accessor support.
		 * @private
		 * @param {Object} target - Target object.
		 * @param {...Object} sources - Source object(s).
		 * @return {Object} Modified target object.
		 */
    function accessorAssign(target, ...sources) {
      sources.forEach(source => {
        Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
          descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
          return descriptors;
        }, {}));
      });
      return target;
    }
    
    accessorAssign(this, this.originalPkmnLib);
  }
	
	/**
	 * Initializing method. Assign to `this.pkmnLib` to call.
	 * @private
	 * @abstract
	 * @return {null} Returns nothing.
	 */
	init() {
		
	}
	
	/**
	 * Run when no PkmnLib instance is available.
	 * @return {TypeError} TypeError error for throwing.
	 */
  static NoPkmnLib() {
    return new TypeError('No originalPkmnLib instance!');
  }
}

/**
 * Final PkmnLib module export.
 * @type {PkmnLibModule}
 */
export default PkmnLibModule;