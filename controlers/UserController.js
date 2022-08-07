const { UserService } = require('../services');

module.exports = {
    create: async (req, res) => {
        const { email } = req.body;
        try {
            const userExist = await UserService.findOneByEmail(email);
            if(userExist) res.status(400).json ({ message:"Email already taken"})
            const user = await UserService.create(req.body)
            res.status(201).json(user)
        } catch (err) {  
            res.status(400).json(err);
        }
    }
}