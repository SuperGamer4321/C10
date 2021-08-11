var weight = [10,27,34,14]

function average(){
 var sum = weight[0]+weight[1]+weight[2]+weight[3];
var avg = sum/weight.length
console.log(avg)
}

function setup() 
{
  average()
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

