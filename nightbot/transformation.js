ra=[`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`,`poof`,`securely`,'hornily?','huffingly','bedroom eyes-ly'];

tx=[`Airy`,
    `Bouncy`,`BIG`,`Buff`,`Bulky`,
    `Cute`,`Chubby`,`Cozy`,
    `Drowzy`,
    `Earthy`,`Elastic`,
    `Fluffy`,`Firey`,
    `Gooey`,`Glossy`,
    `Horny`,
    `Icy`,
    `Latex`,
    `Metallic`,
    `Nibble`,
    `Rubber`,`Reflective`,
    `Sexy`,`ˢᵐᵒˡ`,`Stone`,`Skinny`,`Soft`,`Scaly`,`Snarling`,`Silky`,`Strong`,
    `THICK`,`Thin`,
    `Pool Toy`,`Pure`,
    `Watery`,`Wholesome`,`Wooden`,
    `Velvety`,
    ,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``];

tf=[`Alligator`,`Alpaca`,
    `Bear`,`Buffalo`,`Badger`,`Bat`,`Bull`,
    `Cat`,`Chicken`,`Cow`,`Crab`,`Crocodile`,`Caribou`,`Camel`,`Capybara`,`Chamelon`,`Cheetah`,`Chipmunk`,`Cougar`,`Coyote`,
    `Deer`,`Dog`,`Donkey`,`Duck`,
    `Egale`,`Echidna`,
    `Fox`,`Falcon`,`Flamingo`,
    `Goat`,`Giraffe`,`Guinea pig`,
    `Horse`,`Hamster`,`Hedgehog`,`Hippopotamus`,`Hyena`,
    `Iguana`,
    `Jaguar`,`Jackal`,
    `Kangaroo`,`Kiwi`,`Koala`,
    `Llama`,`Lion`,`Leopard`,`Lemur`,`Lynx`,`Lizard`,
    `Marten`,`Moose`,`Mouse`,`Mule`,
    `Otter`,`Owl`,`Ocelot`,`Ostrich`,`Ox`,
    `Pig`,`Panda`,`Panther`,`Penguin`,`Pigeon`,`Porcupine`,
    `Raccoon`,`Raven`,`Reindeer`,`Rhinoceros`,
    `Synth`,`Salamander`,`Sheep`,`Sloth`,`Stoat`,
    `Tiger`,`Tanuki`,`Turkey`,
    `Wolf`,`Wolverine`,`Walrus`,`Weasel`,
    `Ox`,
    `Zebra`,
    `Werewolf`,`Basilisk`,`Gryphon`,`Wyvern`,`Kobold`,`Unicorn`,`Chimera`,`Kitsune`,`Dragon`,
    `Ant`,`Bug`,`Butterfly`,`Caterpillar`,`Snail`,`Slug`,`Spider`,
    `Clam`,`Whale`,`Shark`,`Jellyfish`,`Clown Fish`,`Crawdad`,`Dolphin`,`Eel`,`Frog`,`Lobster`,`Manta Ray`,`Octopus`,`Piranha`,`Salmon`,`Stingray`,`Tuna`,
    `Tycoon`];


function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function transformation(user) {
  str = "/me now ";
  str += choose(ra);
  str += "transforms " + user + " into a ";
  str += choose(tx);
  str += choose(tf);
  
  return str;
}
transformation(arg);
