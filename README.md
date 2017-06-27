# lift cache

It it very simple caching system connected with key/value database on top of levelup database. Just define function that returns value for some parameter (ie. fetches and parsers some URL endpoint) and lift cache will do the rest. Next time you call cache with the same parameter, you will receive cached value.  

```
var agent = function(resource,done) {     
    var err = null;
    var val = Math.random(); // value to save and link with resource
    done(err, val);
});

var cache = liftcache({
    path: './put_cache_db_in_that_dir', 
    agent: agent
});

// usage:
cache('somekey',function(err,val) console.log('Random for somekey is '+val); });
```
