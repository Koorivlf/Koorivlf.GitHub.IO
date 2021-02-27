smell = [`an intoxicating nature`,`like, comment, & subscribe. Hit that bell for notifications...`,
         `aloe`,`antiseptic`,`apple`,`AHHH`,
         `bondfire`,`burntness`,`butter toast`,`banana`,
         `comfort`,`coldness`,`coffee`,`citrus`,`caramel`,`cat`,
         `dog`,
         `egg`,`earth`,
         `fire`,`flowers`,`fish`,`furry drama`,`furry website`,`furries`,
         `gaming`,`game`,`gamer`,
         `horseradish`,`heaviness`,`heat`,`heaven`,
         `ice`,`impureness`,
         `jollyness`,
         `kale`,`ketchup`,`kobold`,
         `loading`,`lavender`,
         `mustard`,`musk`,`mint`,
         `nugget`,`newness`,
         `oldness`,`onions`,`oranges`,
         `paw`,`pureness`,`popufur`,
         `questing`,
         `roses`,`raccoon`,`rain`,`rubber`,
         `strawberries`,`suishi`,`smells`,`streaming`,`sour apple`,
         `tea`,`tiger`,`twitter dot com`,`twitch dot com`,`tycoon`,
         `uranium`,
         `volcano`,`vtuber`,`vanilla`,
         `water`,`warmness`,`water`,`wood`,`wealth`,`watermelon`,
         `X-mas`,
         `yellow`,
         `zinc`];

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function sniff(user) {
  if (user == "") return "/me sniffs nearby... smells of " + choose(smell);      
         
  return "/me sniffs " + user + "... smells of " + choose(smell);
}
sniff(arg);
