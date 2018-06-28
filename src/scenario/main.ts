import GameEngine from "../engine/GameEngine";
import Location from "../engine/Location";
import door from './img/halway';
import mountain from './img/mountain';
import path from './img/path';
import {lostWoodsSection} from './sections/thelostwoods';

// ascii art taken from https://www.asciiart.eu/

// import image from './img/monster';


// all your bases belong to us
// the princess is in another castle
// tri force of java

const gameEngine = new GameEngine();

const l2 = new Location()
    .setId("An old abandoned door")
    .setImg(door)
    .setDesc('The door is locked. The door is made out of metal. ' +
        'There is a broken key in the key hole. The door is welded shut. ' +
        'A wizard stands in your way and tells you "YOU SHALL NOT PASS". ' +
        'You see a path back. God himself recommends you to go back.');

const hungry = new Location()
    .setId("A Cabin in the woods")
    .setImg(mountain)
    .setDesc("Something is coming. Something hungry for blood. A shadow grows");


const l1 = new Location()
    .setId("A new beginning")
    .setDesc("You see a path north and a path to the lost woods")
    .setImg(path)
    .link("north", l2)
    .link("hungry", hungry);

const lostWoods = lostWoodsSection(l1);

l1.link("wood", lostWoods)
    .link("woods", lostWoods)
    .link("to the woods", lostWoods)
    .link("to the lost woods", lostWoods)
    .link("the lost woods", lostWoods)
    .link("to the lost woods", lostWoods)
    .link("to lost woods", lostWoods)
    .link("lost woods", lostWoods)
    .link("forest", lostWoods);


lostWoods.link("back", l1);
lostWoods.link("main", l1);
lostWoods.link("main road", l1);
lostWoods.link("the main road", l1);
lostWoods.link("to the main road", l1);

l2.link("back", l1);

gameEngine.setStartLocation(l1);


export default gameEngine
