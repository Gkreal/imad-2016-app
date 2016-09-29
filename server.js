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
           
            <hr/> 
            <h1>
                ${heading}
            </h1>
            <div>
                ${content}
            </div>
             <div>
                <a href = '/'> Home </a>
                <br>
                <a href= "http://garimareal.blogspot.in" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://www.aerzenusa.com/var/aerzen/storage/images/media/ressources_us/logos/blog-logo/364462-1-eng-GB/Blog-Logo_small.jpg" /></span> </a>
                
                <a href= "https://www.facebook.com/ginni1806" style="bottom: -5px; padding-left: 3px; width:1px; font size:x-small; height:1px; position: relative;"><img src="http://www.bing.com/images/search?q=fb+images&view=detailv2&qft=+filterui%3aimagesize-small&id=55F61DB5CC5DECCF945287F69B8B82263B45653D&selectedIndex=9&ccid=Z6bgprD7&simid=608053467756495730&thid=OIP.M67a6e0a6b0fb71c5b1736d37fd6649deo0" /></a>
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
