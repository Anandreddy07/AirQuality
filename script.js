const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '055e4eb8a6msh2dfc85c46e49c77p1f770cjsn51d8111b7c53',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

function getAir(city) {
cityName.innerHTML = city;
fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+ city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        // console.log(response.CO.aqi)
        overallaqi.innerHTML=response.overall_aqi

        cocon.innerHTML=response.CO.concentration
        coaqi.innerHTML=response.CO.aqi

        NO2con.innerHTML=response.NO2.concentration
        NO2aqi.innerHTML=response.NO2.aqi

        O3con.innerHTML=response.O3.concentration
        O3aqi.innerHTML=response.O3.aqi

        SO2con.innerHTML=response.SO2.concentration
        SO2aqi.innerHTML=response.SO2.aqi

        PM10con.innerHTML=response.PM10.concentration
        PM10aqi.innerHTML=response.PM10.aqi

        // adding color to over all aqi 
        var a = response.overall_aqi
        console.log(a)
         if(a<50){
        overallaqi.style.color="green";
        index.style.color="green";
        index.innerText=" (Very Good)"
        
         }
         else if(a>=50 && a<=100){
        overallaqi.style.color="green";
        index.style.color="green";
        index.innerText=" (Good)"
         }
         else if(a>=100 && a<=150){
        overallaqi.style.color="orange";
        index.style.color="orange";
        index.innerText=" (Moderate)"
         }
         else if(a>=150 && a<=200){
        overallaqi.style.color="red";
        index.style.color="red";
        index.innerText=" (Un Healthy)"
         }
         else if(a>=200 && a<=300){
        overallaqi.style.color="red";
        index.style.color="red";
        index.innerText=" (Very Un-Healthy)"
         }
         else if(a>=300 && a<=1000){
        overallaqi.style.color="red";
        index.style.color="red";
        index.innerText=" (Hazardous)"        
         }
    })
	.catch(err => console.error(err));
}
getAir("Bangalore"); // default value for weather

submitbutton.addEventListener("click", (e) => {
    e.preventDefault();
    getAir(inputcityName.value);
  });

inputcityName.addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    submitbutton.click()
  }
})