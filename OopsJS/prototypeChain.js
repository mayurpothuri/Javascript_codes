'use strict';

function createObj(name, score) {
    //passing function to  "attach" it to prototype object so that the passed object containing desired functionalities 
    //is shared among multiple objects.
    const user = Object.create(userFunctionStore);
    user.name = name;
    user.score = score;
    return user;
}

//this object having desired shared functionality is passed to object's prototype so that only one copy for every
//instance is created.
const userFunctionStore = {
    increment: function () {
        //here the "this" will be bind based on the way function[increment] is invoked.
        this.score++;
    },
    login: function () {
        console.log(`logged in`);
    }
}

const user1 = createObj("Mayur", 4);
const user2 = createObj("Mike", 5);
//before updating score
console.log(user1, user2);
user1.increment();//since an object[user1] is invoking the function[increment], so "this" will refer to this object[user]
console.log(user1, user2);

/*let JsonData = [{ "Message": "Number of pincode(s) found:2", "Status": "Success", "PostOffice": [{ "Name": "Gayatri Nagar", "Description": null, "BranchType": "Sub Post Office", "DeliveryStatus": "Non-Delivery", "Circle": "Andhra Pradesh", "District": "Hyderabad", "Division": "Hyderabad South East", "Region": "Hyderabad City", "Block": "saroornagar", "State": "Telangana", "Country": "India", "Pincode": "500097" }, { "Name": "Meerpet", "Description": null, "BranchType": "Sub Post Office", "DeliveryStatus": "Delivery", "Circle": "Andhra Pradesh", "District": "Hyderabad", "Division": "Hyderabad South East", "Region": "Hyderabad City", "Block": "Saroornagar", "State": "Telangana", "Country": "India", "Pincode": "500097" }] }];

console.log(JSON.stringify(JsonData, undefined, 4));*/