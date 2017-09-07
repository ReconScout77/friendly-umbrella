import{Haiku} from './../js/haiku.js';

let result;

describe('Haiku and all of its methods', function () {

  it('should return true if the syllable count is 5', function () {
    let haiku = new Haiku("I want a haiku", "But I dont know what to do", "give me a paper");
    result = haiku.checkSyllable();
    expect(result).toEqual(true);
  }) ; 



});
