const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.static(__dirname+"/public"))

var student = [
    {
        id: '1',
        name: 'nirali'
    },
    {
        id: '2',
        name: 'niru'
    }
]


app.get('/', (req, res) => {
    // res.send('home page')
    res.render('Home', { student })
})


app.get('/index', (req, res) => {
    // res.send('home page')
    res.render('index')
})

app.post('/inertdata', (req, res) => {
    const { id, name } = req.body

    const obj = { id, name }

    student.push(obj)

    res.redirect('/')

})

app.get("/delete", (req, res) => {
    const id = req.query.id
    const ans = student.filter((el, i) => {
        return el.id !== id
    })
    student = ans
    res.redirect("/")
})

app.get("/edit", (req, res) => {
    const id = req.query.id
    const ans = student.filter((el, i) => {
        return el.id == id
    })
    // console.log(ans[0].id)
    res.render('edit', { editData: ans[0] })
})

app.post('/editData', (req, res) => {
    const { id, name } = req.body

    // const obj = { name }

    // student.push(obj)

    student.forEach(stud => {
        if (stud.id == id) {
            stud.name = name
        }
    })

    res.redirect('/')

})




app.listen(3009, () => {
    console.log('server listen')
})  