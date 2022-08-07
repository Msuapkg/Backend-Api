require('dotenv').config();
require('./database'); 
const {api, PORT} =require('./api')



api.listen(PORT, () =>  console.log(`Hola desde el puerto: ${PORT}`));