'use strict';
var canvas;
var context;
var loadCount = 0;
var loadMax = 0;
var tileSize = 16;

var tileRows = 32;
var tileCols = 32;
var tileMap;

canvas = document.getElementById('canvas');
canvas.width = tileSize * tileCols;
canvas.height = tileSize * tileRows;
context = canvas.getContext('2d');


//load tile map pieces
tileMap = makeTileMap();

tileMap.loadTileAsset('blf', 'images/bl_floor.png');
loadMax++;
tileMap.loadTileAsset('blw', 'images/bl_wall.png');
loadMax++;
tileMap.loadTileAsset('bd', 'images/bottom_door.png');
loadMax++;
tileMap.loadTileAsset('bf', 'images/bottom_floor.png');
loadMax++;
tileMap.loadTileAsset('brf', 'images/br_floor.png');
loadMax++;
tileMap.loadTileAsset('brw', 'images/br_wall.png');
loadMax++;
tileMap.loadTileAsset('f', 'images/floor.png');
loadMax++;
tileMap.loadTileAsset('ld', 'images/left_door.png');
loadMax++;
tileMap.loadTileAsset('lf', 'images/left_floor.png');
loadMax++;
tileMap.loadTileAsset('lw', 'images/left_wall.png');
loadMax++;
tileMap.loadTileAsset('tw', 'images/reg_wall.png');
loadMax++;
tileMap.loadTileAsset('rd', 'images/right_door.png');
loadMax++;
tileMap.loadTileAsset('rf', 'images/right_floor.png');
loadMax++;
tileMap.loadTileAsset('rw', 'images/Right_wall.png');
loadMax++;
tileMap.loadTileAsset('tlw', 'images/tl_corner.png');
loadMax++;
tileMap.loadTileAsset('tlf', 'images/tl_floor.png');
loadMax++;
tileMap.loadTileAsset('td', 'images/top_door.png');
loadMax++;
tileMap.loadTileAsset('tf', 'images/top_floor.png');
loadMax++;
tileMap.loadTileAsset('trw', 'images/tr_corner.png');
loadMax++;
tileMap.loadTileAsset('trf', 'images/tr_floor.png');
loadMax++;
//wall deco
tileMap.loadTileAsset('rbanner', 'images/red_banner.png');
loadMax++;
tileMap.loadTileAsset('bbanner', 'images/blue_banner.png');
loadMax++;
tileMap.loadTileAsset('gbanner', 'images/green_banner.png');
loadMax++;
tileMap.loadTileAsset('pbanner', 'images/pink_banner.png');
loadMax++;
//water
tileMap.loadTileAsset('bWater', 'images/water/b_water.png');
loadMax++;
tileMap.loadTileAsset('blWater', 'images/water/bl_water.png');
loadMax++;
tileMap.loadTileAsset('brWater', 'images/water/br_water.png');
loadMax++;
tileMap.loadTileAsset('lWater', 'images/water/l_water.png');
loadMax++;
tileMap.loadTileAsset('rWater', 'images/water/r_water.png');
loadMax++;
tileMap.loadTileAsset('tWater', 'images/water/t_water.png');
loadMax++;
tileMap.loadTileAsset('tlWater', 'images/water/tl_water.png');
loadMax++;
tileMap.loadTileAsset('trWater', 'images/water/tr_water.png');
loadMax++;
tileMap.loadTileAsset('turnBlWater', 'images/water/turn_bl_water.png');
loadMax++;
tileMap.loadTileAsset('turnBrWater', 'images/water/turn_br_water.png');
loadMax++;
tileMap.loadTileAsset('turnTlWater', 'images/water/turn_tl_water.png');
loadMax++;
tileMap.loadTileAsset('turnTrWater', 'images/water/turn_tr_water.png');
loadMax++;
tileMap.loadTileAsset('water', 'images/water/water.png');
loadMax++;



function loadHandler() {
    if (++loadCount >= loadMax) {
        tileMap.createBasicMap();
        tileMap.createDecorationMap(); 
        render();

    }
}
function render() {
    tileMap.draw(context);

    
    requestAnimationFrame(render);
}