const axios = require("axios");
require('dotenv').config();


const service1Axios = axios.create({
    baseURL: `http://${process.env.SERVICE_1_LOCATION}:5000/service1/v1`
});

module.exports = {
    search: (req, res) => {
        let url = `/resource`
        let id = req.query.id;
        let options = {
            headers: req.headers
        };

        if (id) {
            url += `?id=${id}`
        }

        service1Axios.get(url, options)
            .then(response => {
                return res.json(response.status, response.data);
            })
            .catch(error => {
                return res.json(error.response.status, error.response.data);
            });
    }
}