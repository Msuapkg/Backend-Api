const NODE_ENV = process.env.MODE_ENV || 'staging';

const config ={
    staging: {
        MONGO_URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@prueba1.w6ka5.mongodb.net/mundo?retryWrites=true&w=majority`
    },
    production: {
        MONGO_URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@prueba1.w6ka5.mongodb.net/mundo?retryWrites=true&w=majority`
    },
};

module.exports = config[NODE_ENV]; 