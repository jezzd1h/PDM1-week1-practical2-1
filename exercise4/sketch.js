function setup()
{
    background(48,213,20)
    createCanvas(300,300)
}

function draw()
{
    noStroke()
    fill(110,255,50)
    rectMode(CENTER)
    //greens
    rect(150,150,100,300)
    rect(150,150,300,100)
    //whites 
    fill(255,255,255,90)
    rect(150,150,100,300)
    rect(150,150,300,100)
    //outer whites
    fill(255,255,255,60)
    rect(95,90,10,300)
    rect(205,90,10,300)
    rect(150,95,300,10)
    rect(150,205,300,10)
    //inner whites 
    //outer whites
    fill(255,255,255,60)
    rect(105,90,10,500)
    rect(195,0,10,800)
    rect(0,105,800,10)
    rect(0,195,800,10)

    rect(0,150,10,80)
    rect(0,200,10,80)


    

}