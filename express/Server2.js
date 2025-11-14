const { name } = require('ejs')
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded())
var user1 = [
    {
        id: '1',
        name: 'nirali'
    }
]

app.get('/', (req, res) => {
    res.render('Home2', { user1 })
})

app.post('/insertt', (req, res) => {
    const { id, name } = req.body
    const obj1 = { id, name }
    user1.push(obj1)
    res.redirect('/')
})

app.get('/deletee', (req, res) => {
    const id = req.query.id
    const ans = user1.filter((el, i) => {
        return el.id !== id
    })
    user1 = ans
    res.redirect('/')
})

app.get('/editt', (req, res) => {
    const id = req.query.id
    const ans = user1.filter((el, i) => {
        return el.id == id
    })
    res.render('Edit2',{editDataa:ans[0]})
})

app.post('/editDataa',(req,res)=>{
    const {id,name}=req.body
    user1.forEach(u=>{
        if(u.id==id){
            u.name=name
        }
    })
    res.redirect('/')
})

app.listen(7800, () => {
    console.log('server listen')
})
