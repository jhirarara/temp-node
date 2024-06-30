const { error } = require('console')
const http=require('http')
const fs=require('fs')
const EventEmitter = require('node:events');
const { emit } = require('process');
const eventEmitter = new EventEmitter();

const port=('3000')


const start= async ()=>{


    try{
        const first= await fs.readFile('./txt1.txt','utf8');
        const second= await fs.readFile('./txt2.txt','utf8');
        
        console.log(first);
        
        
        console.log(second);
        
        }
        catch(error){
            console.log('the error is '+error);
        
        }
        





}



eventEmitter.once('eventName', (arg1, arg2) => {
    console.log(`Event triggered with arguments: ${arg1}, ${arg2}`);
  });


  eventEmitter.emit('eventName', 'arg1', 'arg2');

  eventEmitter.emit('eventName', 'arg1', 'arg2');




const helloWorld=()=>{

console.log('hello');



}


eventEmitter.on('Hello',helloWorld);
eventEmitter.emit('Hello');


eventEmitter.off('Hello',helloWorld);

eventEmitter.emit('Hello');






const person=()=>({

    name:'qwe',
    age:123,
    
    
    })


    console.log(person().name)








    const server=http.createServer((req,res)=>{
        const readableStream = fs.createReadStream('./example.txt', 'utf8');
        readableStream.on('open',()=>{

            readableStream.pipe(res)

})




    });








server.listen(port,(error)=>{


if (error){

    console.log(error)
}

else{


    console.log(`Server is running at http://localhost:${port}/`);
}






})


/*


console.log('1st')

setTimeout(()=>{



console.log('2')






},2000)
setImmediate(() => {
    console.log('setImmediate');
  });
  

 console.log('3')

console.log('4')





const hello=()=>console.log('hello')

setTimeout(hello,5000);



var counter=0;




const time =setInterval(()=>{



},1000)


try{


console.log(k)






}
catch(error){

console.log('errorqru')


}
*/
