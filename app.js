var express = require('express');
var router = express.Router();
var app=express();
var xlsx = require('node-xlsx');
var fs = require('fs');
app.listen(3001);
// app.set('views','./views/pages');
// app.set('view engine','jade');

app.get('/', function(req, res)
{
  var filename = './test.xlsx';
  console.error("you have opened"+filename);
  // read from a file
  var obj = xlsx.parse(filename);
  console.log(JSON.stringify(obj));

  res.send('import successfully!');
});

// app.get('/',function(req,res)
// {
//   res.render('eIndex',{
//     title: "imooc 详情页",
//      movie:
//      {
//        doctor: 'sldkjf',
//        country: '美国',
//        title: '机械战警'
//      }
//    })
// });
