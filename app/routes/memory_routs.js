// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const requireToken = passport.authenticate('bearer', { session: false })
//هنا الاستدعاء حق المودل
const Memory = require ('../models/memories')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404


const route = express.Router()



route.post('/memories', requireToken, (req,res,next)=>{
    Memory.create(req.body.memory) // {asdjkds}
    .then(
        memory=>res.json(memory)
    )
    .catch(next)
})

route.put('/memories/:id', requireToken, (req,res,next)=>{
    Memory.update({_id:req.params.id},{$set: {
        title: req.body.memory.title,
        image: req.body.memory.image,
        description: req.body.memory.description,
        date: req.body.memory.date,
    }}) // {asdjkds}
    .then(
        memory=>res.json(memory)
    )
    .catch(next)
})

route.delete('/memories/:id', requireToken, (req,res,next)=>{
    Memory.deleteOne({_id:req.params.id}) // {asdjkds}
    .then(
        memory=>res.json(memory)
    )
    .catch(next)
})

route.get('/memories', requireToken, (req,res,next)=>{
    Memory.find() // {asdjkds}
    .then(
        memories=>res.json(memories)
    )
    .catch(next)
})
 

route.get('/memories/:id', requireToken, (req,res,next)=>{
    Memory.findById(req.params.id) // {asdjkds}
    .then(
        memory=>res.json(memory)
    )
    .catch(next)
})


module.exports = route