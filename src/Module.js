class PkmnLibModule {
  constuctor() {
    if (this.init === undefined) {
      throw new TypeError("Must override method init");
    }
  }

  get pkmnLib() {
    var self = this;

    if (typeof self.originalPkmnLib === 'undefined') {
      throw PkmnLibModule.NoPkmnLib();
    }

    return self;
  }

  set pkmnLib(val) {
    this.originalPkmnLib = val || {};

    this.init();
    
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

  static NoPkmnLib() {
    return new Error('No originalPkmnLib instance!');
  }
}

export default PkmnLibModule;