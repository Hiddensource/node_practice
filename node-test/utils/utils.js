module.exports.add = (a,b) => a+b;
module.exports.square=(x) => x*x;
module.exports.setName = (user,fullname) => {
    var names = fullname.split(' ');
    user.fn = names[0];
    user.ln = names[1];
   
};

module.exports.syncAdd=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },1000);
};