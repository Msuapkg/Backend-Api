const {User} = require('../models')

module.exports = {
     create:(body)=> new User(body).save(),
     findAll:()=> User.find({is_active:true}),
     findOneByEmail:(email)=> User.findOne({email,is_active:true}), 
     fineOneById:(id)=> User.fineOne({_id:id,is_active:true}), 
};