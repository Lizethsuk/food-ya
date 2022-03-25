module.exports = (err,req,res,next)=>{
    //console.log('este es el error',err.name)
    if(err.name === 'CastError'){
        res.status(400).send({error: 'id incorrect'})
    } else if (err.name === 'JsonWebTokenError'){
        res.status(401).send({error: 'no autorizado'})
    }
    else{
        res.status(500).end()
    }
}