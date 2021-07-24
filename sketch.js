// creates variables for  creating sprites .

var level =  0;
var gameState = "play";
var points = 0;
var sub;
var pt1,pt2,pt3,pt4,ptgroup;
var house;
var block1,block2,block3;
var block4,block5,block6;
var block7,block8,block9,block10 ;
var point1 = 0;
var point2 = 0;
var point3 = 0;
var school = 0;
var block11,block12,block13;
var block14,block15,block16;
var block17,block18,block19,block20;

var block21,block22,block23;
var block24,block25,block26;
var block27,block28,block29,block30;
var start;
var block31,block32,block33;
var block34,block35;
var IQ =  0;
var blocks ;
var player ;
var nimbus2000; 
var broomdown,broomleft,broomright;

var q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10 , q11 ;
var  deathlyhallows , scroll ;
var edges , symbols ;
var op1 , op2 , op3  , answers ;
var potion , wand ;
var a1=false
var a2=false
var a3=false
var a4=false
var a5=false
var a6=false
var a7=false
var a8=false
var a9=false
var a10=false
var a11=false

function preload()
{
nimbus2000 = loadImage("nimbusup.png");
broomdown = loadImage("nimbusdown.png");
broomleft = loadImage("nimbusleft.png");
broomright = loadImage("nimbusright.png");
deathlyhallows = loadImage("deathly hallows sign.png");
scroll = loadImage("old ancient scroll.png");
potion = loadImage("potion.png");
wand = loadImage("wand.png");
hg = loadImage("hg.png");
pot = loadImage("pot.png");
gry = loadImage("Gryffindor.png");
sly = loadImage("slytherin.png");
rav = loadImage("Ravenclaw.png");
huf = loadImage("hufflepuff.png");
cont = loadImage("button.png");


}

function setup()
{
createCanvas (1400,600);
// creates sprites .

house = createSprite(650,300,300,300);
house.visible = false;

start = createSprite(650,400,300,300);
start.addImage(pot);
start.visible = false;
start.scale = 0.3;

button = createSprite(750,200,300,300);
button.addImage(cont);
button.visible = false;
button.scale = 0.3;

player = createSprite(150,130,20,20);
player.addImage(broomright);
player.scale =  0.24;
player.setCollider("rectangle",0,0,530,30);

edges = createEdgeSprites();
symbols = createGroup();
answers = createGroup();
ptgroup = createGroup();


op1 = createSprite(400,400,10,10);
op1.addImage(potion);
op1.scale = 0.2;
op2 = createSprite(700,400,10,10);
op2.addImage(potion);
op2.scale = 0.2;
op3 = createSprite(1000,400,10,10);
op3.addImage(potion);
op3.scale = 0.2;

pt1 = createSprite(200,400,10,10);
pt1.addImage(potion);
pt1.scale = 0.2;
pt2 = createSprite(500,400,10,10);
pt2.addImage(potion);
pt2.scale = 0.2;
pt3 = createSprite(800,400,10,10);
pt3.addImage(potion);
pt3.scale = 0.2;
pt4 = createSprite(1100,400,10,10);
pt4.addImage(potion);
pt4.scale = 0.2;

ptgroup.add(pt1);
ptgroup.add(pt2);
ptgroup.add(pt3);
ptgroup.add(pt4);
ptgroup.setVisibleEach(false);

answers.add(op1)
answers.add(op2);
answers.add(op3);
answers.setVisibleEach(false);


q1 = createSprite(700,335,10,10);
q1.addImage(deathlyhallows);
q1.scale = 0.23 ;

q2 = createSprite(150,400,10,10);
q2.addImage(deathlyhallows);
q2.scale = 0.24; 

q3 = createSprite(30,520,10,10);
q3.addImage(deathlyhallows);
q3.scale = 0.24 ;

q4 = createSprite(900,50,10,10);
q4.addImage(deathlyhallows);
q4.scale = 0.24 ;

q5 = createSprite(850,500,10,10);
q5.addImage(deathlyhallows);
q5.scale = 0.24 ;

q6 = createSprite(1195,140,10,10);
q6.addImage(deathlyhallows);
q6.scale = 0.24 ;

q7 = createSprite(1250,450,10,10);
q7.addImage(deathlyhallows);
q7.scale = 0.24 ;

q8 = createSprite(500,260,10,10);
q8.addImage(deathlyhallows);
q8.scale = 0.24 ;

q9 = createSprite(400,50,10,10);
q9.addImage(deathlyhallows);
q9.scale = 0.24 ;

q10 = createSprite(350,520,10,10);
q10.addImage(deathlyhallows);
q10.scale = 0.24 ;

q11 = createSprite(1100,160,10,10);
q11.addImage(deathlyhallows);
q11.scale = 0.24 ;

//player.debug = true;

symbols.add(q1);
symbols.add(q2);
symbols.add(q3);
symbols.add(q4);
symbols.add(q5);
symbols.add(q6);
symbols.add(q7);
symbols.add(q8);
symbols.add(q9);
symbols.add(q10);
symbols.add(q11);

symbols.setVisibleEach(false);

blocks = createGroup();
block1 = createSprite(1100,590,700,10);

block2 = createSprite(100,590,750,10);

block3 = createSprite(1000,520,10,150);

block4 = createSprite(755,450,500,10);

block5 = createSprite(100,500,10,150);

block6 = createSprite(200,450,200,10);

block7 = createSprite(400,390,10,400);

block8 = createSprite(300,350,200,10);

block9 = createSprite(880,300,10,300);

block10 = createSprite(1300,410,200,10);

block11 = createSprite(1200,455,10,100);

block12 = createSprite(1150,500,100,10);

block13 = createSprite(100,400,10,500);

block14 = createSprite(200,250,200,10);

block15 = createSprite(650,380,10,150);

block16 = createSprite(650,300,200,10);

block17 = createSprite(555,250,10,100);

block18 = createSprite(1400,100,500,10);

block19 = createSprite(1155,200,10,200);

block20 = createSprite(1225,200,150,10);

block21 = createSprite(745,250,10,100);

block22 = createSprite(1100,200,100,10);

block23 = createSprite(1050,200,10,150);

block24 = createSprite(1000,130,100,10);

block25 = createSprite(1000,270,100,10);

block26 = createSprite(700,370,100,10);

block27 = createSprite(50,10,900,10);

block28 = createSprite(1400,10,1400,10);

block29 = createSprite(790,495,10,80);

block30 = createSprite(300,50,10,90);

block31 = createSprite(850,50,10,80);

block32 = createSprite(810,85,80,10);

block33 = createSprite(890,85,80,10);

blocks.add(block1);
blocks.add(block2);
blocks.add(block3);
blocks.add(block4);
blocks.add(block5);
blocks.add(block6);
blocks.add(block7);
blocks.add(block8);
blocks.add(block9);
blocks.add(block10);
blocks.add(block11);
blocks.add(block12);
blocks.add(block13);
blocks.add(block14);
blocks.add(block15);
blocks.add(block16);
blocks.add(block17);
blocks.add(block18);
blocks.add(block19);
blocks.add(block20);
blocks.add(block21);
blocks.add(block22);
blocks.add(block23);
blocks.add(block24);
blocks.add(block25);
blocks.add(block26);
blocks.add(block27);
blocks.add(block28);
blocks.add(block29);
blocks.add(block30);
blocks.add(block31);
blocks.add(block32);
blocks.add(block33);

blocks.setColorEach ("#359fe0");
blocks.setVisibleEach(false);

symbols.setColliderEach("rectangle",0,0,200,200);


}

function draw()
{

background(0);


if(level ===-1){
    background(hg);
    player.visible = false ; 
    textSize(30);
    fill("yellow");
    text("PRESS 'SPACE' TO CONTINUE",500,600);
    if(keyDown("space")){
        level = 0
    }
}


if(level === 0 )
{
    player.visible = true ;
    background(0);
    fill("white");
    textSize(20);
    text("Mega Education' " ,300,50);  
    text("By Itkan Ibne Aziz ", 140,100);
    textSize(18);
    text("Silicon Valley challenge 2021",20,250);
    
    text("Learn more",40,380);
    textSize(22);
    fill("yellow");
    text("Press Space to continue", 120,480);
    if(keyDown("Space")){
        
        level = 1;
    }

}

if(gameState === "play")
{
    textSize(15);
    fill(255);
    text("Current IQ : "+IQ,1050,70);

    player.visible = true ;

if(level === 1)
{
    player.velocityX = 0;
    
    blocks.setVisibleEach(true);
    symbols.setVisibleEach(true);
    if(keyDown(UP_ARROW))
    {
        player.y  -= 5 ;
        player.addImage(nimbus2000);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,150,500);
    }
    if(keyDown(DOWN_ARROW))
    {
        player.y  += 5 ;
        player.addImage(broomdown);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,150,500);
    }
    
    if(keyDown(LEFT_ARROW))
    {
        player.x  -= 5 ;
        player.addImage(broomleft);
        player.scale = 0.24
        player.setCollider("rectangle",0,0,500,150);
    }
    
    if(keyDown(RIGHT_ARROW)) 
    {
        player.x  += 5 ;
        player.addImage(broomright);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,500,150);
    }

    if(player.isTouching(q1))
    {
    
   level = 2;

   }
   if(player.isTouching(q2))
    {
    
   level = 3;

   }
   if(player.isTouching(q3))
    {
    
   level = 4;

   }
   if(player.isTouching(q4))
    {
    
   level = 5;

   }
   if(player.isTouching(q5))
    {
    
   level = 6;

   }
   if(player.isTouching(q6))
    {
    
   level = 7;

   }
   if(player.isTouching(q7))
    {
    
   level = 8;

   }
   if(player.isTouching(q8))
    {
    
   level = 9;

   }
   if(player.isTouching(q9))
    {
    
   level = 10;

   }
   if(player.isTouching(q10))
    {
    
   level = 11;

   }
   if(player.isTouching(q11))
   {
    
   level = 12;

   }

   


player.bounce(blocks);
player.collide(edges);

}

if(level === 2)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What Is 159,761 + 60,291 ", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("220051",320,320);
    text("220052",640,320);
    text("220053",950,320);
    if(mousePressedOver(op3)|| mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q1.destroy();
        IQ=IQ+15;
        a1 = true
    }
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q1.destroy();
        IQ = IQ+20;
        a1 = true
    }
}

if(level === 3)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is the 20th element ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Californium",320,320);
    text("Helium",610,320);
    text("Silicon",900,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q2.destroy();
        IQ=IQ+10;
        a2 = true
    }
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q2.destroy();
        IQ=IQ+15;
        a2 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q2.destroy();
        IQ=IQ+20;
        a2 = true
    }
}
if(level === 4)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("___ getting married", 270, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("their",370,320);
    text("there",680,320);
    text("They're",980,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q3.destroy();
        IQ=IQ+10;
        a3 = true
    }
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q3.destroy();
        IQ=IQ+15;
        a3 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q3.destroy();
        IQ = IQ+20;
        a3 = true
    }
}

if(level === 5)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("Where was Napoleon's final battle ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("gettysburg",370,320);
    text("Waterloo",680,320);
    text("nagasaki",980,320);
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q4.destroy();
        IQ=IQ+10;
        a4 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q4.destroy();
        IQ=IQ+15;
        a4 = true
    }
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q4.destroy();
        IQ = IQ+20;
        a4 = true
    }
}

if(level === 6)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text(" What is the first ammedment?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text(" Right to bear arms ",370,320);
    text("no slavery ",680,320);
    text("Freedom of speech ",980,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q5.destroy();
        IQ=IQ+10;
        a5 = true
    }
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q5.destroy();
        IQ=IQ+15;
        a5 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q5.destroy();
        IQ = IQ+20;
        a5 = true
    }
}

if(level === 7)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is Einsteins famous equation ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("e=mc^2 ",370,320);
    text("y=mx+b ",680,320);
    text("2+2=4 ",980,320);
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q6.destroy();
        IQ=IQ+10;
        a6 = true
    }
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q6.destroy();
        IQ=IQ+15;
        a6 = true
    }
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q6.destroy();
        IQ = IQ+20;
        a6 = true
    }
}

if(level === 8)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is considered the most healthy diet? ", 180, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Vegan ",370,320);
    text("vegetarian ",680,320);
    text(" low carb,whole food",980,320);
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q7.destroy();
        IQ=IQ+10;
        a7 = true
    }
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q7.destroy();
        IQ=IQ+15;
        a7 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q7.destroy();
        IQ=IQ+20;
        a7 = true
    }
}


if(level === 9)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("what type of essay helps convince someone to agree with your opinion? ", 250, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Informational",320,320);
    text("Narrative",640,320);
    text("Persuasive",950,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q8.destroy();
        IQ=IQ+10;
        a8 = true
    }
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q8.destroy();
        IQ=IQ+15;
        a8 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q8.destroy();
        IQ=IQ+20;
        a8 = true
    }
}


if(level === 10)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is the Recommended amount of time to practice for sports", 410, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("75 ",350,320);
    text("30",630,320);
    text("300",940,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q9.destroy();
        IQ=IQ+10;
        a9 = true
    }
    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q9.destroy();
        IQ=IQ+15;
        a9 = true
    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q9 .destroy();
        IQ = IQ+20
        a9 = true
    }
}

if(level === 11)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text(" What is the best tool to become a better teacher? ", 480, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Education ",370,320);
    text("Technology ",670,320);
    text("Experience",980,320);
    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q10.destroy();
        IQ=IQ+10;
        a10 = true
    }
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q10.destroy();
        IQ=IQ+15;
        a10 = true
    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q10.destroy();
        IQ=IQ+20;
        a10 = true
    }
}


if(level === 12)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("what is the best emotion to feel when painting? ", 280, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    textSize(20);
    fill("black");
    text("calm ",300,320);
    text("Angry  ",670,320);
    text("Excited ",980,320);
    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q11.destroy();
        IQ=IQ+10;
        a11 = true
    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q11.destroy();
        IQ=IQ+15;
        a11 = true
    } 

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q11.destroy();
        IQ=IQ+20;
        a11 = true
    }
}

if(a1===true&&a2===true&&a3===true&&a4===true&&a5===true&&a6===true&&a7===true&&a8===true&&a9===true&&a10===true&&a11)
{
    level = 14;
}

}
if(level===14){
if(IQ===120){
    background(0)
    text("based on your career choices, we have decided that the best career for you is social media star",500,300)
}
if(IQ===125){
    background(0)
    text("based on your career choices, we have decided that the best career for you is lumberjack ",500,300)
}
if(IQ===130){
    background(0)
    text("based on your career chioces, we have decided that the best career for you is farmer",500,300)
}
if(IQ===135){
    background(0)
    text("based on your career choices, we have decided that the best career for you is high school teacher",500,300)
}
if(IQ===140){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Athlete",500,300)
}
if(IQ===145){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Detective",500,300)
}
if(IQ===150){
    background(0)
    text("based on your career choices, we have decided that the best career for you is accountant",500,300)
}
if(IQ===155){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Journalist",500,300)
}
if(IQ===160){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Retail agent",500,300)
}
if(IQ===165){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Dentist",500,300)
}
if(IQ===170){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Astronaut",500,300)
}
if(IQ===175){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Patent attorney",500,300)
}
if(IQ===180){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Chemist",500,300)
}
if(IQ===185){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Theoritical physicist",500,300)
}
if(IQ===190){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Electrical engineer",500,300)
}
if(IQ===195){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Judge",500,300)
}
if(IQ===200){
    background(0)
    text("based on your career choices, we have decided that the best career for you is IP lawyer",500,300)
}
if(IQ===205){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Pilots",500,300)
}
if(IQ===210){
    background(0)
    text("based on your career choices, we have decided that the best career for you is child psychologist",500,300)
}
if(IQ===215){
    background(0)
    text("based on your career choices, we have decided that the best career for you is Computer Engineer",500,300)
}
if(IQ===220){
    background(0)
    text("based on your career choices, we have decided that the best career for you is surgeon",500,300)
}
}
console.log(level);
drawSprites();
}