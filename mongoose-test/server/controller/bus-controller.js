const busConfig = require('../bus-config/bus-config');

getBusData = (req, res) => {

    var userRequest = {
        source: req.body.source,
        destination: req.body.destination,
        ddate: req.body.ddate
    }

    busConfig.providerConfig(userRequest).then((Detail)=>{
        console.log(Detail[0].length);
        res.send({Detail});});
  

}



module.exports = {
    getBusData,
}