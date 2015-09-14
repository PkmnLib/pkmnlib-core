/*jslint node: true */

"use strict";

class PkmnLibModule {
  constuctor() {
    if (this.init === undefined) {
      throw new TypeError("Must override method init");
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

var pkmnLib = walkerGen([PkmnLib]);

pkmnLib.Module = PkmnLibModule;

export default pkmnLib;
