// setTimeout(()=>{
//     console.log('おーい');
// }, 3000);

const id =setInterval(() => {
    console.log(Math.random());
}, 2000);

clearInterval(id);
