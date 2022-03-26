import {getBlockFone} from './utilities'

class BlockModel {
  constructor(formFone, blockFone, error = false) {
    this.formFone = formFone;
    this.blockFone = getBlockFone(formFone);
    this.error = error;
  }
}

export default BlockModel;
