// 별찍기-정삼각형

let height = 5;
let star = '';

for (let i = 1; i <= height; i += 1) {

    for (let j = 1; j <= height - i; j += 1) {
        star += ' ';
    }
    for(let k = 1; k <= i * 2 - 1; k += 1) { 
        star += '*';
    }
    star += '\n';
}

console.log(star);