var canvas = new fabric.Canvas("myCanvas");
var block_w = 30;
var block_h = 30;

var player_x = 10;
var player_y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_w);
        block_image_object.scaleToHeight(block_h);
        block_image_object.set({
            top:player_y,
            top:player_x
        });
        canvas.add(block_image_object);
    });
}
