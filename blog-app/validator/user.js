var joi = require("joi"),
	User = require('../models/user').User,
	promise = require('bluebird');

exports.register = function (){

	return {
		'payload' : {
			'firstname' : joi.string().required(),
			'lastname' : joi.string().required(),	
			'email' : joi.string().email().required(),
			'password' : joi.string().min(6).max(15).required()
		} 
	};	
};

exports.checkEmailExists = function(request) {

	return new promise(function (resolve, reject){
		
		var email = request.payload.email;

		User.findOne({'email' : email})
			.execAsync()
			.then(function(user) {

				if(user) {
					reject(new Error('User with same email already exists'));
				}

				resolve();
			})
			.catch(function(err){
				reject(err);
			});
	});
	
};