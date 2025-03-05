const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.use(express.static('static'))



app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.json({
        'message':'hello the code ends here'
    })
})

app.listen(port,()=>{
    console.log("this server is running")
})