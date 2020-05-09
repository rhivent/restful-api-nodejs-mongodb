let express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./src/routes/crmRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/test',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false
});

const BlogSchema = require('./src/models/crmModel');
const blogModel = mongoose.model('blog',BlogSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

routes(app,blogModel);

// const Cat = mongoose.model(`Cat`, {name: String});

// const kitty = new Cat({name:'pussy'});

// kitty.save().then(res => {
//   console.log(res);
//   console.log('Meow');
// });

// calling everytime when we got on reload browser / make request
// app.use(function(req,res,next){
//   console.log(`Time`,Date.now());
// });

app.get('/',(req,res,next) => {
  console.log('req method',req.method);
  next();
},function(req,res,next){
  console.log('req original url',req.originalUrl);
  next();
},function(req,res,next){
  res.send('request was succesful');
});

// to get file on public folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Your server running on port : ${PORT}`);
});