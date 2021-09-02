// 별찍기-정사각형

let height = 5;
let star = '';

for (let i = 1; i <= height; i += 1) {

    for(let j = 1; j <= height; j += 1) { 
        star += '*';
    //adding asterisks
    }
    star += '\n';
    //jumping to the next line
}

console.log(star);