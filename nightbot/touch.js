amt=[`slightly`,`very`,`kinda`,`somewhat`,`...in a way...`,`largely`,`deeply`,`viscerally`,`firmly`,``,``,``,``];
poke=[`like a musky husky`,`...uh...`,`...Error: Scan could not detect texture`,
      `ashy`,
      `bumpy`,`boiling`,
      `cute`,`cozy`,`cool`,
      `dehydrated`,`dusty`,
      `elastic`,
      `feathery`,`fuzzy`,`fluffy`,`firm`,
      `glossy`,`grooved`,`gooey`,
      `hoarse`,
      `icy`,`impure`,
      `jagged`,
      `knitted`,
      `level`,`leathery`,
      `mosaic`,`moist`,`mushy`,
      `nice`,
      `orderly`,
      `polished`,`pure`,
      `quiet`,
      `refinded`,
      `scaled`,`silky`,`slippery`,`smooth`,`squeaky`,`sensitive`,`prickly`,`soggy`,
      `thorny`,
      `uncompormising`,
      `varnished`,`velvety`,
      `wavy`,`wooly`,
      `yielding`,
      `zigg-zaggy`];


function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function touch(user) {
  return "/me scans " + user + "... feels " + choose(amt) + " " + choose(poke);
}
touch(arg);
