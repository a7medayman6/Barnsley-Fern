let x = 0, y = 0;

function nextPoint()
{
  	let p = Math.random() * (1) + 0;
  	let a = 0.01;
  	let b = 0.86;
  	let c = 0.93;
  	//let a = Math.random() * (1) + 0;
   	//let b = Math.random() * (1) + 0;
   	//let c = Math.random() * (1) + 0;
    if(p < a)
    {
        nextX = 0;
        nextY = 0.16 * y; 
    }
    else if(p < b)
    {
        nextX =   0.85 * x + 0.04 * y;
        nextY =  -0.04 * x + 0.85 * y + 1.6;
    }
    else if(p < c)
    {
        nextX =   0.2  * x - 0.26 * y;
        nextY =   0.23 * x + 0.22 * y + 1.6;
    }
    else 
    {
        nextX =  -0.15 * x + 0.28 * y;
        nextY =   0.26 * x + 0.24 * y + 0.44;
    }
    x = nextX;
    y = nextY;
}


function setup() 
{
  createCanvas(1190, 665);
  background(0);
}

function draw() 
{
    for(let i = 0; i < 100; i++)
    {
    	let px = map(x, -2.182, 2.6558, 0, width);
	    let py = map(y, 0, 9.9983, height, 0);

	
	    stroke(px-200, px-py - 280, py);
	    //stroke(0, 255, 0);
	    strokeWeight(3);
	    point(px, py);
	    nextPoint(); 
	    //rotate(PI/7); 
    	
    }
    
    
}