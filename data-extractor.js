

const dataExtractor = (dataArray) => {
    // variable data holds all the imp data
    let data = [];
    for (let i = 0; i < dataArray.length; i++) {
       // extract textStart and hrefStart from HTML string
        const textStart = dataArray[i].search("text=");
        const hrefStart = dataArray[i].search('href=');
        let text = "";
        // alternative to split function in JS
        for(let j = textStart + 6 ; j < hrefStart-2; j++) {
            text += dataArray[i][j]
        } 
        let href = "";
        // alternative to split function in JS
        const hrefEnd = dataArray[i].search('>');
        for(let j = hrefStart + 6 ; j < hrefEnd - 1 ; j++) {
            href += dataArray[i][j]
        }
        data.push({text, href })
    }
    return data;
}
// export the modules
module.exports = dataExtractor

