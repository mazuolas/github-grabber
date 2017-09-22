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

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err){
    console.log(err);
    return;
  }
  const searchLetter = process.argv[2];
  const animals = data.split('\n');
  console.log(animals);
})
