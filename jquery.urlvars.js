/*
 * jQuery urlVars - http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
 *
 * Read a page's GET URL variables and return them as an associative array.
 * 
 *
 * Thanks to UZBEKJON for the blog post
 *
 * You can get URL parameter values in the following way:
 *
 * // Get object of URL parameters
 * var allVars = $.getUrlVars();
 * 
 * // Getting URL var by its nam
 * var byName = $.getUrlVar('name');
 * 
 */

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});