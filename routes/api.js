var express = require('express');
var router = express.Router();

router.route('/posts')

	//returns all the posts
	.get(function(req,res) {
		res.send({message:'TODO: return all posts'});
	})
	.post(function(req,res) {
		res.send({message: 'TODO:create a post'});
	});

router.route('/posts/:id')

	.get(function(req,res) {
		console.log('debug this');
		res.send({message: "TODO returns a post with id "+ req.params.id});
	})

	.put(function (req,res) {
		res.send({message: "TODO modifies a post with id "+ req.params.id});
	})

	.delete(function (req,res) {
		res.send({message: "TODO deletes a post with id "+ req.params.id});
	})
module.exports = router;
