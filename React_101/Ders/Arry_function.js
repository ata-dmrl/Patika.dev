// const users = ["ali","ahmet","veli"]; //users dizi diğer adıyla
// users.push("ayşe");// aray elemanına eleman ekler 
// users.push("fatma");

// console.log(users);
// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     console.log(element);
    
// }
// users.map((item) => console.log(item));
//for ile aynı mantık çalışır ama daha kısa ve daha kolaydır. 

const users = [{
    name: "Ali",
    surname: "Veli",
    age: 30
},
{
    name: "Ahmet",
    surname: "Mehmet",
    age: 25
}];

// users.map((item) => console.log(item.surname));

// const result = users.filter((item) => item.name === "Ali");
// const result2 = users.filter((item) => item.name === "Ali" && item.age > 20 );
// console.log(result);
// console.log(result2);
//koşul ekledik eğer ali siminde bir kullancı varsa bunu bana getir gibisinden bir sorgu attık
// filter yerine find() de yazılabilir ama find() sadece ilk bulduğu sonucu getirir filter ise tüm sonuçları getirir.

// const sums = users.some(item => item.age === 30);
// console.log(sums);
// belirtilen bir koşulda eleman varsa true yoksa false döndürür

// const every = users.every(item => item.age > 30);
// console.log(every);
// belirtilen bir koşulda tüm elemanlar sağlıyorsa true sağlamıyorsa false döndürür

const meyveler = ["ayva","elma","Muz"];
const isInclude = meyveler.includes("elma");
console.log(isInclude);
// includes() metodu bir dizide belirli bir öğenin var olup olmadığını kontrol eder ve true veya false döndürür. 
