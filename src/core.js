class PkmnLibModule {
  constuctor() {
    if (this.init === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override method");
    }
  }
  
  get pkmnLib() {
    var self = this;
    
    if (typeof self.originalPkmnLib === 'undefined') {
      throw PkmnLib.NoPkmnLib();
    }
    
    return self;
  }
  
  set pkmnLib(val) {
    this.originalPkmnLib = val;
    
    this.init();
  }
}

class PkmnLib extends PkmnLibModule {
  constructor() {
    super();
  }
  
  init() {
    
  }
  
  static NoPkmnLib() {
    return new Error('No originalPkmnLib instance!');
  }
}

window.PkmnLib = PkmnLib;

function walkerGen(deps) {
  var pkmnLib = null;
  
  for (let e of deps) {
    var newPkmnLib = new e();
    
    newPkmnLib.pkmnLib = pkmnLib;
    
    pkmnLib = newPkmnLib.pkmnLib;
  }
  
  delete pkmnLib.originalPkmnLib;
  
  return pkmnLib;
}

window.pkmnLib = walkerGen([window.PkmnLib]);
