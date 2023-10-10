// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000a0001010101010101010101010101010101010101010202020204020202020203030303040303030303030303030403030303030303030304030303030303030303040303030303030503030403030303030303030304030303030303030303030303030303`, img`
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 . 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 
2 . . . . 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile2,sprites.builtin.oceanSand0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010404040404020404040404040402040403030303030203030303020303020303030303030302030303030203030303030303030303020303030302030303030303030303030203030303030303030303030303030302030303030303030303030303030303030303030303030303030303030303030303030302020303030302030202030303030303030303030303030302030303030303030303030303020303020303030303030303030303030303030203030303030303020303030303030302020202030303030203030303030303030303030303030303030303030305`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 . 2 2 2 2 . . . . 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . . . . . . 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
2 2 2 2 . . 2 2 2 2 . 2 2 2 2 . 
2 2 2 . . 2 2 2 2 . . 2 2 2 2 . 
2 . . . 2 2 2 2 2 . 2 2 2 2 2 . 
2 . 2 2 2 2 2 2 2 . 2 . . . . . 
2 . 2 2 2 2 2 2 2 . 2 . 2 2 2 2 
2 . 2 2 2 2 2 2 2 . 2 . . . . . 
2 . . . . . . . . . 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.builtin.oceanSand4], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010701010101010505050505050505050502050505050504040404040404040404020404030404040404040204040404040404040204040402040404040404040404040404040404020404040404040404020404040404040404040204040404040604040404040404040406040404040404040404020404040404040402040404040204020404040404040404040404040404040404040404040404040404040404020402040404040404040202040404040604060404040404040404040404040404040404040404040404040404040404040404040402020404040404040404040404040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 
2 . . . . . . . . . . 2 2 . 2 2 
2 . 2 2 . 2 2 2 2 2 . 2 2 . 2 2 
2 . 2 2 . 2 2 2 2 2 . 2 2 . 2 2 
2 . 2 2 . 2 2 2 2 2 . 2 2 . . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 . 2 . 2 2 
2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 2 
2 . . . . . . 2 2 2 2 . 2 . 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.dungeon.hazardLava0,myTiles.tile6], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010303030303030302030303030303030306060606060606060606060606060506060606060606060606060606060606060606060606060606060604040404040606060606060606060606040404040406060606060606060606060404040404060606060606060606060604040404040606060606060606060606040404040406060606060606060206060606060606060606060606060602060606060606060606060606060606040606060606060606060606060606060606060606060606060606060606060602060606060606060606060606060606060606060606060606`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 . . . 2 
2 . . . . . . . 2 . . . . 2 2 2 
2 . 2 . 2 . 2 . 2 . . . . . . 2 
2 2 2 . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . 2 2 . 2 . 2 . . . . . . 2 
2 . 2 . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . 2 2 . 2 . 2 . . . . . . 2 
2 . . . 2 . 2 . 2 2 2 2 2 2 . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath2,sprites.dungeon.hazardLava0,myTiles.tile5,sprites.castle.tilePath5,myTiles.tile7], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040404040404040404040404040404040101010101010101010101010102010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . 2 2 . 2 . . . . . . 2 . 2 2 
2 . . 2 . . . 2 . 2 . 2 2 . 2 2 
2 2 . . . 2 2 . . . . . . . 2 2 
2 2 . 2 . . . 2 . . 2 . 2 . 2 2 
2 . . 2 . 2 . . . . . . 2 . 2 2 
2 . 2 . . . . . 2 2 2 . . . . 2 
2 . 2 . . . 2 . . . . . . 2 . 2 
2 . . . 2 . 2 . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . 2 . 2 2 
2 . . . . 2 2 . 2 . . . . . . 2 
2 2 2 . . . . . . . 2 . 2 . 2 2 
2 . . . 2 2 . . 2 . . . 2 . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile4,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
