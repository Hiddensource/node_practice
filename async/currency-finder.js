const axios = require('axios');

const getCountry = (currency) => {
    let url = `https://restcountries.eu/rest/v2/currency/${currency}`;
    return axios.get(url).then((result) => {
        return result.data.map((res) => res.name);
    });
}

const getCurrency = (country) => {
    let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    return axios.get(url).then((result) => {
        return (result.data[0].currencies[0].code);
    });
}


const getList = async (countryName) => {
    let currency = await getCurrency(countryName);
    let list = await getCountry(currency);
    return `${countryName} has currency ${currency} that can be used in countries : ${list.join(', ')}`;
};


getList('us').then((msg) => {
    console.log(msg)
}).catch((e) => {
    console.log(e.message)
});