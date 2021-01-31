let n = [
    { name: 'a', fur: 5 },
    { name: 'b', fur: 6 },
    { name: 'c', fur: 7 },
    { name: 'd', fur: 8 }
];
let m = 3;
let total = 0;

for (let i = 0; i < m; i++) {

    for (let j = 0; j < n.length; j++) {
        n[j].fur += 2;
    }

    let temp = 0;

    for (let j = 0; j < n.length; j++) {
        if (n[j].fur > temp && n[j].fur > 3) {
            temp = n[j].fur;
        }
    }

    // for (let j = 0; j < n.length; j++) {
    //     if (n[j].fur == temp) {
    //         n[j].fur = 1;
    //     }
    // }

    total += temp - 1;
}

console.log('Khối lượng lông đã tỉa là: ' + total);