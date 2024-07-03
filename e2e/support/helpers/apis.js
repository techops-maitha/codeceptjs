const axios = require('axios')

module.exports = {
    async getToken(data) {
        const response = await axios.post('',
            {
                "login": data.email,
                "password": data.pass
            })
        const token = response.data.token
        return token
    },
}
