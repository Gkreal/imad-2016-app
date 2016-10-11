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
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Academic</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Projects</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-two" class="button1">Achievements</a>
                    <a href="http://gkreal.imad.hasura-app.io/article-one" class="button1">Personal</a>
                   <br><br><br><br>
        </p4>`
                
    },
    'article-two':{
        title:'Article two| Garima Khanna',
        heading:'Academic Details',
        content:`<p4>
                    <div class = "container2">
                    <div class = "center">
                       <br> Career Vision <br>
                    
                        <br><br>To work in a challenging environment demanding all my skills and efforts to adapt myself in technical field<br> and realize my potential where I get the opportunity for continuous learning and <br>exploring new technologies.<br><br><br>
                        <div class= "container4">
                        <table style="width:70%">
                          <tr>
                            <th>Qualification</th>
                            
                         </tr>
                         <td>
                            <th>Institute</th> 
                         </td>
                         
                          <tr>
                            <td>Masters in Technology ,2015- 2017
                                Branch -  Mobile and Pervasive Computing
                            </td>
                            <td>Indira Gandhi Delhi Technical University for Women, Kashmere Gate , Delhi
                            </td>
                            <td>CBSE (High School)   12th  ,  2010</td>
                          </tr>
                          
                          <tr>
                            <td>Bachelor of Technology , 2011-2015
                                   Electronics and Communication Engineering. </td>
                            <td>Guru  Premsukh  Memorial College Of Engineering, Budhpur GT Karnal Road, Delhi.
                                GGSIPU 
                            </td> 
                            <td>Vikas Bharati Public School, Rohini Sector-24 , Delhi-85 </td>
                          </tr>
                        </table>

                </p4>`
    },
    'article-three':{
        title:'Article three| Garima Khanna',
        heading:'Welcome!',
        content:`<p>
                    Lets Go!
                </p>`
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



var data = {

  "nodes":[{
    "id": 0,
    "name": "Basis",
    "usage": 10,
    "category": 1
  },
  {
    "id": 1,
    "name": "Verdeel noord",
    "usage": 13,
    "category": 0
  },
  {
    "id": 2,
    "name": "Verdeel zuid",
    "usage": 7,
    "category": 0
  },
  {
    "id": 3,
    "name": "Verveelpunt noord - 1",
    "usage": 10,
    "category": 0
  },
  {
    "id": 4,
    "name": "Verveelpunt noord - 2",
    "usage": 3,
    "category": 0
  },
  {
    "id": 5,
    "name": "Verveelpunt zuid - 1",
    "usage": 2,
    "category": 0
  },
  {
    "id": 6,
    "name": "Verveelpunt zuid - 2",
    "usage": 1,
    "category": 0
  },
  {
    "id": 7,
    "name": "Verveelpunt zuid - 3",
    "usage": 2,
    "category": 0
  },{
    "id": 8,
    "name": "Van der Hoeve",
    "usage": 6,
    "category": 2
  },{
    "id": 9,
    "name": "Kwekerij Peter Hogerbrugge",
    "usage": 4,
    "category": 2
  },{
    "id": 10,
    "name": "Zuidgeest Groewers BV",
    "usage": 1,
    "category": 2
  },{
    "id": 11,
    "name": "FA. Jan Strik",
    "usage": 1,
    "category": 2
  }],
  "links":[{
    "source": 0,
    "target": 1,
    "weight": 13
  },
  {
    "source": 0,
    "target": 2,
    "weight": 7
  },
  {
    "source": 1,
    "target": 3,
    "weight": 10
  },
  {
    "source": 1,
    "target": 4,
    "weight": 3
  },
  {
    "source": 2,
    "target": 5,
    "weight": 2
  },
  {
    "source": 2,
    "target": 6,
    "weight": 1
  },
  {
    "source": 2,
    "target": 7,
    "weight": 2
  },
  {
    "source": 3,
    "target": 8,
    "weight": 8
  },
  {
    "source": 3,
    "target": 9,
    "weight": 4
  },
  {
    "source": 5,
    "target": 10,
    "weight": 1
  },{
    "source": 6,
    "target": 11,
    "weight": 1
  }]
}




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
