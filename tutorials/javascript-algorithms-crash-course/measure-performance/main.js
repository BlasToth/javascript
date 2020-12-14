function sumUp(n) {
    let result = 0;
for (let i = 1; i <= n; i++) {
    result += i;
}
return result;
}

let start = 0;
let end = 0;

start = performance.now();
sumUp(5);
end = performance.now();
end - start;

/*
start = performance.now();
sumUp(10);
end = performance.now();
end - start
0.0050000089686363935
start = performance.now();
sumUp(20);
end = performance.now();
end - start
0.00999998883344233
start = performance.now();
sumUp(100);
end = performance.now();
end - start
0.010000003385357559
start = performance.now();
sumUp(1000);
end = performance.now();
end - start
0.029999995604157448
start = performance.now();
sumUp(10000);
end = performance.now();
end - start
0.23499999952036887
start = performance.now();
sumUp(100000);
end = performance.now();
end - start
4.7950000007404014
start = performance.now();
sumUp(100000);
end = performance.now();
end - start
1.1150000063935295
start = performance.now();
sumUp(1000000);
end = performance.now();
end - start
2.2200000094017014
start = performance.now();
sumUp(10000000);
end = performance.now();
end - start
15.515000006416813
start = performance.now();
sumUp(10000000);
end = performance.now();
end - start
16.094999999040738
start = performance.now();
sumUp(100000000);
end = performance.now();
end - start
151.57000000181142
start = performance.now();
sumUp(100000000);
end = performance.now();
end - start
151.70999999099877
start = performance.now();
sumUp(1000000000);
end = performance.now();
end - start
1529.0200000017649
start = performance.now();
sumUp(1000000000);
end = performance.now();
end - start
1503.6099999997532
*/
