
var levelup 	= require('levelup');

/**

Usage:

agent is func to use for resource not present in cache


var agent = function(resource,done) { 
    
    var err = null;
    var val = 'value_to_save';

    done(err, val);
});

var collection = elevator({
    path: '../cache/testelevator', 
    agent: agent
});

module.exports = collection.lift;


*/


module.exports = function(opts) {

    var path                = opts.path;
    var agent               = opts.agent;

	var db = levelup(path);

    return function(resource, callback) {

    		// general direction of algorithm:
    		// cache => agent => save


    		// cache:try to find resource in db

    		db.get(resource, function (err, value) {

    			// cache: error or no in db78

    			if (err) {

    				// cache: not found

    				if (err.notFound) { 

    					// agent: try to get data for resource from function

    					return agent(resource, function(err, value) {

    						// agent: error -> return error

    						if (err) return callback(err);

    						// agent: no value -> return    						

    						if (!value) return callback();

    						// agent: value returned -> save

							return db.put(resource, JSON.stringify(value), function (err) {

								// cache: error during save -> return error

							  	if (err) return callback(err);

							  	// cache: save sucessful -> return value

							  	return callback(null, value);
							});    						

    					});
    				
    				}

    				// cache: error -> return error

    				return callback(err);
    			}	  

    			// cache: found -> return value from cache

    			return callback(null, JSON.parse(value));    			

    		});	

    	
    }
};

