module.exports = function (){
    //reg function not arrow (ES 5)
    var test = "hello world";


   var appendUniverse = function (){
        var concattest = test + ": universe";
        return concattest;
    }
return appendUniverse();

};
