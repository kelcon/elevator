# lift cache

var agent = function(resource,done) {     
    var err = null;
    var val = 'value_to_save';
    done(err, val);
});

var collection = liftcache({
    path: '../cache', 
    agent: agent
});

var lift = collection.lift;

