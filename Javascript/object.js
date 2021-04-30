var sayNode = function(){
    console.log("Node");
}
var s = 'ES';
var oldObject = {
    sayJS : function (){
        console.log("JS");
    },
    sayNode : sayNode
};

oldObject[s + 7] = 'Fantastic';

console.log(oldObject.ES7);