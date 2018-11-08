const request = require('request');
var geo = (address)=>{
    var address = encodeURIComponent(address);
    return new Promise((resolve,reject)=>{
         request({
             url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA6bmxwcam4jAWaY7xpcLtJv-aSvmvt7js`,
             json: true
         }, (error, response, body) => {
             if (error) {
                 reject('Unable to connect to server');
             } else if (body.status === 'ZERO_RESULTS') {
                 reject("Unable to find address");
             } else if (body.status === 'OK') {
                 resolve({
                     address: body.results[0].formatted_address,
                     latitude: body.results[0].geometry.location.lat,
                     longitude: body.results[0].geometry.location.lng
                 });
             }
         });
    })
   
};

geo('201204').then((location)=>{
    console.log(JSON.stringify(location,null,3));
},(err)=>{
    console.log('Error: ',err);
});