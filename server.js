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
                    I have been articipating in many contests <br>and have won many awards in the field of Designing. <br><br>
                    But<br><br>
                    This was only by writing and drawing on sheets with hands.<br>When i got to explore the things related to HTML,<br> <br>I was very much curious to know more <br> about how things realted to Designing happen Digitally <br> And that's how my journey Began.<br><br>
                    My Details are as follows<br><br>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Academic</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Projects</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Achievements</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-one" class="button1">Personal</a><br><br>
                   
        </p4>`
                
    },
    'article-two':{
        title:'Article two| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
    },
    'article-three':{
        title:'Article three| Garima Khanna',
        heading:'Welcome!',
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
