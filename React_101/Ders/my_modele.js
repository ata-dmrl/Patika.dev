function topla(a,b){
    return a+b;
};
const isim =(name) =>{
    console.log(`Merhaba ${name}`);
};
function hello() {
    console.log("Hello world");
};
export const user = {
    name :"Ali",
    surname:"Mehmet"
};
export const users = [{
    name :"Ali",
    surname:"Mehmet"
},
{
    name :"Ayşe",
    surname:"Fatma"
}]
export {topla,hello,isim}
// export default topla; //başka dosyada kullanmak için yayılama yaptık.