
# Protected-Music-WebScraper

Search and Download mp3 files and Podcasts from websites WITHOUT API, using puppeteer web-scraper in NODE.


## Features
1) Search Albums/ Songs/ Podcasts 
2) Get MP3 Link of the songs/Podcasts
 3) NO download limit / Ads
## Example:
1) Let's search a song "EK thi pyaar" using the format
```sh
node app.js <name of the song>
```
```sh
xobe19@xobe19:~/Protected-Music-WebScraper$ node app.js "ek din pyaar"
```

2) After the request the output will look something like this
```sh
xobe19@xobe19:~/Protected-Music-WebScraper$ node app.js "ek din pyaar"
1) Ek Din Pyaar (Tadipaar)  Link: /song/ek-din-pyaar-tadipaar/GQxZViZ2aHs
2) Ek Din Pyaar (Tadipaar)  Link: /album/ek-din-pyaar-tadipaar/BSpVsiInb5U_
3) Ek Dhun Pyar Ki  Link: /album/ek-dhun-pyar-ki/-owrYkqvKq4_
4) Haan Ye Hi Pyaar Hai  Link: /album/haan-ye-hi-pyaar-hai/AEEXa16X7xM_
5) Ek Din Pyaar (Tadipaar)  Link: /song/ek-din-pyaar-tadipaar/GQxZViZ2aHs
6) Ek Din Jhagda Ek Din Pyar  Link: /song/ek-din-jhagda-ek-din-pyar/KCIyZTlFTVw
7) Ek Din Jhagda Ek Din Pyar - JB  Link: /song/ek-din-jhagda-ek-din-pyar---jb/IgM7SBhocmU
Choose the number of your song: 
```
3) choose your number and hit enter, let's choose 1 here.
4) the app will start scraping URL's to search for the required mp3
```sh
xobe19@xobe19:~/Protected-Music-WebScraper$ node app.js "ek din pyaar"
1) Ek Din Pyaar (Tadipaar)  Link: /song/ek-din-pyaar-tadipaar/GQxZViZ2aHs
2) Ek Din Pyaar (Tadipaar)  Link: /album/ek-din-pyaar-tadipaar/BSpVsiInb5U_
3) Ek Dhun Pyar Ki  Link: /album/ek-dhun-pyar-ki/-owrYkqvKq4_
4) Haan Ye Hi Pyaar Hai  Link: /album/haan-ye-hi-pyaar-hai/AEEXa16X7xM_
5) Ek Din Pyaar (Tadipaar)  Link: /song/ek-din-pyaar-tadipaar/GQxZViZ2aHs
6) Ek Din Jhagda Ek Din Pyar  Link: /song/ek-din-jhagda-ek-din-pyar/KCIyZTlFTVw
7) Ek Din Jhagda Ek Din Pyar - JB  Link: /song/ek-din-jhagda-ek-din-pyar---jb/IgM7SBhocmU
Choose the number of your song: 1

 
 Trying to Steal the MP3 file 
 

```

6) finally you will get the mp3 link 
```sh
Successfully stole MP3!
[
  'https://ac.cf.saavncdn.com/138/a7a6718778707bb38c69c16da2b6f74d_160.mp4?Expires=1615537367&Signature=iDCt4ZH4OD-RS3ZT2XitVYbVROTzcX3V5gyHZwATmxij9ha7-imyWICNnZFa680kire6ENlmngQnanTPBqDDDg96RQj812qy7ts2psSmjR2SmID7cwdk2mSSP6pf5h0wzw~icohzMWL9TpNnfXcVu613gLs5TzPBYuuCyEd0KkSqZmHdK-1QFfKRJrNqkatLYVQFZkseOMs7pJR3ptgm5LGyCm8nb2-PMzSBLCFGT8RTRxp34AeV6qPLKGhXouCerPW-aGFx6EtGB3sVrEPv9Gc27PLqexslvkA0oGRfCQfN~cxxY2r3~gWKpLR12koLTDyoJauy1v0qksCNuJ4zPA__&Key-Pair-Id=APKAJB334VX63D3WJ5ZQ'
]


```
### Note:
the given link is dynamic and it will expire soon so, make sure you use the link/ send the link to your client as soon as possible

## Installation
Windows, Mac, Linux & Termux(Android shell):
1) Clone the git repo
```sh
git clone https://github.com/xobe19/Protected-Music-WebScraper
```
2) open the cloned directory
3) make sure you have the latest versions of nodejs and npm available
4) install the node modules using
```sh
npm install
```
5) Done!
