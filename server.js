var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool= require('pg').Pool;
var config =  { 
    user: 'gkreal',
    database: 'gkreal',
    host:'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
    
var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article one| Garima Khanna',
        heading:' '  ,
        content:
        `<p4>
                <div class = "container7">
                <div class = "container2">
                <div class="center">
                    <br>
                    <p6><br>
                        "The key to Success is Hardwork and Determination."<br><br>
                    </p6>
                     <img class ='img-me' src= "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/269396_349956955106256_1319345635_n.jpg?oh=0ccd1c75636d1cd250b49a0e374057a3&oe=5861B1A1" style= position:centre,width:300px, height:800px;> <br><br>
                    
                    
                    
                    Since when I started to learn, <br>I used to be creative in my thinking and ways of expression.<br><br>
                    I have been participating in many contests <br>and have won many awards in the field of Designing. <br><br>
                    But<br><br>
                    This was only by writing and drawing on sheets with hands.<br>When i got to explore the things related to HTML,<br> <br>I was very much curious to know more <br> about how things realted to Designing happen Digitally <br> And that's how my journey Began.<br><br>
                    My Details are as follows<br><br><br>
               
                    <a href="http://gkreal.imad.hasura-app.io/article-three" class="button1">Projects</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Traning</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-four" class="button1">Achievements & Participation</a>
                   <br><br><br><br>
                   
                    <a href="http://gkreal.imad.hasura-app.io/article-five" class="button1">Clock</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-six" class="button1">Game</a>
        </p4>
        
        <p5> 
                <br><br><br><br><a href= "https://www.facebook.com/ginni1806" style="bottom: -5px; padding-left: 3px; image-align: right;  width:1px; font size:x-small; height:100px; position: relative;"><img src="http://icons.iconarchive.com/icons/danleech/simple/64/facebook-icon.png" /> </a> 
                
                 <a href= "https://twitter.com/Gkreal86" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://cincinnaticaferacer.com/wp-content/uploads/2011/12/Twitter-logo-button.png" /> </a>
                 
                 
                 <a href= "https://in.linkedin.com/in/garima-khanna-6aa80768" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://www.qrcode-monkey.com/gallery/linkedin-small.png" /> </a>
                 
                 
                
                
                 <a href= "http://garimareal.blogspot.in/" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="https://pbs.twimg.com/profile_images/2136871425/logobleed_bigger.png" /> </a> <br><br>
                 
                 
            </p5>`
                
    },
    'article-two':{
        title:'Article two| Garima Khanna',
        heading:' ',
        content:`   
                     <div class = "container7">
                     <div class= "container6">
                    <div class = "center">
                       <h2> Career Vision </h2>
                    
                        <br><p7><br>To work in a challenging environment demanding all my skills and efforts to adapt myself in technical field<br> and realize my potential where I get the opportunity for continuous learning and <br>exploring new technologies.</p7><br>
                       
                        <div class ="center">
                    <br>
                    
                    <h2> Summer Training at NIIT Technologies , Delhi</h2><br>
                    
                        <p7>Undergone training on C, C++ and DATA STRUCTURE.</p7><br><br>
                    
                    <h2> Delhi Metro Rail Corporation, Barakhamba Road , Delhi  </h2><br>
                        <p7> Undergone training on signaling and telecommunications dept. of Delhi Metro.</p7><br><br>
                    
                    <h2>Cetpa Infotech Pvt Ltd. Noida , Delhi</h2><br>
                        <p7>Undergone training on Embedded system 89C51 and worked on many projects.</p7><br><br>
                      
                    <h2>HPT, Doordarshan, Prasar Bharati, Pitampura , Delhi</h2><br>
                        <p7>Undergone summer training on Satellite Communication at HPT T.V Tower.</p7><br><br>
                        
                   


                    
               

                `
    },
    'article-three':{
        title:'Article three| Garima Khanna',
        heading:' ',
        content:`   
                    <div class ="containe7">
                    <div class ="container6">
                    <div class ="center">
                    <br><br><br><br>
                    
                    <h2> Line Follower Robot </h2><br><br>
                    
                        <p7>Constructed an automatic robot that is capable of traversing on black line with white <br> track using ATMEL 89C51.</p7><br><br><br>
                    
                    <h2> Gesture Controlled robot </h2><br><br>
                        <p7>Constructed a gesture controlled robot which can be controlled by hand movements <br> with the help of a control kit that can be worn on hand like a glove using ATMEL 89C51.</p7><br><br><br>
                    
                    <h2>Rash Driving Warning System For Highway Police</h2><br><br>
                        <p7>Constructed a system with help of 555 timer & multi-vibrator to detect the high speed <br>of vehicles on highway. Basically a speed limit detector  for traffic police to catch <br> high speed vehicles with a fixed specified speed limit set by the police rules.</p7><br><br><br>
                      
                    <h2>Line follower Hovercraft  </h2><br><br>
                        <p7>A hovercraft, basically an air cushion vehicle used  for rough terrains be it in water <br> or land. Working with the help of light detectors which follow white line on a black surface <br> with multiple air propellers using embedded system Microcontroller 89C51.</p7><br><br><br>
                        
                    <h2> Vehicle Surveillance and Monitoring System</h2><br><br>
                        <p7>A vehicle security device based on raspberry pi2 with intruder alert, navigation and <br>facial recognition system. A device which is independent of the vehicle's inbuilt mechanism<br> to provide high end security at theft prone areas and also provide help in case of emergency <br> to the users. Moreover, nobody has time to keep check on the worker who is doing the <br> job of cleaning a vehicle, even if we keep check, it is not possible to do that every day. So, here is a <br> system which can not only keep check on the security of the vehicle but also act as a multipurpose tool <br>to monitor the cleaner of the vehicle. </p7><br><br><br>
                        
                    <h2> Data Visualization of Disaster Information Retrieval Based on Social Media </h2><br><br>
                        <p7>Study of Data Visualization tools for disaster information retrieval via social media and find <br>out the best suited visualization such that that information can be extracted immediately<br> and concerned authorities may take necessary steps in case of emergency.</p7><br><br><br>


                    
                    
                `
    },
    'article-four':{
        title: 'Article four| Garima Khanna',
        heading:' ',
        content:`
                    <div class = "container7">
                    <div class= "container6">
                    <div class = "center">
                       <h2> Calligraphy competition </h2>
                    
                        <br><p7><br>Secured 1st position in Calligraphy competition, VBPS, Delhi 2006.</p7><br>
                       
                        <div class ="center">
                    <br>
                    
                    <h2> Slogan Writing Competition</h2><br>
                    
                        <p7>Secured 1st position in Slogan Writing Competition, VBPS, Delhi 2005.</p7><br><br>
                    
                    <h2> 4X100 mts Relay </h2><br>
                        <p7>Secured 2nd position in 4X100 mts Relay held at Ramjas Sports and Mountaineering Institute, 2004.</p7><br><br>
                    
                    <h2>Scouts and Guides Training Camp </h2><br>
                        <p7>Attended Scouts and Guides Training Camp and received a certificate of merit at S.J center Nizamuddin, Delhi</p7><br><br>
                      
                    <h2>Social Service by Help Age India </h2><br>
                        <p7>Got certificate of Social Service by Help Age India for assisting in raising funds for the Elderly.</p7><br><br>
                        
                          
                    <h2>Basket Ball Competition</h2><br>
                        <p7>Secured ' Runner up 'position in Basket Ball competition Sports meet, 2007. </p7><br><br>
                        
                    <h2>Research Showcase </h2><br>
                        <p7>Winner of Research Showcase along with team members and got scholarship ,held at IGTUW, Delhi 2016.</p7><br><br>
                        
                    <h2> Sucessfully secured internship </h2><br>
                        <p7> Working on a R&D project under CSIR <a href = "http://internshala.com/student/certificate/3228633/1E401AF0-6AAF-0330-8DCA-D25C113FA264" </p7><br><br>
                       `
    },
    
     'article-five':{
        title: 'Article five| Garima Khanna',
        heading:' ',
        content:`
                    <div class = "container7">
                    <div class = "container4">
                    
                       <p6> As the time is passing !!!!!!!!! </p6><br><br><br><br>
                            <canvas id="canvas" width="400" height="400"
                            style="background-color:#FFC0CB">
                            </canvas>
                            
                            <script>
                            var canvas = document.getElementById("canvas");
                            var ctx = canvas.getContext("2d");
                            var radius = canvas.height / 2;
                            ctx.translate(radius, radius);
                            radius = radius * 0.90
                            setInterval(drawClock, 1000);
                            
                            function drawClock() {
                              drawFace(ctx, radius);
                              drawNumbers(ctx, radius);
                              drawTime(ctx, radius);
                            }
                            
                            function drawFace(ctx, radius) {
                              var grad;
                              ctx.beginPath();
                              ctx.arc(0, 0, radius, 0, 2*Math.PI);
                              ctx.fillStyle = 'white';
                              ctx.fill();
                              grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
                              grad.addColorStop(0, '#333');
                              grad.addColorStop(0.5, 'white');
                              grad.addColorStop(1, '#333');
                              ctx.strokeStyle = grad;
                              ctx.lineWidth = radius*0.1;
                              ctx.stroke();
                              ctx.beginPath();
                              ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
                              ctx.fillStyle = '#333';
                              ctx.fill();
                            }
                            
                            function drawNumbers(ctx, radius) {
                              var ang;
                              var num;
                              ctx.font = radius*0.15 + "px arial";
                              ctx.textBaseline="middle";
                              ctx.textAlign="center";
                              for(num = 1; num < 13; num++){
                                ang = num * Math.PI / 6;
                                ctx.rotate(ang);
                                ctx.translate(0, -radius*0.85);
                                ctx.rotate(-ang);
                                ctx.fillText(num.toString(), 0, 0);
                                ctx.rotate(ang);
                                ctx.translate(0, radius*0.85);
                                ctx.rotate(-ang);
                              }
                            }
                            
                            function drawTime(ctx, radius){
                                var now = new Date();
                                var hour = now.getHours();
                                var minute = now.getMinutes();
                                var second = now.getSeconds();
                                //hour
                                hour=hour%12;
                                hour=(hour*Math.PI/6)+
                                (minute*Math.PI/(6*60))+
                                (second*Math.PI/(360*60));
                                drawHand(ctx, hour, radius*0.5, radius*0.07);
                                //minute
                                minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
                                drawHand(ctx, minute, radius*0.8, radius*0.07);
                                // second
                                second=(second*Math.PI/30);
                                drawHand(ctx, second, radius*0.9, radius*0.02);
                                }
                                
                                function drawHand(ctx, pos, length, width) {
                                    ctx.beginPath();
                                    ctx.lineWidth = width;
                                    ctx.lineCap = "round";
                                    ctx.moveTo(0,0);
                                    ctx.rotate(pos);
                                    ctx.lineTo(0, -length);
                                    ctx.stroke();
                                    ctx.rotate(-pos);
                                }
                                </script><br><br><br><br>
                                <p6> "As the time is passing , its alarming "</p6><br><br><br>
                                <p8>Choked: Delhi's pollution level is fives times worse than just eight years ago as experts warn air quality is as noxious as Jharia coal town. Delhiites are breathing poison. If you thought CNG had made the Capital's air cleaner, then it's time for a reality check. The alarming pollution levels have blackened Delhi's air to such an extent that it ranks alongside coal town Jharia and unregulated industrial hubs like Ludhiana, Raipur and Kanpur. And it's the ever-increasing numbers of diesel-guzzling passenger cars and trucks plying unregulated on the city's roads that are largely to blame for the situation.</p8>



                      `
     },

 'article-six':{
        title:'Article six| Garima Khanna',
        heading:' ',
        content:`   
                   
                    <div class ="center">
                    <br><br><br><br>
                    
                       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                                <style>
                                canvas {
                                    border:10px solid "black";
                                    background-color: #C71585;
                                }
                                </style>
                                </head>
                                <body onload= "startGame()">
                                <button><class="button1" oncick="startGame()">start</button>
                                <script>
                                
                                var myGamePiece;
                                var myObstacles = [];
                                var mySound;
                                
                                function startGame() {
                                    myGamePiece = new component(30, 30, "#FFC0CB", 10, 120);
                                    mySound = new sound("bounce.mp3");
                                    myGameArea.start();
                                }
                                
                                var myGameArea = {
                                    canvas : document.createElement("canvas"),
                                    start : function() {
                                        this.canvas.width = 1000;
                                        this.canvas.height = 500;
                                        this.context = this.canvas.getContext("2d");
                                        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                                        this.frameNo = 0;
                                        this.interval = setInterval(updateGameArea, 20);
                                    },
                                    stop : function() {
                                        clearInterval(this.interval);
                                    },    
                                    clear : function() {
                                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                                    }
                                }
                                
                                function component(width, height, color, x, y) {
                                    this.width = width;
                                    this.height = height;
                                    this.speedX = 0;
                                    this.speedY = 0;    
                                    this.x = x;
                                    this.y = y;    
                                    this.update = function() {
                                        ctx = myGameArea.context;
                                        ctx.fillStyle = color;
                                        ctx.fillRect(this.x, this.y, this.width, this.height);
                                    }
                                    this.newPos = function() {
                                        this.x += this.speedX;
                                        this.y += this.speedY;        
                                    }    
                                    this.crashWith = function(otherobj) {
                                        var myleft = this.x;
                                        var myright = this.x + (this.width);
                                        var mytop = this.y;
                                        var mybottom = this.y + (this.height);
                                        var otherleft = otherobj.x;
                                        var otherright = otherobj.x + (otherobj.width);
                                        var othertop = otherobj.y;
                                        var otherbottom = otherobj.y + (otherobj.height);
                                        var crash = true;
                                        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                                            crash = false;
                                        }
                                        return crash;
                                    }
                                }
                                
                                function updateGameArea() {
                                    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
                                    for (i = 0; i < myObstacles.length; i += 1) {
                                        if (myGamePiece.crashWith(myObstacles[i])) {
                                            mySound.play();
                                            myGameArea.stop();
                                            return;
                                        } 
                                    }
                                    myGameArea.clear();
                                    myGameArea.frameNo += 1;
                                    if (myGameArea.frameNo == 1 || everyinterval(150)) {
                                        x = myGameArea.canvas.width;
                                        minHeight = 20;
                                        maxHeight = 200;
                                        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
                                        minGap = 50;
                                        maxGap = 200;
                                        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
                                        myObstacles.push(new component(10, height, "white", x, 0));
                                        myObstacles.push(new component(10, x - height - gap, "white", x, height + gap));
                                    }
                                    for (i = 0; i < myObstacles.length; i += 1) {
                                        myObstacles[i].x -= 1;
                                        myObstacles[i].update();
                                    }
                                    myGamePiece.newPos();
                                    myGamePiece.update();
                                }
                                
                                function sound(src) {
                                    this.sound = document.createElement("audio");
                                    this.sound.src = src;
                                    this.sound.setAttribute("preload", "auto");
                                    this.sound.setAttribute("controls", "none");
                                    this.sound.style.display = "none";
                                    document.body.appendChild(this.sound);
                                    this.play = function(){
                                        this.sound.play();
                                    }
                                    this.stop = function(){
                                        this.sound.pause();
                                    }    
                                }
                                
                                function everyinterval(n) {
                                    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
                                    return false;
                                }
                                
                                function moveup() {
                                    myGamePiece.speedY = -1; 
                                }
                                
                                function movedown() {
                                    myGamePiece.speedY = 1; 
                                }
                                
                                function moveleft() {
                                    myGamePiece.speedX = -1; 
                                }
                                
                                function moveright() {
                                    myGamePiece.speedX = 1; 
                                }
                                
                                function clearmove() {
                                    myGamePiece.speedX = 0; 
                                    myGamePiece.speedY = 0; 
                                }
                                </script>
                                <div style="text-align:center;width:480px;">
                                  <button><class="button1" onmousedown="moveup()" onmouseup="clearmove()" ontouchstart="moveup()" >UP</button>
                                  <button><class = "button1" onmousedown="moveleft()" onmouseup="clearmove()" ontouchstart="moveleft()">LEFT</button>
                                  <button><class = "button1" onmousedown="moveright()" onmouseup="clearmove()" ontouchstart="moveright()">RIGHT</button>
                                  <button><class = "button1" onmousedown="movedown()" onmouseup="clearmove()" ontouchstart="movedown()">DOWN</button>
                                </div> <br><br><br><br>


                    
`},

    'article-seven':{
        title:'Article seven| Garima Khanna',
        heading:' ',
        content:`   
                   
                    <div class = "container7">
                    <div class = "container4">
                    <br><br><br><br>
                    
                    <h2> Charts </h2><br><br>
                    
                       
                          <style>html{font-family:Verdana;}</style>
                        	
                        <script type="text/javascript">
                        
                        var canvas ;
                        var context ;
                        var Val_max;
                        var Val_min;
                        var sections;
                        var xScale;
                        var yScale;
                        		// Values for the Data Plot, they can also be obtained from a external file
                        var Apple =  [100, 102, 87, , 100, 123, 100, 90, 87, 91, 93, 88];
                        var Samsung = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
                        var Nokia =   [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];
                        
                        function init() {
                        		// set these values for your data 
                        	sections = 12;
                        	Val_max = 130;
                        	Val_min = -40;
                        	var stepSize = 10;
                        	var columnSize = 50;
                        	var rowSize = 50;
                        	var margin = 10;
                        	var xAxis = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
                        		//
                        		
                        	canvas = document.getElementById("canvas");
                        	context = canvas.getContext("2d");
                        	context.fillStyle = "#0099ff"
                        	context.font = "20 pt Verdana"
                        	
                        	yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
                        	xScale = (canvas.width - rowSize) / sections;
                        	
                        	context.strokeStyle="#009933"; // color of grid lines
                        	context.beginPath();
                        		// print Parameters on X axis, and grid lines on the graph
                        	for (i=1;i<=sections;i++) {
                        		var x = i * xScale;
                        		context.fillText(xAxis[i], x,columnSize - margin);
                        		context.moveTo(x, columnSize);
                        		context.lineTo(x, canvas.height - margin);
                        	}
                        		// print row header and draw horizontal grid lines
                        	var count =  0;
                        	for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
                        		var y = columnSize + (yScale * count * stepSize); 
                        		context.fillText(scale, margin,y + margin);
                        		context.moveTo(rowSize,y)
                        		context.lineTo(canvas.width,y)
                        		count++;
                        	}
                        	context.stroke();
                        	
                        	context.translate(rowSize,canvas.height + Val_min * yScale);
                        	context.scale(1,-1 * yScale);
                        	
                        		// Color of each dataplot items
                        		
                        	context.strokeStyle="#FF0066";
                        	plotData(Apple);
                        	context.strokeStyle="#9933FF";
                        	plotData(Samsung);
                        	context.strokeStyle="#000";
                        	plotData(Nokia);
                        }
                        
                        function plotData(dataSet) {
                        	context.beginPath();
                        	context.moveTo(0, dataSet[0]);
                        	for (i=1;i<sections;i++) {
                        		context.lineTo(i * xScale, dataSet[i]);
                        	}
                        	context.stroke();
                        }
                        
                        </script>
                        </head>
                        
                        <body onLoad="init()">
                        <div align="center">
                        <h2>Pollution Levels in delhi</h2>
                        
                        <canvas id="canvas" height="400" width="650">
                        </canvas>
                        <br>
                        	<!--Legends for Dataplot -->
                        <span style="color:#FF0066"> Shahadra </span>  
                        <span style="color:#9933FF"> Pitampura</span>  
                        <span style="color:#000"> Anand Vihar </span>
                        </div>
                        

                           
                           
                        
   
    
    `},
};

  function createTemplate  (data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
    `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content-"width-device-width, initial-scale-1" />
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
         <body>
            <div class ="container1">
                <hr/> 
                <h1>
                    ${heading}
                </h1>
            <div>
                ${content}
            </div>
            <div>
                <a href= '/' style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://www.gifs.cc/home/home-flash-animated-button.gif" /></span> </a>
                
                
                <br>
                <br>
            </div>
            </div>
           
        </body>
     </html>
    `;
    return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });


var pool= new Pool (config);

app.get('/article-db', function( req,res){
    //make a select request
    //return a response
    pool.query('SELECT * FROM article', function (err, result){
        if (err){
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result));
        }
    });
});
var counter=0;
app.get('/counter',function(req,res){
    counter= counter + 1;
    res.send(counter.toString());
});

var names= [];
app.get('/submit-name', function ( req,res){ //URL:/submit-name?name=xxxx
    //Get the name from the request
    var name= req.query.name;
    names.push(name);
    //JSON: Javascript  Object Notation
    res.send(JSON.stringify(names)); //TODO
});

app.get('/:articleName',function( req, res){
    //articlename= Article-one
        var articleName = req.params.articleName;
        res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('ui/bgg.jpg', function (req,res) {
    res.sendFile(path.join(__dirname,'ui','bgg.jpg'));
});







var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
