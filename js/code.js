// let t = "Bugun rus tili zo'r bo'ldi"
// let s = t.split(" ")
// for (let i=0; i<s.length; i++) {
//     console.log((i+1),"-",s[i])
// }
// let t = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, vero, labore veniam neque illum odio autem ipsam quia inventore a dolore itaque. Enim quod eveniet molestias ad. In, ad."
// let s = t.split(" ")
// for (let i=0; i<s.length; i++) {
//     if (s[i].startsWith("A") || s[i].startsWith("a"))
//     console.log((i+1),"-",s[i])
// }
// wtf = () => {
//     document.getElementById("qwert").value
//     let s = t.split(" ")
//     let text = ""
//     for (let i=0; i<s.length; i++) {
//         if (s[i].startsWith("A") || s[i].startsWith("a"))
//         text = text + "<li>" + s[i] + "</li>"
//     }
//     document.getElementById("ul").innerHTML=text
//     console.log(document.getElementById("ul"))
// }

// let text = ''
// wtf = () => {
//     let t = document.getElementById("qwert").value
//     text = "<p>" + t + "</p>"
//     document.getElementById("ul").innerHTML=text
// }

// class Car {
//     constructor (odi, yili,turi) {
//         this.odi = odi
//         this.yili = yili
//         this.turi = turi
//     }
// }
// let a = []
// ok = () => {
//     let odi = document.getElementById("odi").value
//     let yili = document.getElementById("yili").value
//     let turi = document.getElementById("turi").value
//     let table = ""
//     let object = new Car(odi,yili,turi)
//     a.push(object)
//     for(let i=0; i<a.length; i++) {
//         table += "<tr>" + "<td>" + a[i].odi + "</td>" + "</tr>" + "<tr>" + "<td>" + a[i].yili + "</td>" + "</tr>"  + "<tr>" + "<td>" + a[i].turi + "</td>" +"</tr>"
//     }
//     document.getElementById("table-info").innerHTML=table
// }

    // let t = "Karimov Sharipov Feruzov Marjonova Komiljonova"
    // let s = t.split(" ")
    // for (let i=0; i<s.length; i++) {
    //     if (s[i].endsWith("V") || (s[i].endsWith("v")))
    //     console.log(s[i])
    // }

// Ok = () => {
//     let username = document.getElementById("username").value
//     let t = username
//     let s = t.split(" ")
//     let text = ""
//     for (let i=0; i<s.length; i++) {
//         if (s[i].endsWith("V") || s[i].endsWith("v")) {
//             text += "<li>" + s[i] + "</li>"
//         }
//     }
//     document.getElementById("ul").innerHTML=text
// }
    
// class Human {
//     constructor (name,birthday,usyear) {
//         this.name = name
//         this.birthday = birthday 
//         this.usyear = usyear
//     }
// }
// let a = []
// ok = () => {
//     let name = document.getElementById('name').value
//     let bday = document.getElementById('bday').value
//     let text = ''
//     let data = new Date()
//     let byear = parseInt(data.getFullYear())-parseInt(bday.split('-')[0])
//     let object = new Human(name,bday,byear)
//     a.push(object)

//     for (let i=0; i<a.length; i++) {
//         text += '<tr>' + '<td>' + a[i].name + '</td>' + '<td>' + a[i].birthday + '</td>' + '<td>' + a[i].usyear + '</td>' + '</tr>'
//     }
//     document.getElementById('tab').innerHTML += text
// }

// class Human {
//     constructor(name,year) {
//         this.name = name
//         this.year = year
//     }
// }
// let a = []
// ok = () => {
//     let text = ''
//     let name = document.getElementById('name').value
//     let bday = document.getElementById('bday').value
//     let object = new Human(name,bday)
//     a.push(object)
//     for (let i=0; i<a.length; i++) {
//         if (bday>=2015) {
//             text = '<tr>' + '<td>' + a[i].name + '</td>' + '<td>' 
            //    + a[i].year + '</td>' + '</tr>'
//         }
//     }
//     document.getElementById('tab').innerHTML = text
// }

// <body onload="container()"> 
// let a = []
// container = () => {
//     document.getElementById('tab').border = 1
//     document.getElementById('tab').style.borderCollapse = 'collapse'
//     let humans = JSON.parse (
//         '['
//             + '{"fio" : "Sharipov Shahzod", "age" : 21, "birthday" : 2000},'
//             + '{"fio" : "Jumaniyozov Dilshod", "age" : 22, "birthday" : 1999},'
//             + '{"fio" : "Fahriddinov Komiljon", "age" : 36, "birthday" : 1987},'
//             + '{"fio" : "Otaniyozov Ilhom", "age" : 32, "birthday" : 1991}' +
//         ']'
//     )
//     table = ''
//     for (let i=0; i<humans.length; i++) {
//         table += '<tr>' + '<td>' + humans[i].fio + '</td>' + '<td>' + humans[i].age + '</td>' + '<td>' + humans[i].birthday + '</td>' + '</tr>'
//     }
//     document.getElementById('tab').innerHTML = table
// }

abcd = () => {
    b = document.getElementById('tuman').value
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+b+'&appid=11383a422946d6690d8e97982829c739&units=metric')
    .then(function(response){
        return response.json()
    })
    .then(function(down) {
        let a1 = down.weather[0].main // havo holati
        let a3 = down.wind.speed // shamool tezligi
        let a4 = parseInt(a3) // shamol tezligi qoldiqsiz

        if (a1.startsWith("Clear")){
            a2='<i class="fas fa-sun">Havo Ochiq</i>'
        }
        else {
            a2= '<i class="fas fa-cloud-sun"></i>Bulutli'
        }
        let a9 = down.main.temp // havo harorati
        let a10 = parseInt(a9) // havo holati qoldiqlarsiz
         console.log(down)
         document.getElementById('temp').innerHTML = a10
         document.getElementById('windspeed').innerHTML = 'Shamol tezligi'+'  '+'<i class="fas fa-wind">'+'  '+' '+a4+'m/s</i>'
         document.getElementById('weather').innerHTML = a2
    })
    
}

// xorazm = () => {
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=Urganch&     appid=11383a422946d6690d8e97982829c739&units=metric')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(xr) {
//         console.log(xr)
//         document.getElementById('temp').innerHTML += rs.main.temp
//         document.getElementById('weather').innerHTML += rs.weather[0].main
//     })
// }
