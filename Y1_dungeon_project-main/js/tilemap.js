function makeTileMap() {
    var tileMap = {};
    tileMap.assets = {};
    tileMap.map = [];
    tileMap.deco = [];
    tileMap.loadTileAsset = function (assetName, src) {
        this.assets[assetName] = new Image();
        this.assets[assetName].addEventListener('load', loadHandler)
        this.assets[assetName].src = src;
    }
    tileMap.createBasicMap = function () {
        this.map = [
            'tlw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'td', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'trw',
            'lw', 'tlf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'tf', 'trf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'ld', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rd',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'lf', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'rf', 'rw',
            'lw', 'blf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'brf', 'rw',
            'blw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'td', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'tw', 'brw'
        ];

        // for(var i = 0; i < tileCols * tileRows; i++){
        //     if(i == 0){
        //         this.map[i] = 'tlw';
        //     }else if(i == tileCols-1){
        //         this.map[i] = 'trw';
        //     }else if(i = tileCols*tileRows - tileCols){
        //         this.map[i] = 'blw';
        //     }else if(i = tileCols*tileRows - 1){
        //         this.map[i] = 'brw';
        //     }else if(i = tileCols+1){
        //         this.map[i] = 'tlf';
        //     }else if(i = tilecols*2 - 1){
        //         this.map[i] = 'trf';
        //     }else if(i = (tileCols*tileRows) - (tileCols*2) + 1){
        //         this.map[i] = 'blf';
        //     }else if(i =tileCols*tileRows - 2 - tileCols){
        //         this.map[i] = 'brf';
        //     }else if( i > 0 && i < tileCols-1){
        //         this.map[i] = 'tw';
        //     }else if(i > (tileCols*tileRows - tileCols) && i < tileCols*tileRows - 1){
        //         this.map[i] = 'tw';
        //     }else if((i % tileCols) == 0  &&  i > 0 && i < tileCols*tileRows - tileCols){
        //         this.map[i] = 'lw';
        //     }else if((i % tileCols-1) == 0  &&  i > tileCols-1 && i < tileCols*tileRows - 1){
        //         this.map[i] = 'rw';
        //     }else if(i > tileCols+1 && i < tilecols*2 - 1){
        //         this.map[i] = 'tf';
        //     }else if(i > (tileCols*tileRows) - (tileCols*2) + 1  && i < tileCols*tileRows - 2 - tileCols){
        //         this.map[i] = 'bf';
        //     }else if(i % tileCols+1 == 0 && i > tileCols+1 && i < (tileCols*tileRows) - (tileCols*2) + 1){
        //         this.map[i] = 'lf';
        //     }else if(i % tileCols-2 == 0 && i > tilecols*2 - 1 && i < tileCols*tileRows - 2 - tileCols){
        //         this.map[i] = 'rf';
        //     }else{
        //         this.map[i] = 'f';
        //     }
        // }
      


    }

    tileMap.createDecorationMap = function () {
        for (var i = 1; i < tileCols - 1; i++) {
            var rand = Math.random();
            if (this.map[i] != 'td') {
                if (rand < 1 / tileCols) {
                    this.deco[i] = 'rbanner';
                } else if (rand >= 1 / tileCols && rand < 2 / tileCols) {
                    this.deco[i] = 'bbanner';
                } else if (rand >= 2 / tileCols && rand < 3 / tileCols) {
                    this.deco[i] = 'gbanner';
                } else if (rand >= 3 / tileCols && rand < 4 / tileCols) {
                    this.deco[i] = 'pbanner';
                } else {
                    this.deco[i] = null;
                }
            }
        }
        // add water
        for (var i = 2; i < tileRows - 2; i++) {
            for (var j = 2; j < tileCols - 2; j++) {
                var rand = Math.random();
                if (rand < 1/ (tileCols * tileCols) ) {
                    this.deco[(tileCols*i)+j] = 'water';
                    var waterRand = Math.random();
                    var waterLocation = (tileCols*i)+j;
                    while(waterRand < 0.9){
                        var randDirection = Math.random();
                        if(randDirection <= 1/4){
                            //water above
                            if(this.map[(waterLocation)-tileCols] == 'f'){
                                this.deco[(waterLocation)-tileCols] = 'water';
                                waterLocation -= tileCols;
                            }
                        }else if(randDirection <= 2/4 && randDirection >1/4){
                            //water below
                            if(this.map[(waterLocation)+tileCols] == 'f'){
                                this.deco[(waterLocation)+tileCols] = 'water';
                                waterLocation += tileCols;
                            }
                        }else if(randDirection <= 3/4 && randDirection >2/4){
                            //water left
                            if(this.map[(waterLocation)-1] == 'f'){
                                this.deco[(waterLocation)-1] = 'water';
                                waterLocation -= 1;
                            }
                        }else if(randDirection <= 4/4 && randDirection >3/4){
                            //water right
                            if(this.map[(waterLocation)+1] == 'f'){
                                this.deco[(waterLocation)+1] = 'water';
                                waterLocation += 1;
                            }
                        }
                        waterRand = Math.random();
                    }
                }
            }
        }

        // finsih water
        var temp = 0;
        while(temp <= 1){
        for (var i = 1; i < tileRows - 1; i++) {
            for (var j = 1; j < tileCols - 1; j++) {
                var location = (tileCols*i)+j;
                //test in order: top,bottom,left,right, top left, top right, bottom left, bottom right

                if((this.deco[location] == 'water') || ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water'))){
                   //xxx
                   //xXx
                   //xxx

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xox
                    //xXx
                    //xxx
                    this.deco[location] = 'bWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //xXo
                    //xxx
                    this.deco[location] = 'lWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //xXx
                    //xox
                    this.deco[location] = 'tWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //oXx
                    //xxx
                    this.deco[location] = 'rWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] == 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //oxx
                    //xxx
                    //xxx
                    this.deco[location] = 'brWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] == 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxo
                    //xxx
                    //xxx
                    this.deco[location] = 'blWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] == 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //xxx
                    //oxx
                    this.deco[location] = 'trWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] == 'water')){
                    //xxx
                    //xxx
                    //xxo
                    this.deco[location] = 'tlWater';

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] == 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //oox
                    //xxx
                    //xxx
                    this.deco[location] = 'bWater';

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] == 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xoo
                    //xxx
                    //xxx
                    this.deco[location] = 'bWater';

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] == 'water')&&(this.deco[location-tileCols+1] == 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //ooo
                    //xxx
                    //xxx
                    this.deco[location] = 'bWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] == 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //xxx
                    //oox
                    this.deco[location] = 'tWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] == 'water')){
                    //xxx
                    //xxx
                    //xoo
                    this.deco[location] = 'tWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] == 'water')&&(this.deco[location+tileCols+1] == 'water')){
                    //xxx
                    //xxx
                    //ooo
                    this.deco[location] = 'tWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] == 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //oxx
                    //oxx
                    //xxx
                    this.deco[location] = 'rWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] == 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] == 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //oxx
                    //oxx
                    //oxx
                    this.deco[location] = 'rWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] == 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxx
                    //oxx
                    //oxx
                    this.deco[location] = 'rWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] == 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] != 'water')){
                    //xxo
                    //xxo
                    //xxx
                    this.deco[location] = 'lWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] != 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] == 'water')){
                    //xxx
                    //xxo
                    //xxo
                    this.deco[location] = 'lWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')&&
                (this.deco[location-tileCols-1] != 'water')&&(this.deco[location-tileCols+1] == 'water')&&(this.deco[location+tileCols-1] != 'water')&&(this.deco[location+tileCols+1] == 'water')){
                    //xxo
                    //xxo
                    //xxo
                    this.deco[location] = 'lWater';

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')){
                    //xox
                    //oxx
                    //xxx
                    this.deco[location] = 'turnBrWater';

                }else if ((this.deco[location-tileCols] == 'water')&&(this.deco[location+tileCols] != 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')){
                    //xox
                    //xxo
                    //xxx
                    this.deco[location] = 'turnBlWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] != 'water')&&(this.deco[location+1] == 'water')){
                    //xxx
                    //xxo
                    //xox
                    this.deco[location] = 'turnTlWater';

                }else if ((this.deco[location-tileCols] != 'water')&&(this.deco[location+tileCols] == 'water')&&(this.deco[location-1] == 'water')&&(this.deco[location+1] != 'water')){
                    //xxx
                    //oxx
                    //xox
                    this.deco[location] = 'turnTrWater';

                }else{
                    this.deco[location] = 'water';
                }

            }
        }
        temp += 1;
    }

        // add obstacles

        for(var i = 2; i < tileRows - 2; i++){
            for (var j = 2; j < tileCols - 2; j++) {
                var location = (tileCols*i)+j;
                var rand = Math.random();
                if(this.deco[location] == null){
                    if(rand < 5/(tileRows*tileCols)){
                        rand = Math.random();
                        if(rand<= 0.2){
                            this.deco[location] = 'barrel';
                        }else if(rand <= 0.4){
                            this.deco[location] = 'waterBarrel';
                        }else if(rand <= 0.6){
                            this.deco[location] = 'table';
                        }else if(rand <= 0.8){
                            this.deco[location] = 'scrollTable';
                        }else{
                            this.deco[location] = 'plateTable';
                        }
                    }
                }
            }
        }



    }


    tileMap.draw = function (ctx) {
        for (var i = 0; i < tileCols * tileRows; i++) {
            var image = this.assets[this.map[i]];
            var xIndex = i % tileCols;
            var yIndex = Math.floor(i / tileCols);
            ctx.drawImage(image, xIndex * tileSize, yIndex * tileSize);
        }
        for (var i = 0; i < tileCols * tileRows; i++) {
            if (this.deco[i] != null) {
                var image = this.assets[this.deco[i]];
                var xIndex = i % tileCols;
                var yIndex = Math.floor(i / tileCols);
                ctx.drawImage(image, xIndex * tileSize, yIndex * tileSize);
            }
        }
    }
    return tileMap;
}

