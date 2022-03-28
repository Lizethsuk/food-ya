const jwt = require('jsonwebtoken');


const objDatos = {
    id : 123456,
    name: 'fer',
};
const token = jwt.sign(objDatos, 'secreto');
const tokenDecode = jwt.verify(token, 'secreto');
console.log(tokenDecode.id);