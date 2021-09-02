// 별찍기-직각삼각형

let height = 5;
let star = '';

for (let i = 1; i <= height; i += 1) {

    for(let j = 1; j <= i; j += 1) { 
        star += '*';
    }
    star += '\n';
}

console.log(star);