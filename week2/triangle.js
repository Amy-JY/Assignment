// 별찍기-정삼각형

let n = 5;
let star = '';

for (let a = 1; a <= n; a++) {
//external loop 1

    for (let c = 1; c <= n - a; c++) {
        star += ' ';
    //adding spaces - decreasing
    }

    for(let b = 1; b <= a * 2 - 1; b++) { 
        star += '*';
    //adding asterisks - increasing
    }

    star += '\n';
    //jumping to the next line
}

console.log(star);
//print 'star'