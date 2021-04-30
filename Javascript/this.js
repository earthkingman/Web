var relationship = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logfriends : function(){
        var that = this;
        this.friends.forEach(function (friends){
            console.log(this.name, friends);
        })
    }
}

relationship.logfriends();

var relationship2 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logfriends : function(){
        var that = this;
        this.friends.forEach(friends => {
            console.log(this.name, friends);
        })
    }
}

