import PkmnLibModule from './Module';

class PkmnLib extends PkmnLibModule {
  constructor() {
    super();
  }

  init() {
    this.core = {
      loaded: true
    };
  }
}

export default PkmnLib;