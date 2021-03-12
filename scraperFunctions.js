



// create an async function which gets the search results for an input string
async function getSearchResults(search, cb) {
    // use puppeteer module for emulating a browser environment
    const puppeteer = require('puppeteer');
    // wrapper async function
    const myAsync = async () => {
        let browser = await puppeteer.launch({
            headless: true,
            // use google chrome instead of default chromium
            // this is to allow access to playing Protected
            // H.264 files
            executablePath: '/usr/bin/google-chrome',
            args: [
                // enable autoplay withot interaction
                "--autoplay-policy=no-user-gesture-required",
            ],
        });
        // create a new page in browser
      const page = await  browser.newPage();
      // set viewport to desktop values to prevent the website from going into mobile mode
      await page.setViewport({width: 1300, height: 720})
      // set a desktop user agent
      // (similar to VIEW as dekstop in browsers)
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
      
      
      await page.goto('https://www.jiosaavn.com');
      // click the big search button on the top centre
      await page.click('input.rbt-input-main');
      // DO NOT CHANGE THE VALUE OF INPUT USING DOM
      // JioSaavn has protection against it
      // instead use page.type() in pupeteer
      // to emulate typing from keyboard
      await page.type('input.rbt-input-main', search);
      
      // wait 1000 ms for the search results to load
      // can change the value depeing on your internet connection speed
      await page.waitForTimeout(1000);
     
    // find the elements containing songs in the search results
    const data =  await page.$$eval("h4.u-centi.u-ellipsis.u-color-js-gray.u-margin-bottom-none\\@sm.u-margin-right\\@sm.u-margin-right-none\\@lg", el => el.map((a) => a.innerHTML) );
    // close the browser
    await browser.close()
    // return the data
    return data;
    
   
    
    }
    // store the result of the function in final varaible
    let fin = await myAsync();
    // call the callback function with fin as parameter
    cb(fin);


}

// create a function getSongLink with parameters songID (starting with /song/name/{ID})
async function getSongLink(songID, calb) {
    // Base song url to attach the ID To
    songURL = "https://www.jiosaavn.com";
    // IIFE 
    // Using an Immediately invoked function expression to prevent unnecessary variable decleration
    (async () => {
        // import puppeteer
        const puppeteer = require('puppeteer')
        // import ad blocked to prevent
        // ads in the saavn page from Loading
        const {PuppeteerBlocker} = require('@cliqz/adblocker-puppeteer');
        // use fetch to import a dynamic adblock list
        const fetch = require('cross-fetch');
       
        
       // initialize the ad blocker
        const blocker = await PuppeteerBlocker.fromLists(fetch, ['https://pastebin.com/raw/Nn3LyxfC'])
      // create a browser 
      let browser = await puppeteer.launch({
          // headless
        headless: true,
        // use google chrome instead of chromium
        // to play audio files 
        executablePath: '/usr/bin/google-chrome',
        args: [
            // autoplay files without any user interaction
            "--autoplay-policy=no-user-gesture-required",
        ],
    });
        // create a new page
      const page = await browser.newPage();
    
     
     // enable adblocking on this page
     
      await blocker.enableBlockingInPage(page);
      // change viewport to tell the server that you are not using
      // a mobile client
      // mobile client is default in puppeteer
      await page.setViewport({width: 1300, height: 720})
      // set User agent to a desktop one
      // so that the website treats you as a desktop user
      
      
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
      // go to the song page by concatenating the base url and song ID
      await page.goto(songURL + songID);
      // click the big green play button so that the div containing the mp3 
      // is requested from the server 
      await page.click('a.c-btn--primary')
      // wait for the div containing the href/src links to appear
       await page.waitForSelector('video.jw-video');
       // get the source attribute of video.jw-video which contains the required mp3
        let  answer = await page.$$eval('video.jw-video', el => el.map((l) => l.getAttribute('src')));
        await page.waitFor(300)
        // callback with the answer (mp3 links )array
        answer = await page.$$eval('video.jw-video', el => el.map((l) => l.getAttribute('src')));
        calb(answer);
      
      
    
    
      
       
    })();


}

// export the modules
module.exports = {getSearchResults, getSongLink}