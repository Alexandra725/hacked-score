const fs = require('fs');

let output = []
const input = fs.readFileSync('score.csv')
const data = input.toString().split(/\n/)
data.forEach(row => {
    const score = []
    const [...regex] = row.split(',')[1]
    const scoreHacked = row.split(',')[2];
      [...scoreHacked].forEach(i => {
          const elem = [...regex].indexOf(i);
          score.push(elem);
          
        });
        const string = score.concat().join('');
        output.push(`${row.split(',')[0]}: ${ string }, \n`)
  } 
  );
fs.writeFileSync('output.csv', output);