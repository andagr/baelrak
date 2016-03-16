import PIXI from 'pixi.js'

let ratio = 16/9;
let height = Math.min($(global).height() * 0.8, $(global).width() / ratio);
let width = height * ratio;
let renderer = PIXI.autoDetectRenderer(width, height);
$('#game-area').append(renderer.view);
let stage = new PIXI.Container();
let bunny;
PIXI.loader.add('bunny', '/img/bunny.png').load((loader, resources) =>{
    bunny = new PIXI.Sprite(resources.bunny.texture);
    bunny.position.x = width / 2;
    bunny.position.y = height / 2;
    bunny.scale.x = 2;
    bunny.scale.y = 2;
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    stage.addChild(bunny);
    animate();
});
function animate() {
    requestAnimationFrame(animate);
    bunny.rotation += 0.01;
    renderer.render(stage);
}
