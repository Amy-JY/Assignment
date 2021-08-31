// 별찍기-정사각형

let n = 5;
let star = '';

for (let a = 1; a <= n; a++) {
//external loop

    for(let b = 1; b <= n; b++) { 
        star += '*';
    //adding asterisks
    }
    star += '\n';
    //jumping to the next line
}

console.log(star);
//print 'star'