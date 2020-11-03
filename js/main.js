'use strict';
var canvas;
var context;
var loadCount = 0;
var loadMax = 0;
var tileSize = 16;

var miniMapShow = false;

var tileRows = 32;
var tileCols = 32;
var tileMap;


var BigMap = makeBigMap();
BigMap.createBigMap();


var player = makePlayer();

canvas = document.getElementById('canvas');
canvas.width = tileSize * tileCols;
canvas.height = tileSize * tileRows;
context = canvas.getContext('2d');



//load tile map pieces

tileMap = makeTileMap('normal');
for (var i = 0; i < BigMap.mapRows; i++) {
  for (var j = 0; j < BigMap.mapCols; j++) {
    if (BigMap.rooms[i][j] instanceof Object) {

      BigMap.rooms[i][j].loadTileAsset('blf', 'images/bl_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('blw', 'images/bl_wall.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('bd', 'images/bottom_door.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('bf', 'images/bottom_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('brf', 'images/br_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('brw', 'images/br_wall.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('f', 'images/floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('ld', 'images/left_door.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('lf', 'images/left_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('lw', 'images/left_wall.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tw', 'images/reg_wall.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('rd', 'images/right_door.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('rf', 'images/right_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('rw', 'images/Right_wall.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tlw', 'images/tl_corner.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tlf', 'images/tl_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('td', 'images/top_door.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tf', 'images/top_floor.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('trw', 'images/tr_corner.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('trf', 'images/tr_floor.png');
      loadMax++;
      //wall deco
      BigMap.rooms[i][j].loadTileAsset('rbanner', 'images/red_banner.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('bbanner', 'images/blue_banner.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('gbanner', 'images/green_banner.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('pbanner', 'images/pink_banner.png');
      loadMax++;
      //water
      BigMap.rooms[i][j].loadTileAsset('bWater', 'images/water/b_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('blWater', 'images/water/bl_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('brWater', 'images/water/br_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('lWater', 'images/water/l_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('rWater', 'images/water/r_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tWater', 'images/water/t_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('tlWater', 'images/water/tl_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('trWater', 'images/water/tr_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('turnBlWater', 'images/water/turn_bl_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('turnBrWater', 'images/water/turn_br_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('turnTlWater', 'images/water/turn_tl_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('turnTrWater', 'images/water/turn_tr_water.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('water', 'images/water/water.png');
      loadMax++;

      //floor deco
      BigMap.rooms[i][j].loadTileAsset('barrel', 'images/barrel.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('plateTable', 'images/plate_table.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('scrollTable', 'images/scroll_table.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('table', 'images/table.png');
      loadMax++;
      BigMap.rooms[i][j].loadTileAsset('waterBarrel', 'images/water_barrel.png');
      loadMax++;
    }

  }
}
//player
player.playerImage.addEventListener('load', loadHandler);
loadMax++;
player.playerImage.src = "images/player/player1.png";



function addListeners() {
  window.addEventListener("keyup", keyUpHandler);
  window.addEventListener("keydown", keyDownHandler)

  render();
}

function keyDownHandler(event) {
  if (event.keyCode == player.lKey) {
    player.isLeft = true;
  }
  if (event.keyCode == player.rKey) {
    player.isRight = true;
  }
  if (event.keyCode == player.fKey) {
    player.isForward = true;
  }
  if (event.keyCode == player.bKey) {
    player.isBackwards = true;
  }
  if (event.keyCode == 32) {
    miniMapShow = true
  }
}

function keyUpHandler(event) {
  if (event.keyCode == player.lKey) {
    player.isLeft = false;
  }
  if (event.keyCode == player.rKey) {
    player.isRight = false;
  }
  if (event.keyCode == player.fKey) {
    player.isForward = false;
  }
  if (event.keyCode == player.bKey) {
    player.isBackwards = false;
  }
  if (event.keyCode == 32) {
    miniMapShow = false
  }
}

function loadHandler() {
  if (++loadCount >= loadMax) {


    for (var i = 0; i < BigMap.mapRows - 1; i++) {
      for (var j = 0; j < BigMap.mapCols - 1; j++) {
        if (BigMap.rooms[i][j] instanceof Object) {
          BigMap.rooms[i][j].createBasicMap();
          BigMap.rooms[i][j].createDecorationMap();
        }
      }
    }

    // BigMap.rooms[i][j].createBasicMap();
    // BigMap.rooms[i][j].createDecorationMap(); 
    addListeners();


  }
}


function render() {

  player.updatePos();
  player.changeRoom(canvas);
  canvas.width = BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols * tileSize;
  canvas.height = BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileRows * tileSize;
  BigMap.rooms[BigMap.currentRow][BigMap.currentCol].createBasicMap();

  BigMap.rooms[BigMap.currentRow][BigMap.currentCol].draw(context);
  player.draw(context);
  BigMap.CheckBeenAndSeen();
  if (miniMapShow) {
    BigMap.MiniMap(context);
  }
  requestAnimationFrame(render);
}