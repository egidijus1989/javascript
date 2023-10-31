let vardas = 'Bilas';
console.log(vardas.length);
console.log(vardas[3]);
console.log(vardas.indexOf('las'));
console.log(vardas.slice(0,2));
console.log(vardas.toLowerCase());
console.log(vardas.toUpperCase());
let pakeistasvardas = vardas.replace("Bi", "Gi");
console.log(pakeistasvardas)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let data = 123;
if(data === 254){
    console.log('ok')
}else{
    console.log('False')
}
////////////////////////////////////////////////

const lang = 'lt';

switch(lang){
    case 'lt':
        console.log('Sveiki');
        break;
    case 'en':
        console.log('Hello');
        break;
    default:
        console.log('nesupratau kalbos');
}
///////////////////////////////////////////////////////////////

let weather = 20;
let userName = weather>19 ? "Andrius" : "karolis";
console.log(userName);

////////////////////////////////////////////////////////////////////////

let items = ['Phone', 'Pencil', 'Box', 'Table'];


for(let i = 0; i < items.length; i++) {
    console.log(items[i])
}

console.log("/////////////////////////////////////////////////////////////////////////////////////")

for(let item in items){
    console.log(items[item]);
}

console.log("/////////////////////////////////////////////////////////////////////////////////////")


for(let item of items){
    console.log(item)
}

console.log("/////////////////////////////////////////////////////////////////////////////////////")

let user = {
    id:1,
    name:"Jonas",
    email:"jonux123@gmail.com",
    role:"Admin"
}

for(let userData in user){
    console.log(`${userData} = ${user[userData]}`)
}

console.log("/////////////////////////////////////////////////////////////////////////////////////")

let students = [
    {
        id:1,
        firstName:"Tadas",
        lastname:"Tadauskas",
        email:"tadas.tadauskas.@stud.kitm.lt",
        group:"studentas",
        marks:[
            {
                subject:"Programing",
                mark:8
            },
            {
                subject:"IT",
                mark:10
            },
            {
                subject:"Math",
                mark:6
            }
        ]
    },
    {
        id:2,
        firstName:"Ieva",
        lastname:"Ievaite",
        email:"ieva.ievaite.@stud.kitm.lt",
        group:"studentas",
        marks:[
            {
                subject:"Programing",
                mark:7
            },
            {
                subject:"IT",
                mark:9
            },
            {
                subject:"Math",
                mark:5
            }
        ]
    },
    {
        id:3,
        firstName:"Jonas",
        lastname:"Jonaitis",
        email:"jonas.jonaitis.@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject:"Programing",
                mark:6
            },
            {
                subject:"IT",
                mark:8
            },
            {
                subject:"Math",
                mark:4
            }
        ]
    },
    {
        id:4,
        firstName:"Ona",
        lastname:"Onaite",
        email:"ona.onaite.@stud.kitm.lt",
        group:"students",
        marks:[
            {
                subject:"Programing",
                mark:5
            },
            {
                subject:"IT",
                mark:7
            },
            {
                subject:"Math",
                mark:3
            }
        ]
    },
    {
        id:5,
        firstName:"Petras",
        lastname:"Petrauskas",
        email:"petras.petrauskas.@stud.kitm.lt",
        group:"students",
        marks:[
            {
                subject:"Programing",
                mark:4
            },
            {
                subject:"IT",
                mark:6
            },
            {
                subject:"Math",
                mark:2
            }
        ]
    }
]
console.log("Studentai:")
console.log("-------------------------------------------")
for(let student of students){
    console.log(`${student.id}`)
    console.log(`${student.firstName}`)
    console.log(`${student.lastname}`)
    console.log(`${student.email}`)
    console.log(`${student.group}`)
    console.log("-------------------------------------------")
}

console.log("/////////////////////////////////////////////////////////////////////////////////////")

console.log("Studentai:");
console.log("-------------------------------------------");
for(let student of students){
    console.log("-------------------------------------------")
    for(let studentData in student){
        if(studentData == "group"){
            console.log(`Grupe: ${student[studentData]}`)
        }
        else {
            if (studentData == "marks"){
                console.log('Ivertinimai:');
                for (marks of student[studentData]){
                    console.log(`${marks.subject}:${marks.mark}`)
                }
            }
            else{
                console.log(student[studentData]);
            }
        }
    }
}