const img_lo = document.getElementById('img_lo');
const max_temp = document.getElementById('max_temp');
const city_name = document.getElementById('city_name');
const day = document.getElementById('day');
const date_ui = document.getElementById('date');
const left_img = document.getElementById('left-img');
const alert = document.getElementById('alert');



const fetch_mausam = async(e) => {
    const data = new FormData(e);
    let city = data.get('search');
    // console.log();
    if(city != ""){
        alert.classList.add('d-none');
    try{
            let url = `https://api.unsplash.com/photos?location=${city}&orientation=landscape&collections=3178579&client_id=PgMzZ3T8RQlDDYKNQ14woVysFWUiRS2ZAHQRdW164s8`;
            const response = await fetch(url);
            const jsonData = await response.json();
            const mainData = [jsonData];
            img_lo.src = mainData[0][0].urls.raw;
            // console.log(mainData[0][0].urls.raw);
            let weather_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32b0fdc8c7351346d8487e08891cecb3`;
            const w_response = await fetch(weather_url);
            const w_json = await w_response.json();
            const real_data = [w_json];
            city_name.innerText = `${real_data[0].name} ${real_data[0].sys.country}`;
            max_temp.innerHTML = `${(real_data[0].main.temp - 273.14).toFixed(2)} &deg;`;
            let icon = real_data[0].weather[0].main;
            if(icon == 'clear'){
             left_img.innerHTML = '<i class="fas fa-sun" style="color:#eccc68"></i>';
            }
            else if(icon == 'Clouds'){
                left_img.innerHTML = '<i class="fas fa-cloud" style="color:#6ec4f2"></i>';
            }else if(icon == 'Rains'){
                left_img.innerHTML = '<i class="fas fa-cloud-rain" style="color:#a4b0be"></i>';
            }
            else if(icon == 'Snow'){
                left_img.innerHTML = '<i class="fas fa-snowman" style="color:#a4b0be"></i>';
            }
            else{
                left_img.innerHTML = '<i class="fas fa-sun" style="color:#eccc68;"></i>';
            }

            const date = new Date();

// Get day name
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
day.innerHTML = days[date.getDay()];

// Get month name
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
date_ui.innerHTML = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;



            
            console.log(real_data[0]);
    }
    catch(error){
        console.log(error);
    }
}else{
alert.classList.remove('d-none');
alert.innerHTML = 'City is required !!';
}
}

document.getElementById("fetch_mausam_form").addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  fetch_mausam(this); // Call the fetch_mausam function with the form element as the argument
});