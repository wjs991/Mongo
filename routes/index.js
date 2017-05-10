var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = function(app,project)
{
    // GET ALL project
    app.get('/proj_pp/project', function(req,res){
        var project=new project();
        project.project_name= req.body.project_name;
        project.owner=req.body.owner;
        project.published_date = new Date(req.body.published_date);

        project.save(function (err) {
            if(err){
                console.error(err);
                res.json({result:0});
                return;
            }
            res.json({result:1});
        });
    });

    // GET SINGLE BOOK
    app.get('/proj_pp/project/:_id', function(req, res){
        res.end();
    });

    // GET
    app.get('/proj_pp/project/author/:author', function(req, res){
        res.end();
    });

    // CREATE BOOK
    app.post('/api/books', function(req, res){
        res.end();
    });

    // UPDATE THE BOOK
    app.put('/api/books/:book_id', function(req, res){
        res.end();
    });

    // DELETE BOOK
    app.delete('/api/books/:book_id', function(req, res){
        res.end();
    });

}
module.exports = router;
