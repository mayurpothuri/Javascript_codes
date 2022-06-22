//os features
let os = require('os');
console.log(os.arch()); // ==> give whether it is 32 bit / 64 bit 
console.log(os.platform()); // ==> give whether it is windows/mac/linux/etc..
let cpus = os.cpus(); // ==> #cpus details
console.log(cpus.length);
console.log(cpus);
let nwInterfaces = os.networkInterfaces(); // ==> gives nw interfaces details
console.log(nwInterfaces);
for (let key in nwInterfaces) {
    console.log(key, nwInterfaces[key][1].address);
}