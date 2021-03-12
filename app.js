// import important variables
const sf = require('./scraperFunctions')
const de = require('./data-extractor')
// readline for asking user for input number in step 2
const readline = require("readline");
// initiaizing readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// variable to store user input
let input = ""
// check whether user has entered input
if(process.argv[2]) {
    // if user has entered input
    // store the input in the "input" variable
    input = process.argv[2];
}
else {
    // if the user has not entered input
    // return error
    console.log('Please enter input')
}
// getSearchResults() function returns the data in a NodeArray(array with html elements)

sf.getSearchResults(input,
    (htmlData) => {
        // convert the html data array to JSON object
        // store the value in JSONdata variable
      const JSONdata = de(htmlData);
      // print out the JSONdata object in terminal
      for(let i = 0; i < JSONdata.length; i++) {
          console.log(String(i + 1) + ") " + JSONdata[i].text + "  " + "Link: " + JSONdata[i].href)
      }
      // ask the user for input
      rl.question("Choose the number of your song: ", (chosen) => {
          // convert the string input to a number
          chosen = Number(chosen)
          // actualIndex of an array starts from 0
          // whereas the option provided to user starts from 1
          
      let actualIndex = chosen - 1;
      // get the ID of the song and store it in songID variable
      let songID = JSONdata[actualIndex].href;
      console.log("\n \n Trying to Steal the MP3 file \n \n ");
      // get direct CDN link from songID
      sf.getSongLink(songID, (ans) => {
          console.log("Successfully Stole the MP3 Link")
          console.log(ans);
          // user presses ctrl + c to close the process
          
      })


      })
      

    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    )



