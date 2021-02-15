console.info("soy un info");
console.log("soy un log");
console.log("soy un warn");
console.error("soy un error");

console.log("%cAlgo ha ido mal","color: #111;font-size: 32px; background:red; font-weight:bold;");

console.log("%cAlgo ha ido muy mal!",`
    box-sizing: content-box;
    border: none;
    font: normal 80px/normal "Anton", Helvetica, sans-serif;
    color: rgb(255, 0, 125);
    line-height: 200px;
    text-overflow: clip;
    text-shadow: 0 0 20px rgb(254,152,1) , 10px -10px 30px rgb(254,136,3) , -20px -20px 40px rgb(255,74,2) , 20px -40px 50px rgb(236,18,2), -20px -60px 60px rgb(205,0,6), 0 -80px 70px rgb(151,55,2), 10px -90px 80px rgb(69,27,1);
`);

// intervalos

console.time("primer intervalo");
console.time("segundo intervalo");
setTimeout(() => {
    console.timeEnd("primer intervalo");
}, 1000);
setTimeout(() => {
    console.timeEnd("segundo intervalo");
}, 1500);


// tablas

const pescados =[
    {
        Nombre: "Congrio común",
        Orden: "Anguilliformes",
        Suborden: "Congroidei"
    },
    {
        Nombre: "Merluza europea",
        Orden: "Gadiformes",
        Suborden: "Paracanthopterygii"
    },
    {
        Nombre: "Txitxarro",
        Orden: "Perciformes",
        Suborden: "Percoidei"
    }];

console.table(pescados);

// console.group

const people = ["Darth vader", "Leia Organa","Luke Akywalker","Boba Fett", "Padmé Amidala", "Han Solo", "Kylo Ren"];
console.group("Personajes");
people.map(p=>console.log(p));
console.groupEnd();

