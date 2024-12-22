const getApi = async () => {
    let weather = await fetch('https://api.weatherapi.com/v1/forecast.json?key=4b3ad918fc1544e4adc104451242711&q=tehran&days=6')
    .then( res => res.json())
    .then( data => data);
    


    // date
    let date = new Date;
    let dateHtml = document.querySelector(".main-info");
    dateHtml.innerHTML = date.toLocaleString("fa-IR", { dateStyle: "medium" });

    // pic
    let mainPic = document.querySelector('.main-img');
    let condition = weather.current.condition.text;
    console.log(condition);
    
    switch (condition) {
        case 'Partly cloudy' : 
        mainPic.src = "images/Image (2).png"
        break;
        case 'Cloud' : 
        mainPic.src = "images/03_cloud_color.png"
        break;
        case 'Sun cloudy' : 
        mainPic.src ="images/04_sun_cloudy_color.png"
        break;
        case 'Moon cloudy' : 
        mainPic.src = "images/Image (3).png"
        break;
        case 'Wet' : 
        mainPic.src = "images/Image (4).png"
        break;
        case 'Heavy rain' : 
        mainPic.src = "images/Image (5).png"
        break;
        default : 
        mainPic.src = "images/01_sunny_color.png"
    }

    // temp
    let temp = weather.current.temp_c;    
    let temph1 = document.querySelector('.main h1');    
    temph1.innerHTML=temp;

    // humidity
    let humidity = weather.current.humidity;
    let humidityHtml = document.querySelector(".humidity");
    humidityHtml.innerHTML = humidity + '%';

    // wind 
    let wind_kph =weather.current.wind_kph;
    let wind_kphHtml = document.querySelector('.wind_kph');
    wind_kphHtml.innerHTML = wind_kph + "Km/h";


    // forcast
    

    let forcastDate = [];  
    let forcastAvgTemp = [];
    let forcastCondition = [];

    for (let i = 1 ; i < 6 ; i++) {
        forcastDate.push(weather.forecast.forecastday[i].date);
        forcastAvgTemp.push(weather.forecast.forecastday[i].day.avgtemp_c);
        forcastCondition.push(weather.forecast.forecastday[i].day.condition.text);
        console.log(forcastCondition)

        // day one
        let fCarddate = document.querySelector('.f-card p');
        let fCardTemp = document.querySelector('.f-card h3');
        let fCardImg = document.querySelector('.f-card img');
        fCarddate.innerHTML = forcastDate[0];
        fCardTemp.innerHTML = forcastAvgTemp[0];
        switch (forcastCondition[0]) {
            case "Partly Cloudy ": 
            fCardImg.src = "images/Image (2).png"
            break;
            case 'Cloud' : 
            fCardImg.src = "images/03_cloud_color.png"
            break;
            case 'Sun cloudy' : 
            fCardImg.src ="images/04_sun_cloudy_color.png"
            break;
            case 'Moon cloudy' : 
            fCardImg.src = "images/Image (3).png"
            break;
            case 'Wet' : 
            fCardImg.src = "images/Image (4).png"
            break;
            case 'Heavy rain' : 
            fCardImg.src = "images/Image (5).png"
            break;
            default : 
            fCardImg.src = "images/01_sunny_color.png"
        }



        // day two  
        let sCarddate = document.querySelector('.s-card p');
        let sCardTemp = document.querySelector('.s-card h3');
        let sCardImg = document.querySelector('.s-card img');
        sCarddate.innerHTML = forcastDate[1];
        sCardTemp.innerHTML = forcastAvgTemp[1];
        switch (forcastCondition[1]) {
            case "Partly Cloudy ": 
            sCardImg.src = "images/Image (2).png"
            break;
            case 'Cloud' : 
            sCardImg.src = "images/03_cloud_color.png"
            break;
            case 'Sun cloudy' : 
            sCardImg.src ="images/04_sun_cloudy_color.png"
            break;
            case 'Moon cloudy' : 
            sCardImg.src = "images/Image (3).png"
            break;
            case 'Wet' : 
            sCardImg.src = "images/Image (4).png"
            break;
            case 'Heavy rain' : 
            sCardImg.src = "images/Image (5).png"
            break;
            default : 
            sCardImg.src = "images/01_sunny_color.png"
        }


        // day three  
        let tCarddate = document.querySelector('.t-card p');
        let tCardTemp = document.querySelector('.t-card h3');
        let tCardImg = document.querySelector('.t-card img');
        tCarddate.innerHTML = forcastDate[2];
        tCardTemp.innerHTML = forcastAvgTemp[2];
        switch (forcastCondition[2]) {
            case "Partly Cloudy ": 
            tCardImg.src = "images/Image (2).png"
            break;
            case 'Cloud' : 
            tCardImg.src = "images/03_cloud_color.png"
            break;
            case 'Sun cloudy' : 
            tCardImg.src ="images/04_sun_cloudy_color.png"
            break;
            case 'Moon cloudy' : 
            tCardImg.src = "images/Image (3).png"
            break;
            case 'Wet' : 
            tCardImg.src = "images/Image (4).png"
            break;
            case 'Heavy rain' : 
            tCardImg.src = "images/Image (5).png"
            break;
            default : 
            tCardImg.src = "images/01_sunny_color.png"
        }


        // day four  
        let foCarddate = document.querySelector('.fo-card p');
        let foCardTemp = document.querySelector('.fo-card h3');
        let foCardImg = document.querySelector('.fo-card img');
        foCarddate.innerHTML = forcastDate[3];
        foCardTemp.innerHTML = forcastAvgTemp[3];
        switch (forcastCondition[3]) {
            case "Partly Cloudy ": 
            foCardImg.src = "images/Image (2).png"
            break;
            case 'Cloud' : 
            foCardImg.src = "images/03_cloud_color.png"
            break;
            case 'Sun cloudy' : 
            foCardImg.src ="images/04_sun_cloudy_color.png"
            break;
            case 'Moon cloudy' : 
            foCardImg.src = "images/Image (3).png"
            break;
            case 'Wet' : 
            foCardImg.src = "images/Image (4).png"
            break;
            case 'Heavy rain' : 
            foCardImg.src = "images/Image (5).png"
            break;
            default : 
            foCardImg.src = "images/01_sunny_color.png"
        }

        // day five  
        let fiCarddate = document.querySelector('.fi-card p');
        let fiCardTemp = document.querySelector('.fi-card h3');
        let fiCardImg = document.querySelector('.fi-card img');
        fiCarddate.innerHTML = forcastDate[4];
        fiCardTemp.innerHTML = forcastAvgTemp[4];
        switch (forcastCondition[4]) {
            case "Partly Cloudy ": 
            fiCardImg.src = "images/Image (2).png"
            break;
            case 'Cloud' : 
            fiCardImg.src = "images/03_cloud_color.png"
            break;
            case 'Sun cloudy' : 
            fiCardImg.src ="images/04_sun_cloudy_color.png"
            break;
            case 'Moon cloudy' : 
            fiCardImg.src = "images/Image (3).png"
            break;
            case 'Wet' : 
            fiCardImg.src = "images/Image (4).png"
            break;
            case 'Heavy rain' : 
            fiCardImg.src = "images/Image (5).png"
            break;
            default : 
            fiCardImg.src = "images/01_sunny_color.png"
        }



    }   
}
getApi();