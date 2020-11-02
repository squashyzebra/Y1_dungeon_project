function makePlayer() {
    var player = {
        x: (tileCols * tileSize) / 2,
        y: (tileRows * tileSize) / 2,
        speed: 0,
        isForward: false,
        isBackwards: false,
        isLeft: false,
        isRight: false,
        fKey: 87,
        bKey: 83,
        lKey: 65,
        rKey: 68,
        playerImage: new Image
    };


    player.updatePos = function () {
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] != null) {
            this.speed = 1;
        } else {
            this.speed = 2;
        }

        if (this.isForward && !this.isBackwards) {
            this.y -= this.speed;
        } else if (!this.isForward && this.isBackwards) {
            this.y += this.speed;
        }

        if (this.isLeft && !this.isRight) {
            this.x -= this.speed;
        } else if (!this.isLeft && this.isRight) {
            this.x += this.speed;
        }

        //collision
        //left wall
        if (this.x - tileSize / 2 < tileSize) {
            this.x = tileSize + tileSize / 2;
        }
        //right wall
        if (this.x + tileSize / 2 > tileCols * tileSize - tileSize) {
            this.x = tileCols * tileSize - tileSize - tileSize / 2;
        }
        //top wall
        if (this.y - tileSize / 2 < tileSize) {
            this.y = tileSize + tileSize / 2;
        }
        //bottom wall
        if (this.y + tileSize / 2 > tileCols * tileSize - tileSize) {
            this.y = tileCols * tileSize - tileSize - tileSize / 2;
        }
        //obstacles
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'table' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'scrollTable' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'plateTable' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'barrel' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'waterBarrel') {
            if(this.isRight){
                this.x -= 2;
            }
            if(this.isLeft){
                this.x += 2;
            }
            if(this.isForward){
                
                this.y += 2;
            }
            if(this.isBackwards){
                this.y -= 2;
            }
                    
            }






    }

    player.draw = function (ctx) {

        // posistion so coords are middle of player

        ctx.drawImage(this.playerImage, this.x - tileSize / 2, this.y - tileSize / 2);
    }



    return player;
}