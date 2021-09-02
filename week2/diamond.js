// 별찍기-마름모

let height = 5;
let star = '';

for (let i = 1; i <= height; i += 1) {
//external loop 1

    for (let j = 1; j <= height - i; j += 1) {
        star += ' ';
    }

    for(let k = 1; k <= i * 2 - 1; k += 1) { 
        star += '*';
    }

    star += '\n';
}

for (let i = 1; i <= height; i += 1) {
//external loop 2

    for (let j = 1; j < i + 1; j += 1) {
        star += ' ';
    }
    for(let k = 1; k <= (height - i) *2 - 1; k += 1) {
        star += '*';
    }

    star += '\n';
}

console.log(star);