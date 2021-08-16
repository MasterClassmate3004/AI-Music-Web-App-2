HarryPotterSong = "";
PeterPanSong = "";

function preload() 
{
    HarryPotterSong = loadSound("HarryPotter.mp3");
    PeterPanSong = loadSound("PeterPan.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();

}
