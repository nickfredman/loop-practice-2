var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var problemOne = function(animals) {
    for(var i = 0; i < animals.length -1; i++) {
        console.log(animals[i]);
    }
};

problemOne(animals);

var problemTwo = function(animals) {
    for(var i = 1; i < animals.length + 1; i++) {
        if(i % 2 !== 0) {
            console.log(animals[i-1]);
        }
    }
};

problemTwo(animals);

var problemThree = function(animals) {
    for(var i = animals.length -1; i >= 0; i--) {
        console.log(animals[i]);
    }
};

problemThree(animals);

var problemFour = function(animals) {
    for(var i = 0; i < animals.length; i++) {
        console.log(animals[i]);
        if(i > 0 && i < 4) {
            console.log(animals[i]);
        }
    }
};

problemFour(animals);