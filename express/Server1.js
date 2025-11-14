const express=require('express')

const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded())
var student1=[
    // {
    //     id:'1',
    //     name:'nirali'
    // },
    // {
    //     id:'2',
    //     name:'dhruvi'
    // }
]

app.get('/',(req,res)=>{
    // res.send('home page')
    res.render('Home1',{student1})
})


app.post('/insert',(req,res)=>{
    const {name}=req.body
    const id=(student1.length+1).toString()
    const obj={id,name}
    student1.push(obj)
    res.redirect('/')
})

app.get("/delete", (req, res) => {
    const id = req.query.id
    const ans = student1.filter((el, i) => {
        return el.id !== id
    })
    student1 = ans
    res.redirect("/")
})

app.get("/edit1", (req, res) => {
    const id = req.query.id
    const ans = student1.filter((el, i) => {
        return el.id == id
    })
    // console.log(ans[0].id)
    res.render('edit1', { editData1: ans[0] })
})

app.post('/editData1', (req, res) => {
    const { id, name } = req.body
    student1.forEach(stud => {
        if (stud.id == id) {
            stud.name = name
        }
    })

    res.redirect('/')

})

app.listen(3005,()=>{
    console.log('server1 listen')
})