// math.js
const math = {
    add(a,b){
        return a + b;
    }
}
module.exports = math  


// index.js
const math = require('./math')
console.log(math.add(1, 2));