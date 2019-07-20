const User = require('../models/userModel.js');
const _ = require('underscore');
const jwt = require('jsonwebtoken');
const keys = require('../init/keys');

module.exports.register= async function(req,res){
	const user = new User({
           email:req.body.email,
           name:req.body.name
    });
    user.password = user.generateHash(req.body.password);
    try{
        let newUser = await user.save();
            res.json({
            type:true,
            data:'User Created Successfully'
        })
    
    }catch(err){
    res.status(500).send(err);
    }
}

module.exports.checkCredentials = async function(req, res){

    try{
       let user=await User.findOne({email:req.body.email});
       if(!user.validPassword(req.body.password)){

       }else{
        let token = jwt.sign({email: req.body.email}, 'foo', {expiresIn: 1440 });       
                 res.json({
                     type: true,
                     token: token,
                     data:user
                 });
       }
    }catch(err){
        res.status(500).send(err);
    }

};

module.exports.ensureAuthorizedUser = function(req, res, next){
    var Token;
    Token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(typeof Token !== 'undefined'){
        jwt.verify(Token,keys.jwt.userSecretKey, function(err, decoded){
            if(err || !decoded){
                console.log(err);
                res.status(401).json({ error: 'Unauthorized'});
            }else{
                 next();
            }
        });
    }else {
        res.status(403).json({ error: 'Forbidden'});
    }
};