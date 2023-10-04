const apiKey = 'be69d3b659a6493c93a92438230310'

const form = document.querySelector('form')
const input = document.querySelector('.city')
const header = document.querySelector('.header')

form.onsubmit = function(e) {
    e.preventDefault() // Отменяем отправку формы
    let city = input.value.trim()
    //console.log(city)

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

    const main = document.querySelector('main')
    if(main) main.remove()



    fetch(url)
        .then(res => res.json())
        .then(data => {

           if(data.error) {
               //console.log('Такого города НЕТ!!!')
               header.insertAdjacentHTML('afterend', 'Такого города НЕТ!!!')
           } else {
               console.log(data);
               console.log(data.location.name);
               // console.log(data.location.country);
               // console.log(data.current.temp_c);
               // console.log(data.current.condition.text)

               const text = `
                    <main>
                        <div class="main-content">
                            <div class="city">${data.location.name}</div>
                            <div class="grad">${data.current.temp_c} <span>°C</span></div>
                            <div>${data.current.condition.text}</div>
                            <img src="img/sun-rain.png">
                        </div>
                    </main>
            `

               header.insertAdjacentHTML('afterend', text)

           }




            }
        )






}





// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.punkapi.com/v2/beers')
//
// xhr.addEventListener('load', () => {
//
//
//     let data = JSON.parse(xhr.response)
//     console.log(data)
// })
//
// xhr.send()

// async function getResponse() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/photos')
//     let content = await response.json()
//     content = content.splice(0, 10)
//
//         let list = document.querySelector('.posts')
//
//     for(let key in content) {
//         list.innerHTML += `
//             <li class="post">
//                  <h4>${content[key].title}</h4>
//                  <img src="${content[key].url}">
//             </li>
//             `
//         console.log(content[key])
//     }
// }
// getResponse()