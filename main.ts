let mySprite = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`Genbrugsplads`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(375, 300)
