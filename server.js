var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article one| Garima Khanna',
        heading:'Profile',
        content:
        `<p4>
                <div class = "container2">
                    <br>Hi There!<br><br>
                    
                    Since when I started to learn, i used to be creative in my thinking and ways to expression.<br>
                    I have been active for participation in many contests and have won many award in the field of designing. <br><br>
                    But<br><br>
                    this was only in manual writing and displaying on sheets with hands.When i got explore the things related to HTML, i was very much curious to know more about how things realted to desigining happen digitally.<br><br>
                    My Details are as follows
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button">Academic</a><br><br>
                    <a href="http://gkreal.imad.hasura-app.io/article-one" class="button">Personal</a><br><br>
                    
                    
                    
                    
                    
                    
           
                    
                
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
