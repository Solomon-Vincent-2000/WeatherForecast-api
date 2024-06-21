// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData= async ()=>{
    let key= "27b765617b080cc39cce39631cef01e0"
    let place=document.getElementById("location").value
    let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
    let finalOutput=await data.json()
    console.log(finalOutput)
    let TempValue=document.querySelector(".temp_value")
    let HumidValue=document.querySelector(".humid_value")
    let ClimateValue=document.querySelector("#climateCondition")
    let WeatherValue =document.querySelector("#actualImage")
    let ScreenBackground=document.querySelector("#main_container")
    console.log(WeatherValue)

    let finalTemp=Math.round(finalOutput.main.temp-273)
    let finalHumid=Math.round(finalOutput.main.humidity)
    let finalclimate=finalOutput.weather[0].main.toLowerCase()
    
    TempValue.innerHTML=`${finalTemp} <sup>o</sup>C`
    HumidValue.innerHTML=`${finalHumid} KMPH`
    ClimateValue.innerHTML=`${finalclimate}`

    switch (finalclimate) {
        case "clouds":
            WeatherValue.src='./assets/clouds.avif'
            ScreenBackground.style.backgroundImage="url(./assets/clouds.avif)"
            break;
        case "haze":
            WeatherValue.src='./assets/haze.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/haze.jpg)"
            break;
        case "dust":
            WeatherValue.src='./assets/dust.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/dust.jpg)"
            break;
        case "mist":
            WeatherValue.src='./assets/mist.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/mist.jpg)"
            break;
        case "rain":
            WeatherValue.src='./assets/rain.avif'
            ScreenBackground.style.backgroundImage="url(./assets/rain.avif)"
            break;
        case "snow":
            WeatherValue.src='./assets/snow.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/snow.jpg)"
            break;
        case "smoke":
            WeatherValue.src='./assets/smoke.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/smoke.jpg)"
            break;
        case "clear":
            WeatherValue.src='./assets/clear.jpg'
            ScreenBackground.style.backgroundImage="url(./assets/clear.jpg)"
            break;

        default:
            WeatherValue.src='./assets/weather favicon2.png' 
     }
     
    }
    fetchData()
})