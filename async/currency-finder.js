const axios = require('axios');
const fs = require('fs');

const getCountries = async (currency) => {
    try {
        let url = `https://restcountries.eu/rest/v2/currency/${currency}`;
        const result = await axios.get(url);
        return result.data.map((res) => res.name);
    } catch (e) {
        throw new Error(`Unable to find countries that use currency ${currency}`);
    }
};

const getCurrency = async (country) => {
    try {
        let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
        const result = await axios.get(url);
        return (result.data[0].currencies[0].code);
    } catch (e) {
        throw new Error(`Unable to find currency of country: ${country}`);
    }
};


const getList = async (countryName) => {
    let currency = await getCurrency(countryName);
    let list = await getCountries(currency);
    return `${countryName} has currency ${currency} that can be used in countries : ${list.join(',')}`;
    // if (list.length === 1) {
    //     // return `${countryName} has currency ${currency} that can be used in their own country only`;
    //     return true;
    // }

};


getList('india').then((msg) => {
    console.log(msg)
}).catch((e) => {
    console.log(e.message)
});

let counter = 0;
// const getCountriesList = async () => {
//     var result = JSON.parse(fs.readFileSync('countries.json'));
//     for (let i = 0; i < result.length; i++) {
//         await getList(result[i].name).then((msg) => {
//             if (msg) {
//                 counter++;
//             }
//             // console.log(counter);
//                 }).catch((e) => {
//             console.log(e.message)
//         });
//     }
//     return `${counter} countries have currency that can be used in their own country only`;
// }

// getCountriesList().then(msg => console.log(msg)).catch((e) => console.log(e.message));