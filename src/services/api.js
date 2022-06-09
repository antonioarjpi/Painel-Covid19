const covid = 'https://coronavirus-19-api.herokuapp.com/countries' 

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCovid(country) {
    return fetch(`${covid}/${country}`, headers)
        .then((response) => response.json()) 
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {getCovid}