const routes = (app,blogModel) => {
  const baseURLname = '/blog';
  // app.route('/')
  // .get((req,res) => {
  //   res.send(`This is get method`);
  // })
  
  // .post((req,res)=>{
  //   res.send(`This is post method`);
  // })

  // .put((req,res)=>{
  //   res.send(`This is put method`);
  // })

  // .delete((req,res)=>{
  //   res.send(`This is delete method`);
  // });

  let getAllBlogs = (req,res) => {
    blogModel.find({}, (err,blogs) => {
      if(err){
        res.send(err);
      }
      res.json(blogs);
    });
  }
  let getBlogByID = (req,res) => {
    blogModel.findById((req.params.blogId), (err,blog) => {
      if(err){
        res.send(err);
      }
      res.json(blog);
    });
  }

  let updateBlog = (req,res) => {
    blogModel.findOneAndUpdate({_id: req.params.blogId}, req.body, {new:true}, (err,updateBlog)=> {
      if(err){
        res.send(err);
      }
      res.json(updateBlog);
    });
  }

  let deleteBlog = (req,res) => {
    blogModel.deleteOne({_id: req.params.blogId}, (err)=> {
      if(err){
        res.send(err);
      }
      res.json({message : 'Blog Deleted succesfully !'})
    });
  }
  app.post(`${baseURLname}`, (req,res) => {
    let blog = new blogModel(req.body);
    blog.save().then(data => {
      res.json(data);
    }).catch(err => console.log(err));
  });

  app.get(`${baseURLname}s`, getAllBlogs);
  app.get(`${baseURLname}/:blogId`, getBlogByID);
  app.put(`${baseURLname}/:blogId`, updateBlog);
  app.delete(`${baseURLname}/:blogId`, deleteBlog);
};

module.exports = routes;