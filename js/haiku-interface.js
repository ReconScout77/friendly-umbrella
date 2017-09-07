import {Haiku} from './../js/haiku.js';

$(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let line1Input = $('#line1').val();
    let line2Input = $('#line2').val();
    let line3Input = $('#line3').val();

    let newHaiku = new Haiku(line1Input, line2Input, line3Input);
    let result = newHaiku.checkSyllable();

    if (result) {
      $('#result').text("Your haiku is valid. Great haiku!");
    } else {
      $('#result').text("Your poem is a mess! It's not a haiku! You need to brush up your syllable knowledge.");
    }
  });
});
