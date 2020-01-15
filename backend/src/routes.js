const { Router } = require('express');
const axios = require('axios');
const routes =  Router();
routes.post('/devs', async(request,response)=>{        
    const {github_username} = request.body; 

    const  ApiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(ApiResponse.data);
    return response.json({ message : 'Hellow word omnss'});
});

module.exports = routes;