const axios = require ('axios');


const fetch = {

    async fetchCall (data) {
        try{ let response = await axios
            .get(`https://api.github.com/users/${data.username}`);
                return response.data;

        } catch (error){
            console.log(error)
        }
    }
};

module.exports = fetch;