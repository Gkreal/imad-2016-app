var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article one| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
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
            <div class ="container">
            <div>
                <a href = '/'>Go Back to home page</a>
                <br>
                <a href= "http://garimareal.blogspot.in" style="bottom: -5px; padding-left: 3px; position: relative;"><img src="http://preview.turbosquid.com/Preview/2015/02/04__05_48_07/cartoonCharacterApril22.pnga20f0f12-c148-4da8-bd41-26316479815aOriginal.jpg" /></span> </a>
            </div>
            <hr/> 
            <h1>
                ${heading}
            </h1>
            <div>
                ${content}
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('ui/style.css', function (req,res){
    res.sendFile(path.join(__dirname,'ui','bgg.jpg'))
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
