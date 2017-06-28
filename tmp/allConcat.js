
var swapiModule = require('./../js/flickr.js').swapiModule;


$(document).ready(function() {

  $("#luke").click(function(){
      $.get('https://swapi.co/api/people/?search=luke', function(response) {
        $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

  $("#leia").click(function(){
      $.get('https://swapi.co/api/people/?search=leia', function(response) {
        $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. She has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
      console.log(JSON.stringify(response));
    });
  });

  $("#chewie").click(function(){
      $.get('https://swapi.co/api/people/?search=chewbacca', function(response) {
          $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

  $("#darth").click(function(){
      $.get('https://swapi.co/api/people/?search=vader', function(response) {
        $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

  $("#queen").click(function(){
      $.get('https://swapi.co/api/people/?search=amidala', function(response) {
  $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

  $("#r2").click(function(){
      $.get('https://swapi.co/api/people/?search=r2', function(response) {
        $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

  $("#obi").click(function(){
      $.get('https://swapi.co/api/people/?search=obi', function(response) {
        $('.showPerson').text(response.results[0].name + " is " + response.results[0].height + " cm tall and weighs " + response.results[0].mass + " kilograms. He has " + response.results[0].hair_color + " hair and " + response.results[0].eye_color + " eyes. He's an amazing spaceship pilot, has a twin sister, and is BFFs with Yoda!");
        console.log(JSON.stringify(response));
    });
  });

});
