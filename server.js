var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    'article-One': {
        title:'Article one| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
    },
    'article-Two':{
        title:'Article two| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
    },
    'article-Three':{
        title:'Article three| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
    }
};
  function createTemplate  (data){
    var title=data.title;
    var heading= data.heading;
    var content= data.content;
    var htmlTemplate = 
    `<html>
        <head>
            <title>
                ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
         <body>
            <div class ='container'>
            <div>
                <a href = '/'>Go Back to home page</a>
            </div>
            <hr/> 
            <h3>
                ${heading}
            </h3>
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
        res.send(createTemplate(articles(articleName)));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
