function makeBigMap() {
    var BigMap = {
        roomLimit: 10,
        numRooms: 0,
        mapCols: 7,
        mapRows: 7,
        currentRow: 3,
        currentCol: 3,

        rooms: [
            ['', '', '', '', '', '', ''], // buffer on edges
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '']
        ],

    }

    BigMap.createBigMap = function () {
        this.rooms[3][3] = makeTileMap('normal'); // start room
        while (this.numRooms < 9) {
            for (var i = 1; i < this.mapRows - 1; i++) {
                for (var j = 1; j < this.mapCols - 1; j++) {
                    if ((this.rooms[i][j] == '') && ((this.rooms[i - 1][j] instanceof Object) || (this.rooms[i + 1][j] instanceof Object) || (this.rooms[i][j + 1] instanceof Object) || (this.rooms[i][j - 1] instanceof Object))) {
                        var rand = Math.random();
                        if (rand < 0.8) {
                            if((this.rooms[i-1][j] == '') && (this.rooms[i][j+1] == '') && (this.rooms[i-1][j+1] == '') ){

                            if(rand < 0.05){
                                this.rooms[i][j] = makeTileMap('2x2');
                                console.log(this.rooms[i][j])
                                this.rooms[i-1][j] = 'tl corner';
                                this.rooms[i][j+1] = 'br corner';
                                this.rooms[i-1][j+1] = 'tr corner';
                                this.numRooms += 4;
                            }
                            
                        }else{
                            this.rooms[i][j] = makeTileMap('normal');
                            this.numRooms += 1;
                            }
                            if (this.numRooms >= 10) {
                                break
                            }
                        }
                    }


                }

            }

        }

    }
    BigMap.CheckBeenAndSeen = function () {
        this.rooms[this.currentRow][this.currentCol].BeenTo = true;
        if (this.rooms[this.currentRow - 1][this.currentCol] != '') {
            this.rooms[this.currentRow - 1][this.currentCol].Seen = true;
        }
        if (this.rooms[this.currentRow][this.currentCol - 1] != '') {
            this.rooms[this.currentRow][this.currentCol - 1].Seen = true;
        }

        if (this.rooms[this.currentRow + 1][this.currentCol] != '') {
            this.rooms[this.currentRow + 1][this.currentCol].Seen = true;
        }

        if (this.rooms[this.currentRow][this.currentCol + 1] != '') {
            this.rooms[this.currentRow][this.currentCol + 1].Seen = true;
        }


    }


    BigMap.MiniMap = function (ctx) {
        for (var i = 1; i < this.mapRows - 1; i++) {
            for (var j = 1; j < this.mapCols - 1; j++) {
                if (this.currentRow == i && this.currentCol == j) {
                    ctx.fillStyle = 'rgba(255,0,0,0.5';
                    if(this.rooms[i][j].type == 'normal'){
                    ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10)), 10, 10);
                    }else if(this.rooms[i][j].type == '2x2'){
                        ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10))-15, 25, 25);
                    }
                } else if (this.rooms[i][j] != '') {
                    if (this.rooms[i][j].Seen) {
                        ctx.fillStyle = 'rgba(191,191,191,0.5';
                        if(this.rooms[i][j].type == 'normal'){
                            ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10)), 10, 10);
                            }else if(this.rooms[i][j].type == '2x2'){
                                ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10))-15, 25, 25);
                            }
                    }
                    if (this.rooms[i][j].BeenTo) {
                        ctx.fillStyle = 'rgba(128,128,128,0.5';
                        if(this.rooms[i][j].type == 'normal'){
                            ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10)), 10, 10);
                            }else if(this.rooms[i][j].type == '2x2'){
                                ctx.fillRect((415 + (j * 5) + ((j - 1) * 10)), (15 + (i * 5) + ((i - 1) * 10))-15, 25, 25);
                            }
                    }
                } else {

                }
            }
        }

    }



    return BigMap
}

