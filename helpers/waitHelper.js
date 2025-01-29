const { browser } = require ('webdriverio');

  function waitUntilElementExist(element, timeout = 10000) { 
    element.waitForExist(timeout);
  }

  async function waitAndClick(element){
        await waitUntilElementExist(element);
        await element.click();
  } 
  
  module.exports = {
    waitUntilElementExist,
    waitAndClick
  };