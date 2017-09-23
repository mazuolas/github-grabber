const fs = require('fs');

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err){
//     console.log(err);
//     return
//   }
//   console.log(data);
//
// })
//
// fs.writeFile('./example.txt', 'Hello World', (err) => {
//   console.log(err);
// });
 // console.log(process.argv);

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err){
//     console.log(err);
//     return;
//   }
//   const searchLetter = process.argv[2];
//   const animals = data.split('\n');
//   let returnAnimals = [];
//   animals.forEach((animal) =>{
//     if (animal[0].toUpperCase() === searchLetter.toUpperCase()){
//       returnAnimals.push(animal);
//     }
//   });
//   fs.writeFile(`${searchLetter}_animals.txt`, returnAnimals.join('\n'), (err) =>{
//     console.log(err);
//   });
// });

const http = require('http')

const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
})

server.listen(8000, () => console.log("I'm listening on port 8000!"))
