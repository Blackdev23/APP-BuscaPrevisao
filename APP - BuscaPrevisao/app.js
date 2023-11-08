const key = "2066089a645eda28127a89c4595e14e6"

function DadosTela(dados){
    console.log(dados)
    document.querySelector('.titulo-cidade').innerHTML = "Clima em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.previsao-texto').innerHTML = dados.weather[0].description
    document.querySelector('.Umidade').innerHTML = "Umidade Relativa do ar: " + dados.main.humidity + "%"
}

async function Buscardados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)
}

function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)
}