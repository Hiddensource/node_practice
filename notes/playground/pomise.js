var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b);
            }else{
                reject("Enter two number");
            }
         }, 2000);
    });
};

asyncAdd(5,7).then((msg)=>{
    console.log("Sum: ",msg);
    return asyncAdd(msg , 3);
}).then((sum)=>{
    console.log("Sum : ",sum);
}).catch((errorMessage)=>{
    console.log('Eror:',errorMessage);
});
// var somePromise = new Promise((resolve,reject)=>{
   
//     setTimeout(()=>{
//          resolve('worked');
//     },2000);
//     reject('Error occurred');
// });

// somePromise.then((msg)=>{
//     console.log('success',msg);
// },(errorMessage)=>{
//     console.log('Error',errorMessage);
// });