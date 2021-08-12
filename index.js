const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
var list=[
'vu tien hung',
'pham thi hai duyen',
'nguyen tien',
'vu tien minh',
'vu van hung',

]
app.set('view engine','pug')
app.set('views','./views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
app.get('/users',(req, res) => {
  res.render('./user/user.pug',{users:list})

})

app.get('/users/search',(req,res)=>{
  var q=req.query.q;
  var mathUsers=list.filter((user)=>{
    return user.indexOf(q) !== -1
  })
  res.render('./user/user.pug',{users:mathUsers})
})
app.post('/users',(req,res)=>{
      var q=req.body.name;
      var mathUsers=list.filter((user)=>{
       return user.indexOf(q) !== -1
  })
       // console.log(mathUsers);
        res.render('./user/user.pug',{users:mathUsers}); 
  })
//=============================
app.get('/getajax',(req,res)=>{
   var input=req.query.name;
   var mathUsers=list.filter((user)=>{
       return user.indexOf(input) !== -1
  })
   console.log(input);
   res.json({mathUsers})
})

app.get('/',(req, res) => {
  res.render('./home.pug')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})