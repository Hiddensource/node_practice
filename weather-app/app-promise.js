const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            string: true,
            description: 'Address to search weather'
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = encodeURIComponent(argv.address);
var encodeAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA6bmxwcam4jAWaY7xpcLtJv-aSvmvt7js`;

axios.get(encodeAddress).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    address = response.data.results[0].formatted_address;
    var weatherUrl = `https://api.darksky.net/forecast/c80812048e5e91dbf588b47f55ff23d8/${latitude},${longitude}`;
    console.log(weatherUrl);
    console.log(`latitude and longitude for ${address} are ${latitude},${longitude}`);
    return axios.get(weatherUrl);
}).then((response) => {

    let temp = (((parseInt(response.data.currently.temperature)) - 32) * (5 / 9));
    temp = temp.toFixed(2);
    let atemp = (((parseInt(response.data.currently.apparentTemperature)) - 32) * (5 / 9));
    atemp = atemp.toFixed(2);

    console.log(` Temperature of ${address} is ${temp}°C and feels like ${atemp}°C`);

    // console.log(response.data);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect');
    } else {
        console.log(e.message);
    }
});