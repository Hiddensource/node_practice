const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            string: true,
            description: 'Address to search weather'
        }
})
.help()
.alias('help','h')
.argv;

geocode.getcodeAddress(argv.address,(errorMessage,result)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        weather.weatherInfo(result.address,result.latitude,result.longitude,(error, weatherResult)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(' ');
                console.log(weatherResult);
            }
        });
    }

});
