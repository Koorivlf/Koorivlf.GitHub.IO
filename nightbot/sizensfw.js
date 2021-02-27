size = ["micro","macro","general human height","tiny","lorgest","biggest","ˢᵐᵒˡ"];
sizeSize =["12ft","11ft","10ft","9ft","8ft","7ft","6ft","5ft","4ft","3ft","2ft","1ft","smol as a rat","ˢᵐᵒˡ as a rat","big as a donut"];
parts = ["general size","paw","maw","tail","height","wallet","food","shirt","pants","shoes","hair","height","computer","phone", "ween","peen", "balls","underwear"];

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function mm(user) {
    var tempNum = 5;
  
   if (user == "") {
      return "/me changes the size of the world to the " + choose(size) + " size!!!";  
   }
         
   if(Math.floor(Math.random()*tempNum) % tempNum != 0){
     return "/me changes " + user + "'s " + choose(parts) + " to become " + choose(size);
  } else {
    return "/me changes " + user + "'s " + choose(parts) + " to become the " + choose(sizeSize) + " size";
  }
}
mm(arg);
