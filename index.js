function newImage (path, left_offset, bottom_offset)
{
    let character = document.createElement('img')
    character.src = path;
    character.style.position = 'fixed';
    character.style.left = left_offset;
    character.style.bottom = bottom_offset;
    document.body.append(character)
}

function newItem (item, path, left_offset, bottom_offset)
{
    item.src = path;
    item.style.position = 'fixed';
    item.style.left = left_offset;
    item.style.bottom = bottom_offset;
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    } )
}

console.log("Wid=" + window.innerWidth)
console.log("Hgt=" + window.innerHeight)

let wid = 105 + "px";

newImage('assets/grass.png','0px','0px');
newImage('assets/grass.png','0px',wid);
newImage('assets/grass.png','0px','210px');

let horizonal_tiles = window.innerWidth / 100;
let verticle_tiles = window.innerHeight / 100;
/*
** Tile the grass (bottom half screen)
*/
for (let v = 0; v < verticle_tiles/2; v++)
{
    let height = (v * 100) + "px";
    for (let h = 0; h < horizonal_tiles; h++)
    {
        let wid = (h * 100) + "px";
        newImage('assets/grass.png',wid,height);
    }
}
/*
** Tile the sky (top half screen)
*/
for (let v = verticle_tiles/2; v < verticle_tiles; v++)
{
    let height = (v * 100) + "px";
    for (let h = 0; h < horizonal_tiles; h++)
    {
        let wid = (h * 100) + "px";
        newImage('assets/sky.png',wid,height);
    }
}


newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px'); 


let sword  = document.createElement('img');
let shield = document.createElement('img');
let staff  = document.createElement('img'); 

newItem(sword,  'assets/sword.png',  '500px', '405px');
newItem(shield, 'assets/sheild.png', '165px', '185px');
newItem(staff,  'assets/staff.png',  '600px', '100px');


