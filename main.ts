scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 15))
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand4, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand0, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    tiles.setCurrentTilemap(tilemap`level4`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . . . f 5 5 f . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . . . 5 f f 5 . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . e e e e e e e e . . . . . . 
    . . e e e e e e e e . . . . . . 
    . . 5 5 e e e e 5 5 . . . . . . 
    . . 5 5 e e e e 5 5 . . . . . . 
    . . . . e e e e . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(15)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 100, 50)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
mySprite.ay = 1000
