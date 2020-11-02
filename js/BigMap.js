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
        this.rooms[3][3] = makeTileMap(); // start room
        while (this.numRooms < 9) {
            for (var i = 1; i < this.mapRows - 1; i++) {
                for (var j = 1; j < this.mapCols - 1; j++) {
                    if ((this.rooms[i][j] == '') && ((this.rooms[i - 1][j] != '') || (this.rooms[i + 1][j] != '') || (this.rooms[i][j + 1] != '') || (this.rooms[i][j - 1] != ''))) {
                        var rand = Math.random();
                        if (rand < 0.8) {
                            this.rooms[i][j] = makeTileMap();
                            this.numRooms += 1;

                            if (this.numRooms >= 10) {
                                break
                            }
                        }
                    }


                }

            }

        }

    }
    BigMap.MiniMap = function () {
        for (var i = 1; i < this.mapRows - 1; i++) {
            for (var j = 1; j < this.mapCols - 1; j++) {
                console.log(this.rooms[i][j]);
                console.log("test");
            }
        }
    }
    return BigMap
}