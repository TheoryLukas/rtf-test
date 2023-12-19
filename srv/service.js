const cds = require("@sap/cds");

module.exports = cds.service.impl(async function(){
    this.after("READ", "Foo", FooData => {
        const Foos = Array.isArray(FooData) ? FooData : [FooData];
        
        if (Foos.length == 1) {
            console.log(Foos[0]);
        } else {
            console.log("d");
        }
    })
    this.after("EDIT", "Foo", FooData => {
        console.log("abacadaba", FooData);
    })
})