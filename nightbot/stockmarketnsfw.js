stockNames = [`NSFW`,`MAW`,`PAW`,`BEANS`,`FLUFF`,`FLOOF`,`TAIL`,`PP`,`HORN`,`YOU`,`Your personal stock friend`,`VIDGAM`,`WEREWULF`,`WATER`,`DIGI`,`PLANTI`,`PURE`];
wordChanges = [`slightly`,`very much`,`kinda`,`somewhat`,`...in a vauge way...`,`largely`,`sort of`];
size = [`LARGE!`,`greatly, making you big and round!`,`beyond compare!`,`ˢᵐᵒˡ`,`normally?`,`normally.`,`to an undefinded amount.`,`very purely!`,`very impurely`,`...can't connect to network. Another bot beat you to the servers. Please ask again later`,
        `like it normally would under captialism`,`LIKE IT WOULD IN SOCIALISM???`,`in an NFT sort of way...`, `in a doge coin sort of way...`,`deinflated-ly!`, `inflated-ly!`];
whyCapBad = [`Under Capitalism, you can never have a future where people don't need to work useless jobs. Thus, the majority of people can never relax. Why do we put up with such an terrible economy when other types of economies exist and work?`,
             `With poor distribution and local food production, over producing food on farms can lead to destroying food to keep market prices up or avoiding high distribution costs. This problem becomes worse during pandemic, where more people are starving https://www.nytimes.com/2020/04/11/business/coronavirus-destroying-food.html`,
          `Money is actually just paper we say has value. It's hard to carry around paper though, so one day we'll probably just have points in an account to spend. Like in a videogame!!!`,
          `There are more vaccant homes than houseless people https://www.self.inc/info/empty-homes/ There are many ways to end houselessness, the easiest way is to give people a house, such as what Findland did along with other tactics https://www.huffpost.com/entry/homelessness-finland-housing-first_n_5c503844e4b0f43e410ad8b6`,
          `Wealth Inequality in the USA between the rich and everyone else is massive. Such hoarding of wealth by the few restricts how much money is useable by everyone https://en.wikipedia.org/wiki/Wealth_inequality_in_the_United_States`,
          `We can transport goods in less than 2 days via mail, shoot robots through space to land on a moving planet in speeding through a vast void, and in 2018 around 11.1% of USA households were food insecure! https://en.wikipedia.org/wiki/Hunger_in_the_United_States`,
          `In 2019, a videogame company's CEO made $40 million dollars as some employees couldn't afford food https://www.businessinsider.com/activision-blizzard-salary-disparity-issues-2020-8`,
          `Around the world some people starve... BUT WE CAN PRODUCE GOLDEN DONUTS!!! Worth it? https://spoonuniversity.com/how-to/where-to-get-cheese-in-edinburgh`,
          `Here in the USA there are around 100,000 people who die due to not receiving needed healthcare https://en.wikipedia.org/wiki/Health_insurance_coverage_in_the_United_States`
         ];

options = {
    capbad:8,
    bull:50,
    bear:30,
    stag:12,
};

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function findMarket(input) {
    arr = [];
    for(options in input) {
        if ( input.hasOwnProperty(options) ) {
            for( i=0; i<input[options]; i++ ) {
                arr.push(options);
            }
        }
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function capitalismBad(){
  message = "You're outside the stock market. An anti-capitalist next to you whispers, \"";
  message += choose(whyCapBad);
  message += "\"";
          
  return message; 
}

function bullMarket(user){
  message = "/me connects to Fur Street. Loading ▨▨▨▨▨▨▨▨▨▨ - Loaded: " + user + " is in a Bull Market! ";
  message += choose(stockNames);
  message += " have inflated ";
  message += choose(wordChanges);
  message += "! Your portfolio has grown ";
  message += choose(size);
          
          
  return message; 
}

function bearMarket(user){
  message = "/me connects to Fur Street. Loading ▨▨▨▨▨▨▨▨▨▨ - Loaded: " + user + " is in a Bear Market! ";
  message += choose(stockNames);
  message += " have deflated ";
  message += choose(wordChanges);
  message += "... Your portfolio has shrunk ";
  message += choose(size);
          
  return message; 
}

function stagMarket(user){
  message = "/me connects to Fur Street. Loading ▨▨▨▨▨▨▨▨▨▨ - Loaded: " + user + " is in a Stagnated Market! ";
  message += choose(stockNames);
  message += " stayed the same ";
  message += choose(wordChanges);
  message += ". Your portfolio still stands ";
  message += choose(size);     
          
  return message; 
}


function stockmarket(user){
      
  outcome = findMarket(options);        

  if(outcome == "bull"){
         tem = bullMarket(user);
         return tem;
  }    
  if(outcome == "bear"){
         tem = bearMarket(user);
         return tem;
  }    
  if(outcome == "stag"){
         tem = stagMarket(user);
         return tem;
  }    
  if(outcome == "capbad"){
         tem = capitalismBad();
         return tem;
  }    
}
   
stockmarket(arg);
