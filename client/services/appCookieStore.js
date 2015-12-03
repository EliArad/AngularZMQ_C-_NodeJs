
app.factory("appCookieStore", function($cookieStore) {


    var set = function (name , value) {
        $cookieStore.put(name, value);
    }
    var get = function (name) {
        return $cookieStore.get(name);
    }
    var get_wd = function (name, d) {
      var c = $cookieStore.get(name);
      if(typeof c == "undefined") //no errors
        return d;
      return c;
    }
    var remove = function(name)
    {
        $cookieStore.remove(name);
    }

    return {
        set: set,
        get: get,
        remove : remove,
        get_wd:get_wd
    };
});
