const request = require('request');

var weatherInfo = (address,latitude,longitude,callback) => {

    request({
        url: `https://api.darksky.net/forecast/c80812048e5e91dbf588b47f55ff23d8/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to server')
        } else if (response.statusCode != 200) {
            callback("Unable to fetch weather");
        } else {
            let temp = (((parseInt(body.currently.temperature)) - 32 )*(5/9));
            temp = temp.toFixed(2);
            let atemp = (((parseInt(body.currently.apparentTemperature)) - 32) * (5 / 9));
            atemp = atemp.toFixed(2);

            callback(undefined, ` Temperature of ${address} is ${temp}°C and feels like ${atemp}°C`);
        }
    });
};

module.exports={
    weatherInfo
};