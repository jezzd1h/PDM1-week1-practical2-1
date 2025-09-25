function setup()
{
    background(255)
    createCanvas(800,800)
}

function draw()
{
    rectMode(CENTER)

    //headbody
    ellipse(400,400,100,200)
    circle(400,260,80)

    //legs
    ellipse(430,580,50,190)
    ellipse(370,580,50,190)

    //arms
    ellipse(460,415,50,190)
    ellipse(340,415,50,190)

}