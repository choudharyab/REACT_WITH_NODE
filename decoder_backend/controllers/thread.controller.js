const Thread = require('../models/threadModel.js');
const _ = require('underscore');
const jwt = require('jsonwebtoken');


module.exports.create= async function(req,res)
{
	const thread = new Thread({
            title:req.body.title,
            description: req.body.description,
            tags:req.body.tags,
            username:req.body.username
    });
    try{
    	let newthread = await thread.save();
		    res.json({
            type:true,
            data:'Thread Created Successfully'
        })
	
	}catch(err){
    res.status(500).send(err);
  }
}

module.exports.getThread= async function(req,res)
{
	try{
		let thread=await Thread.find();
		 	res.json({
      			type:true,
      			data:thread
      		})
	}catch(err) {
    	return res.status(500).send(err);
  	}
}

module.exports.searchThread=async function(req,res)
{
  let search=req.query.term;
  console.log("d",search);
  try{
    var regExpTerm = new RegExp(req.query.term, 'i');
      var regExpSearch=[{title:{$regex:regExpTerm}}, {description:{$regex: regExpTerm }},{tags:{$regex:regExpTerm}}];
    let thread=await Thread.find({'$or':regExpSearch});
    res.json({
            type:true,
            data:thread
          })
  }catch(err)
  {
    return res.status(500).send(err);
  }
}

module.exports.getThreadByUser= async function(req,res)
{
  try{
    let thread=await Thread.find({username:req.query.user_id});
      res.json({
            type:true,
            data:thread
          })
  }catch(err) {
      return res.status(500).send(err);
    }
}