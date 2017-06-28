(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var swapiModule = function () {
  var rootURL = 'http://swapi.co/api/';

  function request(url, cb) {
    function listener(e) {
      if(oReq.readyState != 4 && e.type !== 'load') return;
      if(oReq.status && oReq.status != 200) {
        //this will be the error handler
      } else {
        cb(JSON.parse(oReq.responseText));
      }
    }

    var oReq;
    // Use XDomainRequest if it's available (to support IE<10)
    if (window.XDomainRequest) {
      oReq = new XDomainRequest();
      oReq.open('get', url, true);

      // Update the timeout to 30 seconds for XDomainRequests.
      oReq.timeout = 30000;
    } else {
      oReq = new XMLHttpRequest();
      oReq.open('get', url, true);
      oReq.setRequestHeader('User-Agent', 'swapi-javascript');
      oReq.setRequestHeader('Accept', 'application/json');
    }
    oReq.onload = listener;

    // Wrap in a 0 millisecond timeout.
    // XDomainRequests appear to randomly fail unless kicked into a new scope.
    setTimeout(function(){
      oReq.send();
    }, 0);
  }

  function getResources(cb) {
    request(rootURL, cb);
  }

  //generic for ALL calls, todo, why optimize now!
  function getResource(u, cb) {

  }

  function singularRequestGenerator(path) {
    return function(id, cb) {
      request(rootURL + path + '/'+id+'/', cb);
    };
  }

  function pluralRequestGenerator(path) {
    return function() {
      if(arguments.length === 1) {
        request(rootURL + path + '/', arguments[0]);
      } else {
        request(rootURL + path + '/?page=' + arguments[0], arguments[1]);
      }
    };
  }

  return {
    getResources:  getResources,
    getPerson:     singularRequestGenerator('people'),
    getPeople:     pluralRequestGenerator('people'),
    getFilm:       singularRequestGenerator('films'),
    getFilms:      pluralRequestGenerator('films'),
    getPlanet:     singularRequestGenerator('planets'),
    getPlanets:    pluralRequestGenerator('planets'),
    getSpecies:    singularRequestGenerator('species'),
    getAllSpecies: pluralRequestGenerator('species'),
    getStarship:   singularRequestGenerator('starships'),
    getStarships:  pluralRequestGenerator('starships'),
    getVehicle:    singularRequestGenerator('vehicles'),
    getVehicles:   pluralRequestGenerator('vehicles')
  };


}();
exports.swapiModule = swapiModule;

},{}],2:[function(require,module,exports){

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

},{"./../js/flickr.js":1}]},{},[2]);
