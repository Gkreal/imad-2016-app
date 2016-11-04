var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article one| Garima Khanna',
        heading:'Profile'  ,
        content:
        `<p4>
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
                   
                   <br><br><br><br>
        </p4>`
                
    },
    'article-two':{
        title:'Article two| Garima Khanna',
        heading:'Academic Details',
        content:`   
                     
                     <div class= "container6">
                    <div class = "center">
                       <h2> Career Vision </h2>
                    
                        <br><p7><br>To work in a challenging environment demanding all my skills and efforts to adapt myself in technical field<br> and realize my potential where I get the opportunity for continuous learning and <br>exploring new technologies.</p7><br><br>
                       
                        <div class ="center">
                    <br><br><br><br>
                    
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
                   
                    <div class = "container6">
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
        heading:'Welcome',
        content:`<p>
                    Lets Go!
                </p>`
    }
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
                
                 <a href= "http://gkreal.imad.hasura-app.io/article-two" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://image.fg-a.com/go-buttons/go-button-light-green.png" /> </a> 
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
