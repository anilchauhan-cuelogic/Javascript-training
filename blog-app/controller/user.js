var validator = require("../validator/user"),
	User = require('../models/user').User;

exports.register = {
	validate : validator.register(),
    handler  : function (request, reply) {
        
		validator.checkEmailExists(request)
			.then(function(){
				var user = new User(request.payload);
				return user.saveAsync();
			})
			.then(function(user){
				reply(user);
			})
			.catch(function(e){
				reply(e);
			});
    }	
};

exports.list = {
    handler  : function (request, reply) {
		User.find({})
			.execAsync()
			.then(function(users) {
				reply(users);
			})
			.catch(function(e) {
				reply({'msg' : 'Cannot fetch users','error' : e});
			});
    }	
};