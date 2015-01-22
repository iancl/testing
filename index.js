'use strict';
var NAMESPACE = {};

/**
 * MAIN MODULE
 * @param  {object} window   window object
 * @param  {object} document document object
 * @return {void}
 */
(function(window, document, app, undefined){

// keeping name string
var _name = "test";


// show a dialog with the _name
app.whoIs = function(){
	alert(_name);
};

// added deferred
app.deferred = function(time, fn){
	return setTimeout(fn, time);
};

// setting local name
app.setName = function(name){
	_name = name;
};


}(this, document, NAMESPACE));