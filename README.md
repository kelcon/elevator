# lift cache

```
var agent = function(resource,done) {     
    var err = null;
    var val = 'value_to_save';
    done(err, val);
});

var cache = liftcache({
    path: '../cache', 
    agent: agent
});

// usage:
cache('somekey',function(err,val) console.log(val); });
```
