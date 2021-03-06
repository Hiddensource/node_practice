const request = require('request');

var getcodeAddress = (address,callback)=>{

var address = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA6bmxwcam4jAWaY7xpcLtJv-aSvmvt7js`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to server');
    } else if (body.status === 'ZERO_RESULTS') {
        callback("Unable to find address");
    } else if (body.status === 'OK') {
        callback(undefined,{
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});
};

module.exports={
    getcodeAddress
};

