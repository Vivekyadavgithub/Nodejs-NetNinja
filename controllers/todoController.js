var bodyParser = require('body-parser')

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'coding'}]
var urlencodedParser = bodyParser.urlencoded({extended:false})
module.exports = (app) => {
      
app.get('/todo', (req,res) => {
      res.render("todo", {todos:data});
})   

app.get('/todo',urlencodedParser, (req,res) => {
    data.push(req.body)
    res.json(data)
})

app.delete('/todo', (req, res) => {

})
}