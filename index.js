var NAMESPACE = {};

/**
 * MAIN MODULE
 * @param  {object} window   window object
 * @param  {object} document document object
 * @return {void}
 */
(function(window, document, app, undefined){

var _name = "test";


app.whoIs = function(){
	alert(_name);
};


}(this, document, NAMESPACE));