'use strict'
var assert = require('assert');

describe ('Home web test', function () {
  it ('Check texts of wellcome page', function () {
    browser.url('http://localhost:3000');

    //Get the title of the web. It is a good idea to do it allways to check that 
    //we are in the right web
    var title = browser.getTitle();
    assert.equal(title,'Angular 2 Universal Starter');

    var mainMsg = browser.getText('h1=Hello World');
    assert.equal(mainMsg,'Hello World'); 

  });
});