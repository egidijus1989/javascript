// let vardas = 'Bilas';
// console.log(vardas.length);
// console.log(vardas[3]);
// console.log(vardas.indexOf('las'));
// console.log(vardas.slice(0,2));
// console.log(vardas.toLowerCase());
// console.log(vardas.toUpperCase());
// let pakeistasvardas = vardas.replace("Bi", "Gi");
// console.log(pakeistasvardas)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let data = 123;
// if(data === 254){
//     console.log('ok')
// }else{
//     console.log('False')
// }
////////////////////////////////////////////////

// const lang = 'lt';

// switch(lang){
//     case 'lt':
//         console.log('Sveiki');
//         break;
//     case 'en':
//         console.log('Hello');
//         break;
//     default:
//         console.log('nesupratau kalbos');
// }
///////////////////////////////////////////////////////////////

// let weather = 20;
// let userName = weather>19 ? "Andrius" : "karolis";
// console.log(userName);

////////////////////////////////////////////////////////////////////////

// let items = ['Phone', 'Pencil', 'Box', 'Table'];


// for(let i = 0; i < items.length; i++) {
//     console.log(items[i])
// }

console.log("/////////////////////////////////////////////////////////////////////////////////////")

// for(let item in items){
//     console.log(items[item]);
// }

console.log("/////////////////////////////////////////////////////////////////////////////////////")


// for(let item of items){
//     console.log(item)
// }

console.log("/////////////////////////////////////////////////////////////////////////////////////")

// let user = {
//     id:1,
//     name:"Jonas",
//     email:"jonux123@gmail.com",
//     role:"Admin"
// }

// for(let userData in user){
//     console.log(`${userData} = ${user[userData]}`)
// }

console.log("/////////////////////////////////////////////////////////////////////////////////////")

// let students = [
//     {
//         id:1,
//         firstName:"Tadas",
//         lastname:"Tadauskas",
//         email:"tadas.tadauskas.@stud.kitm.lt",
//         group:"studentas",
//         marks:[
//             {
//                 subject:"Programing",
//                 mark:8
//             },
//             {
//                 subject:"IT",
//                 mark:10
//             },
//             {
//                 subject:"Math",
//                 mark:6
//             }
//         ]
//     },
//     {
//         id:2,
//         firstName:"Ieva",
//         lastname:"Ievaite",
//         email:"ieva.ievaite.@stud.kitm.lt",
//         group:"studentas",
//         marks:[
//             {
//                 subject:"Programing",
//                 mark:7
//             },
//             {
//                 subject:"IT",
//                 mark:9
//             },
//             {
//                 subject:"Math",
//                 mark:5
//             }
//         ]
//     },
//     {
//         id:3,
//         firstName:"Jonas",
//         lastname:"Jonaitis",
//         email:"jonas.jonaitis.@stud.kitm.lt",
//         group:"students",
//         marks: [
//             {
//                 subject:"Programing",
//                 mark:6
//             },
//             {
//                 subject:"IT",
//                 mark:8
//             },
//             {
//                 subject:"Math",
//                 mark:4
//             }
//         ]
//     },
//     {
//         id:4,
//         firstName:"Ona",
//         lastname:"Onaite",
//         email:"ona.onaite.@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject:"Programing",
//                 mark:5
//             },
//             {
//                 subject:"IT",
//                 mark:7
//             },
//             {
//                 subject:"Math",
//                 mark:3
//             }
//         ]
//     },
//     {
//         id:5,
//         firstName:"Petras",
//         lastname:"Petrauskas",
//         email:"petras.petrauskas.@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject:"Programing",
//                 mark:4
//             },
//             {
//                 subject:"IT",
//                 mark:6
//             },
//             {
//                 subject:"Math",
//                 mark:2
//             }
//         ]
//     }
// ]
// console.log("Studentai:")
// console.log("-------------------------------------------")
// for(let student of students){
//     console.log(`${student.id}`)
//     console.log(`${student.firstName}`)
//     console.log(`${student.lastname}`)
//     console.log(`${student.email}`)
//     console.log(`${student.group}`)
//     console.log("-------------------------------------------")
// }

console.log("/////////////////////////////////////////////////////////////////////////////////////")


// console.log("Studentai:");
// console.log("-------------------------------------------");
// for(let student of students){
//     console.log("-------------------------------------------")
//     for(let studentData in student){
//         if(studentData == "group"){
//             console.log(`Grupe: ${student[studentData]}`)
//         }
//         else {
//             if (studentData == "marks"){
//                 console.log('Ivertinimai:');
//                 for (marks of student[studentData]){
//                     console.log(`...${marks.subject}:${marks.mark}`)
//                 }
//             }
//             else{
//                 console.log(student[studentData]);
//             }
//         }
//     }
// }
console.log("/////////////////////////////////////////////////////////////////////////////////////")

// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis'];
// console.log(names.join('----> '))

// let string = "The quick brown fox jumps over the lazy dog."
// console.log(string.split(' '))


// names.push('Giedrius'); // prideda is galo
// names.pop(); // pasalina is galo
// names.unshift("Kristina"); // prideda is priekio
// names.shift(); //pasalina is priekio
// names.splice(2, 0, "Gabrielius"); // prideda, atima is masyvo vidurio
// console.log(names);

console.log("/////////////////////////////////////////////////////////////////////////////////////")

//reikia sukurti sveciu saraso aplikacija
//paleidus programa issoka langas ir paklausia, kiek sveciu bus partje
// ivedus skaiciu rodomas kitas lamgas, kur reikiaivesti sveciovarda
//langas kartojamas tiek kartu kiek reikia pakviesti sveciu
//baigus ivedima ivedamas sveciu sarasas
//bonus uzduotis:
//sukurti masyva blacklist. Jeigu svecias yra blacklistei saras jo neitraukiamas

// let skaicius = prompt('Iveskite sveciu skaiciu');
// let skaicius2 = parseInt(skaicius);
// let sveciai = [];
// let svecias;
// let blacklist = ['Jonas', 'Petras'];
// for (let i = 0; i < skaicius2; i++){
//     svecias = prompt('Iveskite svecio varda');
//     if (blacklist.includes(svecias))
// }
// console.log("Sveciai: ")

// for(let vardai of arrx){
//     console.log(vardai)
// }
console.log("/////////////////////////////////////////////////////////////////////////////////////")

// function sayHi(a){
//     return a*2;
// }
// console.log(sayHi(5))

// const calc = function(...numbers) {
//     return numbers.reduce((prev, current)=>prev*current )
// }

// console.log(calc(5,6,7,8,9,10));

console.log("/////////////////////////////////////////////////////////////////////////////////////")


// function studentas(x){
//     let vardas = prompt('Iveskite studento varda');

//     for(let student of students){
//         if (student.firstName == vardas) {
//             for(let studentData in student){
//                 if(studentData == "group"){
//                     console.log(`Grupe: ${student[studentData]}`)
//                 }
//                 else {
//                     if (studentData == "marks"){
//                         console.log('Ivertinimai:');
//                         for (marks of student[studentData]){
//                             console.log(`...${marks.subject}:${marks.mark}`)
//                         }
//                     }
//                     else{
//                         console.log(student[studentData]);
//                     }
//                 }
//             }
//         }
//         else {
//             console.log("Tokio studento nera...")
//         }
//     }
// }
// studentas()

console.log("/////////////////////////////////////////////////////////////////////////////////////")

// let knyguKatalogas =
// {
//         grozineLiteratura: [
//         {
//             ISBN: "GR1234K",
//             leidimoMetai: 2019,
//             pavadinimas: "Metai metuose",
//             puslapiuSkaicius: 777
//         },
//         {
//             ISBN: "GR1754K",
//             leidimoMetai: 2021,
//             pavadinimas: "Tyrlaukiai",
//             puslapiuSkaicius: 325
//         },
//         {
//             ISBN: "GR3334K",
//             leidimoMetai: 2023,
//             pavadinimas: "Ufonautai",
//             puslapiuSkaicius: 280
//         },
//         {
//             ISBN: "GR1234K",
//             leidimoMetai: 2023,
//             pavadinimas: "Metai metuose",
//             puslapiuSkaicius: 555
//         },
//         {
//             ISBN: "GR1234K",
//             leidimoMetai: 2015,
//             pavadinimas: "Metai metuose",
//             puslapiuSkaicius: 782
//         },
//         {
//             ISBN: "GR1234K",
//             leidimoMetai: 2020,
//             pavadinimas: "Metai metuose",
//             puslapiuSkaicius: 198
//         },
//     ],
//         istorija: [
//             {
//                 ISBN: "GR1114K",
//                 leidimoMetai: 2023,
//                 pavadinimas: "Vytautas",
//                 puslapiuSkaicius: 323
//             },
//             {
//                 ISBN: "GR9234K",
//                 leidimoMetai: 2022,
//                 pavadinimas: "Gediminas",
//                 puslapiuSkaicius: 350
//             },
//             {
//                 ISBN: "GR9934K",
//                 leidimoMetai: 2020,
//                 pavadinimas: "Mindaugas",
//                 puslapiuSkaicius: 199
//             },
//     ],
//         saviugda: [
//             {
//                 ISBN: "GR11188K",
//                 leidimoMetai: 2023,
//                 pavadinimas: "Namu finansai",
//                 puslapiuSkaicius: 323
//             },
//             {
//                 ISBN: "GR9774K",
//                 leidimoMetai: 2019,
//                 pavadinimas: "Sodininkyste",
//                 puslapiuSkaicius: 350
//             },
//             {
//                 ISBN: "GR5234K",
//                 leidimoMetai: 2020,
//                 pavadinimas: "Pats sau",
//                 puslapiuSkaicius: 199
//             }
//         ]
//     }

// for (let kategorija in knyguKatalogas){
//     console.log(`${kategorija} (${knyguKatalogas[kategorija].length} knygos)`);
//     console.log("---------------")
//     for(knyga of knyguKatalogas[kategorija]){
//         console.log(`ISBN: ${knyga.ISBN}`);
//         if (knyga.leidimoMetai == 2023){
//             console.log(`Leidimo metai: ${knyga.leidimoMetai} ------- Nauja Knyga`);
//         }
//         else{
//             console.log(`Leidimo metai: ${knyga.leidimoMetai}`);
//         }
//         console.log(`Pavadinimas: ${knyga.pavadinimas}`);
//         console.log(`Puslapiu skaicius: ${knyga.puslapiuSkaicius}`);
//         console.log("---------------")
//     }
// }
console.log("/////////////////////////////////////////////////////////////////////////////////////")

