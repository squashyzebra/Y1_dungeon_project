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
        if (this.x + tileSize / 2 > BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols * tileSize - tileSize) {
            this.x = BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols * tileSize - tileSize - tileSize / 2;
        }
        //top wall
        if (this.y - tileSize / 2 < tileSize) {
            this.y = tileSize + tileSize / 2;
        }
        //bottom wall
        if (this.y + tileSize / 2 > BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols * tileSize - tileSize) {
            this.y = BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols * tileSize - tileSize - tileSize / 2;
        }
        //obstacles
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'table' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'scrollTable' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'plateTable' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'barrel' ||
            BigMap.rooms[BigMap.currentRow][BigMap.currentCol].deco[(((Math.floor(player.y / tileSize)) * tileCols) + (Math.floor(player.x / tileSize)))] == 'waterBarrel') {
            if (this.isRight) {
                this.x -= 2;
            }
            if (this.isLeft) {
                this.x += 2;
            }
            if (this.isForward) {

                this.y += 2;
            }
            if (this.isBackwards) {
                this.y -= 2;
            }

        }






    }
    player.changeRoom = function (cvs) {



        //for normal room

        //top door
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].map[(((Math.floor((player.y - 9) / tileSize)) * BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols) + + (Math.floor(player.x / tileSize)))] == 'td' && player.y > tileSize) {
            
            if (BigMap.rooms[ BigMap.currentRow - 1][BigMap.currentCols] == 'br corner') {
                BigMap.currentRow -= 1;
                BigMap.currentCol -= 1;
                player.y = cvs.height - 30;
                player.x = cvs.width * (2 / 3);
            } else if (BigMap.rooms[BigMap.currentRow - 1][BigMap.currentCols].type == "2x2") {
                BigMap.currentRow -= 1;
                player.y = cvs.height - 30;
                player.x = cvs.width * (1 / 3);
            } else {
                BigMap.currentRow -= 1;
                player.y = cvs.height - 30;
            }
        } else if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].map[(((Math.floor((player.y + 9) / tileSize)) * BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols) + (Math.floor(player.x / tileSize)))] == 'td') {
            //bottom door
            if (BigMap.rooms[BigMap.currentRow + 1][BigMap.currentCols] == 'tl corner') {
                BigMap.currentRow += 2;
                player.y = 30;
                player.x = cvs.width * (1 / 3);
            }else if (BigMap.rooms[BigMap.currentRow + 1][BigMap.currentCols] == 'tr corner') {
                BigMap.currentRow += 2;
                BigMap.currentCol -= 1;
                player.y = 30;
                player.x = cvs.width * (2 / 3);
            }else{
            BigMap.currentRow += 1;
            player.y = 30;
            }
        }
        //right door
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].map[(((Math.floor(player.y / tileSize)) * BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols) + (Math.floor((player.x + 9) / tileSize)))] == 'rd') {
            if (BigMap.rooms[BigMap.currentRow][BigMap.currentCols+1] == 'tl corner') {
                BigMap.currentCol += 1;
                BigMap.currentRow += 1;
                player.x = 30;
                player.y = cvs.height * (1 / 3);
            }else if (BigMap.rooms[BigMap.currentRow][BigMap.currentCols+1].type == "2x2") {
                BigMap.currentCol += 1;
                player.x = 30;
                player.y = cvs.height * (2 / 3);
            }else{
            BigMap.currentCol += 1;
            player.x = 30;
            }
        }
        //left door
        if (BigMap.rooms[BigMap.currentRow][BigMap.currentCol].map[(((Math.floor(player.y / tileSize)) * BigMap.rooms[BigMap.currentRow][BigMap.currentCol].tileCols) + (Math.floor((player.x - 9) / tileSize)))] == 'ld') {
            if (BigMap.rooms[BigMap.currentRow][BigMap.currentCols-1] == 'tr corner') {
                BigMap.currentCol -= 2;
                BigMap.currentRow += 1;
                player.x = cvs.width - 30;
                player.y = cvs.height * (1 / 3);
            }else if (BigMap.rooms[BigMap.currentRow][BigMap.currentCols-1]== 'br corner') {
                BigMap.currentCol -= 2;
                player.x = cvs.width - 30;
                player.y = cvs.height * (2 / 3);
            }else{
            BigMap.currentCol -= 1;
            player.x = cvs.width - 30;
            }
        }

        //for 2x2 room




    }

    player.draw = function (ctx) {

        // posistion so coords are middle of player

        ctx.drawImage(this.playerImage, this.x - tileSize / 2, this.y - tileSize / 2);
    }



    return player;
}