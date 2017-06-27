# lift cache

```
var agent = function(resource,done) {     
    var err = null;
    var val = Math.random(); // value to save and link with resource
    done(err, val);
});

var cache = liftcache({
    path: '../cache', 
    agent: agent
});

// usage:
cache('somekey',function(err,val) console.log('Random for somekey is '+val); });
```
