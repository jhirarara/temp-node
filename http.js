const { error } = require('console')
const http=require('http')

const port=('3000')



const server=http.createServer((req,res)=>{



res.write('123')


res.end()








})






server.listen(port,(error)=>{


if (error){

    console.log(error)
}

else{


    console.log(`Server is running at http://localhost:${port}/`);
}






})


