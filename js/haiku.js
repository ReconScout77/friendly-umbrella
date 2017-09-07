const syllable = require("syllable");

export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkSyllable(){
    let line1Count = 0;
    let line2Count = 0;
    let line3Count = 0;
    line1Count = syllable(this.line1);
    line2Count = syllable(this.line2);
    line3Count = syllable(this.line3);

    if ((line1Count === 5) && (line2Count === 7) && (line3Count === 5)) {
      return true;
    } else {
      return false;
    }
  }
}
