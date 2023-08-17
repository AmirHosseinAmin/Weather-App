
var x = document.getElementById("err");
getLocation();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherData, showError);
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    const apiKey = "ae9c6534b2da2393a44f0536e1e5e1aa";
    const weatherIcon = document.querySelector(".weather_icon");
    const weatherIconM = document.querySelector(".weather_iconM");
    const weatherIconT = document.querySelector(".weather_iconT");
    const weatherIconW = document.querySelector(".weather_iconW");
    const weatherIconTh = document.querySelector(".weather_iconTh");
    const weatherIconF = document.querySelector(".weather_iconF");
    const weatherIconSa = document.querySelector(".weather_iconSa");
    const weatherIconS = document.querySelector(".weather_iconS");

    let { latitude, longitude } = success.coords;

    console.log(latitude, longitude);
    //
    var today = new Date();

    var options = { weekday: "short", hour: "2-digit", minute: "2-digit" };

    var now = today.toLocaleTimeString("en-GB", options);

    //

    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showAirQuality(data);
      });

    function showAirQuality(data) {
      document.querySelector(".airMe").innerHTML = data.list[0].main.aqi * 100;

      if (data.list[0].main.aqi == 1) {
        document.querySelector(".airSt").innerHTML = "Good";
      } else if (data.list[0].main.aqi == 2) {
        document.querySelector(".airSt").innerHTML = "Fair";
      } else if (data.list[0].main.aqi == 3) {
        document.querySelector(".airSt").innerHTML = "Moderate";
      } else if (data.list[0].main.aqi == 4) {
        document.querySelector(".airSt").innerHTML = "Poor";
      } else if (data.list[0].main.aqi == 5) {
        document.querySelector(".airSt").innerHTML = "Very Poor";
      } else {
        document.querySelector(".airSt").innerHTML = "N/A";
      }
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutly&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });

    function showWeatherData(data) {
      document.querySelector(".degreeText").innerHTML = Math.round(
        data.current.temp
      );
      document.querySelector(".humPre").innerHTML =
        Math.round(data.current.humidity) + "%";
      document.querySelector(".winSpeed").innerHTML =
        Math.round(data.current.wind_speed) + "Km/h";
      document.querySelector(".visSpeed").innerHTML =
        data.current.visibility / 1000 + "Km";
      document.querySelector(".cloudText").innerHTML =
        data.current.weather[0].description;
      document.querySelector(".maxTemp").innerHTML =
        Math.round(data.daily[0].temp.max) + "°C";
      document.querySelector(".minTemp").innerHTML =
        Math.round(data.daily[0].temp.min) + "°C";
      document.getElementById("demo").innerHTML = data.timezone;
      document.querySelector(".mdayD").innerHTML =
        Math.round(data.daily[0].temp.day) + "°/";
      document.querySelector(".mnightD").innerHTML =
        Math.round(data.daily[0].temp.morn) + "°";
      document.querySelector(".tdayD").innerHTML =
        Math.round(data.daily[1].temp.day) + "°/";
      document.querySelector(".tnightD").innerHTML =
        Math.round(data.daily[1].temp.morn) + "°";
      document.querySelector(".wdayD").innerHTML =
        Math.round(data.daily[2].temp.day) + "°/";
      document.querySelector(".wnightD").innerHTML =
        Math.round(data.daily[2].temp.morn) + "°";
      document.querySelector(".thdayD").innerHTML =
        Math.round(data.daily[3].temp.day) + "°/";
      document.querySelector(".thnightD").innerHTML =
        Math.round(data.daily[3].temp.morn) + "°";
      document.querySelector(".fdayD").innerHTML =
        Math.round(data.daily[4].temp.day) + "°/";
      document.querySelector(".fnightD").innerHTML =
        Math.round(data.daily[4].temp.morn) + "°";
      document.querySelector(".sadayD").innerHTML =
        Math.round(data.daily[5].temp.day) + "°/";
      document.querySelector(".sanightD").innerHTML =
        Math.round(data.daily[5].temp.morn) + "°";
      document.querySelector(".sudayD").innerHTML =
        Math.round(data.daily[6].temp.day) + "°/";
      document.querySelector(".sunightD").innerHTML =
        Math.round(data.daily[6].temp.morn) + "°";
      document.querySelector(".dayText").innerHTML = now;
      document.querySelector(".timeText").innerHTML = "";
      // document.querySelector(".ampm").innerHTML = "";
      document.querySelector(".cloudText").style.top = "280px";

      if (data.lat !== undefined) {
        document.querySelector(".preloader").style.display = "none";
      } else {
      }

      // weekday cards

      const timesTamp_0 = data.daily[0].dt;
      var option = { weekday: "short" };
      var dt_0 = new Date(timesTamp_0 * 1000).toLocaleDateString(
        "en-US",
        option
      );

      document.querySelector(".monText").innerHTML = dt_0;

      const timesTamp_1 = data.daily[1].dt;
      var option = { weekday: "short" };
      var dt_1 = new Date(timesTamp_1 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".tueText").innerHTML = dt_1;

      const timesTamp_2 = data.daily[2].dt;
      var option = { weekday: "short" };
      var dt_2 = new Date(timesTamp_2 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".wedText").innerHTML = dt_2;

      const timesTamp_3 = data.daily[3].dt;
      var option = { weekday: "short" };
      var dt_3 = new Date(timesTamp_3 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".thuText").innerHTML = dt_3;

      const timesTamp_4 = data.daily[4].dt;
      var option = { weekday: "short" };
      var dt_4 = new Date(timesTamp_4 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".friText").innerHTML = dt_4;

      const timesTamp_5 = data.daily[5].dt;
      var option = { weekday: "short" };
      var dt_5 = new Date(timesTamp_5 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".satText").innerHTML = dt_5;

      const timesTamp_6 = data.daily[6].dt;
      var option = { weekday: "short" };
      var dt_6 = new Date(timesTamp_6 * 1000).toLocaleDateString(
        "en-US",
        option
      );
      document.querySelector(".sunText").innerHTML = dt_6;

      console.log(dt_0, dt_1, dt_2, dt_3, dt_4, dt_5, dt_6);

      //SVGs

      //side bar

      if (data.current.weather[0].icon == "50d") {
        weatherIcon.src = "/Assets/Icons/fog-d.svg";
      } else if (data.current.weather[0].icon == "50n") {
        weatherIcon.src = "/Assets/Icons/fog-n.svg";
      } else if (data.current.weather[0].icon == "01d") {
        weatherIcon.src = "/Assets/Icons/clear-day.svg";
      } else if (data.current.weather[0].icon == "01n") {
        weatherIcon.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.current.weather[0].icon == "02d" ||
        data.current.weather[0].icon == "03d" ||
        data.current.weather[0].icon == "04d"
      ) {
        weatherIcon.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.current.weather[0].icon == "02n" ||
        data.current.weather[0].icon == "03n" ||
        data.current.weather[0].icon == "04n"
      ) {
        weatherIcon.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.current.weather[0].icon == "09d" ||
        data.current.weather[0].icon == "10d"
      ) {
        weatherIcon.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.current.weather[0].icon == "09n" ||
        data.current.weather[0].icon == "10n"
      ) {
        weatherIcon.src = "/Assets/Icons/rain-n.svg";
      } else if (data.current.weather[0].icon == "11d") {
        weatherIcon.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.current.weather[0].icon == "11n") {
        weatherIcon.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.current.weather[0].icon == "13d") {
        weatherIcon.src = "/Assets/Icons/snow-d.svg";
      } else if (data.current.weather[0].icon == "13n") {
        weatherIcon.src = "/Assets/Icons/snow-n.svg";
      }

      // info

      if (data.daily[0].weather[0].icon == "50d") {
        weatherIconM.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[0].weather[0].icon == "50n") {
        weatherIconM.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[0].weather[0].icon == "01d") {
        weatherIconM.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[0].weather[0].icon == "01n") {
        weatherIconM.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[0].weather[0].icon == "02d" ||
        data.daily[0].weather[0].icon == "03d" ||
        data.daily[0].weather[0].icon == "04d"
      ) {
        weatherIconM.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[0].weather[0].icon == "02n" ||
        data.daily[0].weather[0].icon == "03n" ||
        data.daily[0].weather[0].icon == "04n"
      ) {
        weatherIconM.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[0].weather[0].icon == "09d" ||
        data.daily[0].weather[0].icon == "10d"
      ) {
        weatherIconM.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[0].weather[0].icon == "09n" ||
        data.daily[0].weather[0].icon == "10n"
      ) {
        weatherIconM.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[0].weather[0].icon == "11d") {
        weatherIconM.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[0].weather[0].icon == "11n") {
        weatherIconM.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[0].weather[0].icon == "13d") {
        weatherIconM.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[0].weather[0].icon == "13n") {
        weatherIconM.src = "/Assets/Icons/snow-n.svg";
      }

      // tue

      if (data.daily[1].weather[0].icon == "50d") {
        weatherIconT.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[1].weather[0].icon == "50n") {
        weatherIconT.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[1].weather[0].icon == "01d") {
        weatherIconT.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[1].weather[0].icon == "01n") {
        weatherIconT.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[1].weather[0].icon == "02d" ||
        data.daily[1].weather[0].icon == "03d" ||
        data.daily[1].weather[0].icon == "04d"
      ) {
        weatherIconT.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[1].weather[0].icon == "02n" ||
        data.daily[1].weather[0].icon == "03n" ||
        data.daily[1].weather[0].icon == "04n"
      ) {
        weatherIconT.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[1].weather[0].icon == "09d" ||
        data.daily[1].weather[0].icon == "10d"
      ) {
        weatherIconT.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[1].weather[0].icon == "09n" ||
        data.daily[1].weather[0].icon == "10n"
      ) {
        weatherIconT.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[1].weather[0].icon == "11d") {
        weatherIconT.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[1].weather[0].icon == "11n") {
        weatherIconT.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[1].weather[0].icon == "13d") {
        weatherIconT.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[1].weather[0].icon == "13n") {
        weatherIconT.src = "/Assets/Icons/snow-n.svg";
      }

      //wed

      if (data.daily[2].weather[0].icon == "50d") {
        weatherIconW.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[2].weather[0].icon == "50n") {
        weatherIconW.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[2].weather[0].icon == "01d") {
        weatherIconW.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[2].weather[0].icon == "01n") {
        weatherIconW.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[2].weather[0].icon == "02d" ||
        data.daily[2].weather[0].icon == "03d" ||
        data.daily[2].weather[0].icon == "04d"
      ) {
        weatherIconW.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[2].weather[0].icon == "02n" ||
        data.daily[2].weather[0].icon == "03n" ||
        data.daily[2].weather[0].icon == "04n"
      ) {
        weatherIconW.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[2].weather[0].icon == "09d" ||
        data.daily[2].weather[0].icon == "10d"
      ) {
        weatherIconW.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[2].weather[0].icon == "09n" ||
        data.daily[2].weather[0].icon == "10n"
      ) {
        weatherIconW.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[2].weather[0].icon == "11d") {
        weatherIconW.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[2].weather[0].icon == "11n") {
        weatherIconW.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[2].weather[0].icon == "13d") {
        weatherIconW.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[2].weather[0].icon == "13n") {
        weatherIconW.src = "/Assets/Icons/snow-n.svg";
      }

      // thu

      if (data.daily[3].weather[0].icon == "50d") {
        weatherIconTh.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[3].weather[0].icon == "50n") {
        weatherIconTh.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[3].weather[0].icon == "01d") {
        weatherIconTh.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[3].weather[0].icon == "01n") {
        weatherIconTh.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[3].weather[0].icon == "02d" ||
        data.daily[3].weather[0].icon == "03d" ||
        data.daily[3].weather[0].icon == "04d"
      ) {
        weatherIconTh.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[3].weather[0].icon == "02n" ||
        data.daily[3].weather[0].icon == "03n" ||
        data.daily[3].weather[0].icon == "04n"
      ) {
        weatherIconTh.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[3].weather[0].icon == "09d" ||
        data.daily[3].weather[0].icon == "10d"
      ) {
        weatherIconTh.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[3].weather[0].icon == "09n" ||
        data.daily[3].weather[0].icon == "10n"
      ) {
        weatherIconTh.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[3].weather[0].icon == "11d") {
        weatherIconTh.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[3].weather[0].icon == "11n") {
        weatherIconTh.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[3].weather[0].icon == "13d") {
        weatherIconTh.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[3].weather[0].icon == "13n") {
        weatherIconTh.src = "/Assets/Icons/snow-n.svg";
      }

      // fri

      if (data.daily[4].weather[0].icon == "50d") {
        weatherIconF.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[4].weather[0].icon == "50n") {
        weatherIconF.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[4].weather[0].icon == "01d") {
        weatherIconF.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[4].weather[0].icon == "01n") {
        weatherIconF.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[4].weather[0].icon == "02d" ||
        data.daily[4].weather[0].icon == "03d" ||
        data.daily[4].weather[0].icon == "04d"
      ) {
        weatherIconF.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[4].weather[0].icon == "02n" ||
        data.daily[4].weather[0].icon == "03n" ||
        data.daily[4].weather[0].icon == "04n"
      ) {
        weatherIconF.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[4].weather[0].icon == "09d" ||
        data.daily[4].weather[0].icon == "10d"
      ) {
        weatherIconF.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[4].weather[0].icon == "09n" ||
        data.daily[4].weather[0].icon == "10n"
      ) {
        weatherIconF.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[4].weather[0].icon == "11d") {
        weatherIconF.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[4].weather[0].icon == "11n") {
        weatherIconF.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[4].weather[0].icon == "13d") {
        weatherIconF.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[4].weather[0].icon == "13n") {
        weatherIconF.src = "/Assets/Icons/snow-n.svg";
      }

      // sat

      if (data.daily[5].weather[0].icon == "50d") {
        weatherIconSa.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[5].weather[0].icon == "50n") {
        weatherIconSa.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[5].weather[0].icon == "01d") {
        weatherIconSa.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[5].weather[0].icon == "01n") {
        weatherIconSa.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[5].weather[0].icon == "02d" ||
        data.daily[5].weather[0].icon == "03d" ||
        data.daily[5].weather[0].icon == "04d"
      ) {
        weatherIconSa.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[5].weather[0].icon == "02n" ||
        data.daily[5].weather[0].icon == "03n" ||
        data.daily[5].weather[0].icon == "04n"
      ) {
        weatherIconSa.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[5].weather[0].icon == "09d" ||
        data.daily[5].weather[0].icon == "10d"
      ) {
        weatherIconSa.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[5].weather[0].icon == "09n" ||
        data.daily[5].weather[0].icon == "10n"
      ) {
        weatherIconSa.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[5].weather[0].icon == "11d") {
        weatherIconSa.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[5].weather[0].icon == "11n") {
        weatherIconSa.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[5].weather[0].icon == "13d") {
        weatherIconSa.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[5].weather[0].icon == "13n") {
        weatherIconSa.src = "/Assets/Icons/snow-n.svg";
      }

      // sun

      if (data.daily[6].weather[0].icon == "50d") {
        weatherIconS.src = "/Assets/Icons/fog-d.svg";
      } else if (data.daily[6].weather[0].icon == "50n") {
        weatherIconS.src = "/Assets/Icons/fog-n.svg";
      } else if (data.daily[6].weather[0].icon == "01d") {
        weatherIconS.src = "/Assets/Icons/clear-day.svg";
      } else if (data.daily[6].weather[0].icon == "01n") {
        weatherIconS.src = "/Assets/Icons/clear-night.svg";
      } else if (
        data.daily[6].weather[0].icon == "02d" ||
        data.daily[6].weather[0].icon == "03d" ||
        data.daily[6].weather[0].icon == "04d"
      ) {
        weatherIconS.src = "/Assets/Icons/clouds-d.svg";
      } else if (
        data.daily[6].weather[0].icon == "02n" ||
        data.daily[6].weather[0].icon == "03n" ||
        data.daily[6].weather[0].icon == "04n"
      ) {
        weatherIconS.src = "/Assets/Icons/clouds-n.svg";
      } else if (
        data.daily[6].weather[0].icon == "09d" ||
        data.daily[6].weather[0].icon == "10d"
      ) {
        weatherIconS.src = "/Assets/Icons/rain-d.svg";
      } else if (
        data.daily[6].weather[0].icon == "09n" ||
        data.daily[6].weather[0].icon == "10n"
      ) {
        weatherIconS.src = "/Assets/Icons/rain-n.svg";
      } else if (data.daily[6].weather[0].icon == "11d") {
        weatherIconS.src = "/Assets/Icons/thunderstorm-d.svg";
      } else if (data.daily[6].weather[0].icon == "11n") {
        weatherIconS.src = "/Assets/Icons/thunderstorm-n.svg";
      } else if (data.daily[6].weather[0].icon == "13d") {
        weatherIconS.src = "/Assets/Icons/snow-d.svg";
      } else if (data.daily[6].weather[0].icon == "13n") {
        weatherIconS.src = "/Assets/Icons/snow-n.svg";
      }

      // humidity

      // if (Math.round(data.current.humidity) >= 60 && Math.round(data.current.humidity) < 100) {
      //     document.querySelector(".humSt").innerHTML = "Too Dry";
      // } else if (Math.round(data.current.humidity) >= 30 && Math.round(data.current.humidity) < 60) {
      //     document.querySelector(".humSt").innerHTML = "Normal";
      // } else if ( Math.round(data.current.humidity) >= 60 && Math.round(data.current.humidity) <= 100) {
      //     document.querySelector(".humSt").innerHTML = "Too Humid";
      // } else {
      //     document.querySelector(".humSt").innerHTML = "N/A";
      // };

      console.log(Math.round(data.current.humidity));

      if (
        Math.round(data.current.humidity) > 0 &&
        Math.round(data.current.humidity) < 30
      ) {
        document.querySelector(".humSt").innerHTML = "Too Dry";
      } else if (
        Math.round(data.current.humidity) > 30 &&
        Math.round(data.current.humidity) < 60
      ) {
        document.querySelector(".humSt").innerHTML = "Normal";
      } else if (
        Math.round(data.current.humidity) > 60 &&
        Math.round(data.current.humidity) < 100
      ) {
        document.querySelector(".humSt").innerHTML = "Too Humid";
      } else {
        document.querySelector(".humSt").innerHTML = "N/A";
      }

      // windward

      if (
        data.current.wind_deg <= 10 ||
        (data.current.wind_deg <= 360 && data.current.wind_deg <= 350)
      ) {
        document.querySelector(".winW").innerHTML = "N";
      } else if (data.current.wind_deg >= 11 && data.current.wind_deg <= 30) {
        document.querySelector(".winW").innerHTML = "NNE";
      } else if (data.current.wind_deg >= 31 && data.current.wind_deg <= 50) {
        document.querySelector(".winW").innerHTML = "NE";
      } else if (data.current.wind_deg >= 51 && data.current.wind_deg <= 70) {
        document.querySelector(".winW").innerHTML = "ENE";
      } else if (data.current.wind_deg >= 71 && data.current.wind_deg <= 100) {
        document.querySelector(".winW").innerHTML = "E";
      } else if (data.current.wind_deg >= 101 && data.current.wind_deg <= 120) {
        document.querySelector(".winW").innerHTML = "ESE";
      } else if (data.current.wind_deg >= 121 && data.current.wind_deg <= 140) {
        document.querySelector(".winW").innerHTML = "SE";
      } else if (data.current.wind_deg >= 141 && data.current.wind_deg <= 160) {
        document.querySelector(".winW").innerHTML = "SSE";
      } else if (data.current.wind_deg >= 161 && data.current.wind_deg <= 190) {
        document.querySelector(".winW").innerHTML = "S";
      } else if (data.current.wind_deg >= 191 && data.current.wind_deg <= 210) {
        document.querySelector(".winW").innerHTML = "SSW";
      } else if (data.current.wind_deg >= 211 && data.current.wind_deg <= 230) {
        document.querySelector(".winW").innerHTML = "SW";
      } else if (data.current.wind_deg >= 231 && data.current.wind_deg <= 250) {
        document.querySelector(".winW").innerHTML = "WSW";
      } else if (data.current.wind_deg >= 251 && data.current.wind_deg <= 280) {
        document.querySelector(".winW").innerHTML = "W";
      } else if (data.current.wind_deg >= 281 && data.current.wind_deg <= 300) {
        document.querySelector(".winW").innerHTML = "WNW";
      } else if (data.current.wind_deg >= 301 && data.current.wind_deg <= 320) {
        document.querySelector(".winW").innerHTML = "NW";
      } else if (data.current.wind_deg >= 321 && data.current.wind_deg <= 340) {
        document.querySelector(".winW").innerHTML = "NNW";
      } else {
        document.querySelector(".winW").innerHTML = "N/A";
      }

      // air visibility status

      if (data.current.visibility / 1000 <= 1) {
        document.querySelector(".visSt").innerHTML = "Low";
      } else if (
        data.current.visibility / 1000 > 1 &&
        data.current.visibility / 1000 <= 3
      ) {
        document.querySelector(".visSt").innerHTML = "Good";
      } else if (
        data.current.visibility / 1000 > 3 &&
        data.current.visibility / 1000 <= 8
      ) {
        document.querySelector(".visSt").innerHTML = "Average";
      } else if (data.current.visibility / 1000 > 8) {
        document.querySelector(".visSt").innerHTML = "Very Good";
      } else {
        document.querySelector(".visSt").innerHTML = "N/A";
      }
    }
  });
}



   
    const weatherIcon = document.querySelector(".weather_icon");
    const weatherIconM = document.querySelector(".weather_iconM");
    const weatherIconT = document.querySelector(".weather_iconT");
    const weatherIconW = document.querySelector(".weather_iconW");
    const weatherIconTh = document.querySelector(".weather_iconTh");
    const weatherIconF = document.querySelector(".weather_iconF");
    const weatherIconSa = document.querySelector(".weather_iconSa");
    const weatherIconS = document.querySelector(".weather_iconS");
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const searchBoxT = document.querySelector(".searchCity input");
    const searchBtnT = document.querySelector(".searchCity button");
    const apiKey = "ae9c6534b2da2393a44f0536e1e5e1aa";
    const api_time = "825c4c8d12e84240895e1f65e8c5141f";

    async function checkWeather(city) {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${api_time}`
      );
      const data = await response.json();
      if (data.results[1] === undefined) {
        document.querySelector(".invalidCity").style.display = "block";
      } else {
        document.querySelector(".invalidCity").style.display = "none";
      }

      console.log(data);
      const latitude = data.results[0].geometry.lat;
      const longitude = data.results[0].geometry.lng;

      console.log(data, latitude, longitude);

      // error handle

      // city name
      document.getElementById("demo").innerHTML = data.results[0].formatted;

      //error handling

      fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          showAirQuality(data);
        });

      function showAirQuality(data) {
        document.querySelector(".airMe").innerHTML =
          data.list[0].main.aqi * 100;

        if (data.list[0].main.aqi == 1) {
          document.querySelector(".airSt").innerHTML = "Good";
        } else if (data.list[0].main.aqi == 2) {
          document.querySelector(".airSt").innerHTML = "Fair";
        } else if (data.list[0].main.aqi == 3) {
          document.querySelector(".airSt").innerHTML = "Moderate";
        } else if (data.list[0].main.aqi == 4) {
          document.querySelector(".airSt").innerHTML = "Poor";
        } else if (data.list[0].main.aqi == 5) {
          document.querySelector(".airSt").innerHTML = "Very Poor";
        } else {
          document.querySelector(".airSt").innerHTML = "N/A";
        }
      }

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          showWeatherData(data);
        });

      function showWeatherData(data) {
        document.querySelector(".degreeText").innerHTML = Math.round(
          data.current.temp
        );
        document.querySelector(".humPre").innerHTML =
          Math.round(data.current.humidity) + "%";
        document.querySelector(".winSpeed").innerHTML =
          Math.round(data.current.wind_speed) + "Km/h";
        document.querySelector(".visSpeed").innerHTML =
          data.current.visibility / 1000 + "Km";
        document.querySelector(".cloudText").innerHTML =
          data.current.weather[0].description;
        document.querySelector(".maxTemp").innerHTML =
          Math.round(data.daily[0].temp.max) + "°C";
        document.querySelector(".minTemp").innerHTML =
          Math.round(data.daily[0].temp.min) + "°C";

        document.querySelector(".mdayD").innerHTML =
          Math.round(data.daily[0].temp.day) + "°/";
        document.querySelector(".mnightD").innerHTML =
          Math.round(data.daily[0].temp.morn) + "°";
        document.querySelector(".tdayD").innerHTML =
          Math.round(data.daily[1].temp.day) + "°/";
        document.querySelector(".tnightD").innerHTML =
          Math.round(data.daily[1].temp.morn) + "°";
        document.querySelector(".wdayD").innerHTML =
          Math.round(data.daily[2].temp.day) + "°/";
        document.querySelector(".wnightD").innerHTML =
          Math.round(data.daily[2].temp.morn) + "°";
        document.querySelector(".thdayD").innerHTML =
          Math.round(data.daily[3].temp.day) + "°/";
        document.querySelector(".thnightD").innerHTML =
          Math.round(data.daily[3].temp.morn) + "°";
        document.querySelector(".fdayD").innerHTML =
          Math.round(data.daily[4].temp.day) + "°/";
        document.querySelector(".fnightD").innerHTML =
          Math.round(data.daily[4].temp.morn) + "°";
        document.querySelector(".sadayD").innerHTML =
          Math.round(data.daily[5].temp.day) + "°/";
        document.querySelector(".sanightD").innerHTML =
          Math.round(data.daily[5].temp.morn) + "°";
        document.querySelector(".sudayD").innerHTML =
          Math.round(data.daily[6].temp.day) + "°/";
        document.querySelector(".sunightD").innerHTML =
          Math.round(data.daily[6].temp.morn) + "°";
        document.querySelector(".cloudText").style.top = "255px";

        //

        // am pm

        // if ((data.current.weather[1] = "01d") || (data.current.weather[1] = "02d") || (data.current.weather[1] = "03d") || (data.current.weather[1] = "04d") || (data.current.weather[1] = "05d") || (data.current.weather[1] = "06d") || (data.current.weather[1] = "07d") || (data.current.weather[1] = "08d") || (data.current.weather[1] = "09d") || (data.current.weather[1] = "10d") || (data.current.weather[1] = "11d") || (data.current.weather[1] = "12d") || (data.current.weather[1] = "13d") || (data.current.weather[1] = "50d")) {

        //     document.querySelector(".ampm").innerHTML= "AM";
        // } else if ((data.current.weather[1] = "01n") || (data.current.weather[1] = "02n") || (data.current.weather[1] = "03n") || (data.current.weather[1] = "04n") || (data.current.weather[1] = "05n") || (data.current.weather[1] = "06n") || (data.current.weather[1] = "07n") || (data.current.weather[1] = "08n") || (data.current.weather[1] = "09n") || (data.current.weather[1] = "10n") || (data.current.weather[1] = "11n") || (data.current.weather[1] = "12n") || (data.current.weather[1] = "13n") || (data.current.weather[1] = "50n")) {

        //     document.querySelector(".ampm").innerHTML= "PM";
        // } else {}

        //week day cards

        const timesTamp_0 = data.daily[0].dt;
        var option = { weekday: "short" };
        var dt_0 = new Date(timesTamp_0 * 1000).toLocaleDateString(
          "en-US",
          option
        );

        document.querySelector(".monText").innerHTML = dt_0;

        const timesTamp_1 = data.daily[1].dt;
        var option = { weekday: "short" };
        var dt_1 = new Date(timesTamp_1 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".tueText").innerHTML = dt_1;

        const timesTamp_2 = data.daily[2].dt;
        var option = { weekday: "short" };
        var dt_2 = new Date(timesTamp_2 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".wedText").innerHTML = dt_2;

        const timesTamp_3 = data.daily[3].dt;
        var option = { weekday: "short" };
        var dt_3 = new Date(timesTamp_3 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".thuText").innerHTML = dt_3;

        const timesTamp_4 = data.daily[4].dt;
        var option = { weekday: "short" };
        var dt_4 = new Date(timesTamp_4 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".friText").innerHTML = dt_4;

        const timesTamp_5 = data.daily[5].dt;
        var option = { weekday: "short" };
        var dt_5 = new Date(timesTamp_5 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".satText").innerHTML = dt_5;

        const timesTamp_6 = data.daily[6].dt;
        var option = { weekday: "short" };
        var dt_6 = new Date(timesTamp_6 * 1000).toLocaleDateString(
          "en-US",
          option
        );
        document.querySelector(".sunText").innerHTML = dt_6;

        console.log(dt_0, dt_1, dt_2, dt_3, dt_4, dt_5, dt_6);

        //weather icon

        if (data.current.weather[0].icon == "50d") {
          weatherIcon.src = "/Assets/Icons/fog-d.svg";
        } else if (data.current.weather[0].icon == "50n") {
          weatherIcon.src = "/Assets/Icons/fog-n.svg";
        } else if (data.current.weather[0].icon == "01d") {
          weatherIcon.src = "/Assets/Icons/clear-day.svg";
        } else if (data.current.weather[0].icon == "01n") {
          weatherIcon.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.current.weather[0].icon == "02d" ||
          data.current.weather[0].icon == "03d" ||
          data.current.weather[0].icon == "04d"
        ) {
          weatherIcon.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.current.weather[0].icon == "02n" ||
          data.current.weather[0].icon == "03n" ||
          data.current.weather[0].icon == "04n"
        ) {
          weatherIcon.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.current.weather[0].icon == "09d" ||
          data.current.weather[0].icon == "10d"
        ) {
          weatherIcon.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.current.weather[0].icon == "09n" ||
          data.current.weather[0].icon == "10n"
        ) {
          weatherIcon.src = "/Assets/Icons/rain-n.svg";
        } else if (data.current.weather[0].icon == "11d") {
          weatherIcon.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.current.weather[0].icon == "11n") {
          weatherIcon.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.current.weather[0].icon == "13d") {
          weatherIcon.src = "/Assets/Icons/snow-d.svg";
        } else if (data.current.weather[0].icon == "13n") {
          weatherIcon.src = "/Assets/Icons/snow-n.svg";
        }

        //day time sidebar

        const timesTamp = data.current.dt;
        var optiona = { weekday: "short" };
        var dt = new Date(timesTamp * 1000).toLocaleDateString(
          "en-US",
          optiona
        );

        document.querySelector(".dayText").innerHTML = dt;

        time();

        function time() {
          const timeZone = data.timezone;
          fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
            .then((response) => response.json())
            .then((data) => {
              const currentTime =
                data.datetime[11] +
                data.datetime[12] +
                data.datetime[13] +
                data.datetime[14] +
                data.datetime[15];
              document.querySelector(".timeText").innerHTML = currentTime;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }

        //SVGs

        //side bar

        //mon

        if (data.daily[0].weather[0].icon == "50d") {
          weatherIconM.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[0].weather[0].icon == "50n") {
          weatherIconM.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[0].weather[0].icon == "01d") {
          weatherIconM.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[0].weather[0].icon == "01n") {
          weatherIconM.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[0].weather[0].icon == "02d" ||
          data.daily[0].weather[0].icon == "03d" ||
          data.daily[0].weather[0].icon == "04d"
        ) {
          weatherIconM.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[0].weather[0].icon == "02n" ||
          data.daily[0].weather[0].icon == "03n" ||
          data.daily[0].weather[0].icon == "04n"
        ) {
          weatherIconM.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[0].weather[0].icon == "09d" ||
          data.daily[0].weather[0].icon == "10d"
        ) {
          weatherIconM.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[0].weather[0].icon == "09n" ||
          data.daily[0].weather[0].icon == "10n"
        ) {
          weatherIconM.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[0].weather[0].icon == "11d") {
          weatherIconM.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[0].weather[0].icon == "11n") {
          weatherIconM.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[0].weather[0].icon == "13d") {
          weatherIconM.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[0].weather[0].icon == "13n") {
          weatherIconM.src = "/Assets/Icons/snow-n.svg";
        }

        // tue

        if (data.daily[1].weather[0].icon == "50d") {
          weatherIconT.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[1].weather[0].icon == "50n") {
          weatherIconT.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[1].weather[0].icon == "01d") {
          weatherIconT.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[1].weather[0].icon == "01n") {
          weatherIconT.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[1].weather[0].icon == "02d" ||
          data.daily[1].weather[0].icon == "03d" ||
          data.daily[1].weather[0].icon == "04d"
        ) {
          weatherIconT.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[1].weather[0].icon == "02n" ||
          data.daily[1].weather[0].icon == "03n" ||
          data.daily[1].weather[0].icon == "04n"
        ) {
          weatherIconT.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[1].weather[0].icon == "09d" ||
          data.daily[1].weather[0].icon == "10d"
        ) {
          weatherIconT.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[1].weather[0].icon == "09n" ||
          data.daily[1].weather[0].icon == "10n"
        ) {
          weatherIconT.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[1].weather[0].icon == "11d") {
          weatherIconT.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[1].weather[0].icon == "11n") {
          weatherIconT.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[1].weather[0].icon == "13d") {
          weatherIconT.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[1].weather[0].icon == "13n") {
          weatherIconT.src = "/Assets/Icons/snow-n.svg";
        }

        //wed

        if (data.daily[2].weather[0].icon == "50d") {
          weatherIconW.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[2].weather[0].icon == "50n") {
          weatherIconW.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[2].weather[0].icon == "01d") {
          weatherIconW.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[2].weather[0].icon == "01n") {
          weatherIconW.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[2].weather[0].icon == "02d" ||
          data.daily[2].weather[0].icon == "03d" ||
          data.daily[2].weather[0].icon == "04d"
        ) {
          weatherIconW.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[2].weather[0].icon == "02n" ||
          data.daily[2].weather[0].icon == "03n" ||
          data.daily[2].weather[0].icon == "04n"
        ) {
          weatherIconW.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[2].weather[0].icon == "09d" ||
          data.daily[2].weather[0].icon == "10d"
        ) {
          weatherIconW.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[2].weather[0].icon == "09n" ||
          data.daily[2].weather[0].icon == "10n"
        ) {
          weatherIconW.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[2].weather[0].icon == "11d") {
          weatherIconW.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[2].weather[0].icon == "11n") {
          weatherIconW.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[2].weather[0].icon == "13d") {
          weatherIconW.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[2].weather[0].icon == "13n") {
          weatherIconW.src = "/Assets/Icons/snow-n.svg";
        }

        // thu

        if (data.daily[3].weather[0].icon == "50d") {
          weatherIconTh.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[3].weather[0].icon == "50n") {
          weatherIconTh.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[3].weather[0].icon == "01d") {
          weatherIconTh.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[3].weather[0].icon == "01n") {
          weatherIconTh.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[3].weather[0].icon == "02d" ||
          data.daily[3].weather[0].icon == "03d" ||
          data.daily[3].weather[0].icon == "04d"
        ) {
          weatherIconTh.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[3].weather[0].icon == "02n" ||
          data.daily[3].weather[0].icon == "03n" ||
          data.daily[3].weather[0].icon == "04n"
        ) {
          weatherIconTh.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[3].weather[0].icon == "09d" ||
          data.daily[3].weather[0].icon == "10d"
        ) {
          weatherIconTh.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[3].weather[0].icon == "09n" ||
          data.daily[3].weather[0].icon == "10n"
        ) {
          weatherIconTh.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[3].weather[0].icon == "11d") {
          weatherIconTh.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[3].weather[0].icon == "11n") {
          weatherIconTh.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[3].weather[0].icon == "13d") {
          weatherIconTh.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[3].weather[0].icon == "13n") {
          weatherIconTh.src = "/Assets/Icons/snow-n.svg";
        }

        // fri

        if (data.daily[4].weather[0].icon == "50d") {
          weatherIconF.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[4].weather[0].icon == "50n") {
          weatherIconF.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[4].weather[0].icon == "01d") {
          weatherIconF.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[4].weather[0].icon == "01n") {
          weatherIconF.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[4].weather[0].icon == "02d" ||
          data.daily[4].weather[0].icon == "03d" ||
          data.daily[4].weather[0].icon == "04d"
        ) {
          weatherIconF.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[4].weather[0].icon == "02n" ||
          data.daily[4].weather[0].icon == "03n" ||
          data.daily[4].weather[0].icon == "04n"
        ) {
          weatherIconF.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[4].weather[0].icon == "09d" ||
          data.daily[4].weather[0].icon == "10d"
        ) {
          weatherIconF.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[4].weather[0].icon == "09n" ||
          data.daily[4].weather[0].icon == "10n"
        ) {
          weatherIconF.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[4].weather[0].icon == "11d") {
          weatherIconF.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[4].weather[0].icon == "11n") {
          weatherIconF.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[4].weather[0].icon == "13d") {
          weatherIconF.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[4].weather[0].icon == "13n") {
          weatherIconF.src = "/Assets/Icons/snow-n.svg";
        }

        // sat

        if (data.daily[5].weather[0].icon == "50d") {
          weatherIconSa.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[5].weather[0].icon == "50n") {
          weatherIconSa.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[5].weather[0].icon == "01d") {
          weatherIconSa.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[5].weather[0].icon == "01n") {
          weatherIconSa.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[5].weather[0].icon == "02d" ||
          data.daily[5].weather[0].icon == "03d" ||
          data.daily[5].weather[0].icon == "04d"
        ) {
          weatherIconSa.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[5].weather[0].icon == "02n" ||
          data.daily[5].weather[0].icon == "03n" ||
          data.daily[5].weather[0].icon == "04n"
        ) {
          weatherIconSa.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[5].weather[0].icon == "09d" ||
          data.daily[5].weather[0].icon == "10d"
        ) {
          weatherIconSa.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[5].weather[0].icon == "09n" ||
          data.daily[5].weather[0].icon == "10n"
        ) {
          weatherIconSa.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[5].weather[0].icon == "11d") {
          weatherIconSa.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[5].weather[0].icon == "11n") {
          weatherIconSa.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[5].weather[0].icon == "13d") {
          weatherIconSa.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[5].weather[0].icon == "13n") {
          weatherIconSa.src = "/Assets/Icons/snow-n.svg";
        }

        // sun

        if (data.daily[6].weather[0].icon == "50d") {
          weatherIconS.src = "/Assets/Icons/fog-d.svg";
        } else if (data.daily[6].weather[0].icon == "50n") {
          weatherIconS.src = "/Assets/Icons/fog-n.svg";
        } else if (data.daily[6].weather[0].icon == "01d") {
          weatherIconS.src = "/Assets/Icons/clear-day.svg";
        } else if (data.daily[6].weather[0].icon == "01n") {
          weatherIconS.src = "/Assets/Icons/clear-night.svg";
        } else if (
          data.daily[6].weather[0].icon == "02d" ||
          data.daily[6].weather[0].icon == "03d" ||
          data.daily[6].weather[0].icon == "04d"
        ) {
          weatherIconS.src = "/Assets/Icons/clouds-d.svg";
        } else if (
          data.daily[6].weather[0].icon == "02n" ||
          data.daily[6].weather[0].icon == "03n" ||
          data.daily[6].weather[0].icon == "04n"
        ) {
          weatherIconS.src = "/Assets/Icons/clouds-n.svg";
        } else if (
          data.daily[6].weather[0].icon == "09d" ||
          data.daily[6].weather[0].icon == "10d"
        ) {
          weatherIconS.src = "/Assets/Icons/rain-d.svg";
        } else if (
          data.daily[6].weather[0].icon == "09n" ||
          data.daily[6].weather[0].icon == "10n"
        ) {
          weatherIconS.src = "/Assets/Icons/rain-n.svg";
        } else if (data.daily[6].weather[0].icon == "11d") {
          weatherIconS.src = "/Assets/Icons/thunderstorm-d.svg";
        } else if (data.daily[6].weather[0].icon == "11n") {
          weatherIconS.src = "/Assets/Icons/thunderstorm-n.svg";
        } else if (data.daily[6].weather[0].icon == "13d") {
          weatherIconS.src = "/Assets/Icons/snow-d.svg";
        } else if (data.daily[6].weather[0].icon == "13n") {
          weatherIconS.src = "/Assets/Icons/snow-n.svg";
        }

        //             // background
        // const backgroundVideo = document.querySelector(".bg-vid");
        //             if (data.current.weather[0].main == "Clouds") {

        //                 backgroundVideo.src = "/Assets/Icons/Backgrounds/clouds.mp4"
        //             } else if (data.current.weather[0].main == "Thunderstorm") {

        //                 backgroundVideo.src = "/Assets/Icons/Backgrounds/thunderstorm.mp4"
        //             } else if (data.current.weather[0].main == "Snow") {
        //                 backgroundVideo.src = "/Assets/Icons/Backgrounds/snow.mp4"
        //             }

        // humidity

        console.log(Math.round(data.current.humidity));

        if (
          Math.round(data.current.humidity) >= 0 &&
          Math.round(data.current.humidity) <= 30
        ) {
          document.querySelector(".humSt").innerHTML = "Too Dry";
        } else if (
          Math.round(data.current.humidity) > 30 &&
          Math.round(data.current.humidity) <= 60
        ) {
          document.querySelector(".humSt").innerHTML = "Normal";
        } else if (
          Math.round(data.current.humidity) > 60 &&
          Math.round(data.current.humidity) <= 100
        ) {
          document.querySelector(".humSt").innerHTML = "Too Humid";
        } else {
          document.querySelector(".humSt").innerHTML = "N/A";
        }

        // windward

        if (
          data.current.wind_deg <= 10 ||
          (data.current.wind_deg <= 360 && data.current.wind_deg >= 350)
        ) {
          document.querySelector(".winW").innerHTML = "N";
        } else if (data.current.wind_deg >= 11 && data.current.wind_deg <= 30) {
          document.querySelector(".winW").innerHTML = "NNE";
        } else if (data.current.wind_deg >= 31 && data.current.wind_deg <= 50) {
          document.querySelector(".winW").innerHTML = "NE";
        } else if (data.current.wind_deg >= 51 && data.current.wind_deg <= 70) {
          document.querySelector(".winW").innerHTML = "ENE";
        } else if (
          data.current.wind_deg >= 71 &&
          data.current.wind_deg <= 100
        ) {
          document.querySelector(".winW").innerHTML = "E";
        } else if (
          data.current.wind_deg >= 101 &&
          data.current.wind_deg <= 120
        ) {
          document.querySelector(".winW").innerHTML = "ESE";
        } else if (
          data.current.wind_deg >= 121 &&
          data.current.wind_deg <= 140
        ) {
          document.querySelector(".winW").innerHTML = "SE";
        } else if (
          data.current.wind_deg >= 141 &&
          data.current.wind_deg <= 160
        ) {
          document.querySelector(".winW").innerHTML = "SSE";
        } else if (
          data.current.wind_deg >= 161 &&
          data.current.wind_deg <= 190
        ) {
          document.querySelector(".winW").innerHTML = "S";
        } else if (
          data.current.wind_deg >= 191 &&
          data.current.wind_deg <= 210
        ) {
          document.querySelector(".winW").innerHTML = "SSW";
        } else if (
          data.current.wind_deg >= 211 &&
          data.current.wind_deg <= 230
        ) {
          document.querySelector(".winW").innerHTML = "SW";
        } else if (
          data.current.wind_deg >= 231 &&
          data.current.wind_deg <= 250
        ) {
          document.querySelector(".winW").innerHTML = "WSW";
        } else if (
          data.current.wind_deg >= 251 &&
          data.current.wind_deg <= 280
        ) {
          document.querySelector(".winW").innerHTML = "W";
        } else if (
          data.current.wind_deg >= 281 &&
          data.current.wind_deg <= 300
        ) {
          document.querySelector(".winW").innerHTML = "WNW";
        } else if (
          data.current.wind_deg >= 301 &&
          data.current.wind_deg <= 320
        ) {
          document.querySelector(".winW").innerHTML = "NW";
        } else if (
          data.current.wind_deg >= 321 &&
          data.current.wind_deg <= 340
        ) {
          document.querySelector(".winW").innerHTML = "NNW";
        } else {
          document.querySelector(".winW").innerHTML = "N/A";
        }

        // air visibility status

        if (data.current.visibility / 1000 <= 1) {
          document.querySelector(".visSt").innerHTML = "Low";
        } else if (
          data.current.visibility / 1000 > 1 &&
          data.current.visibility / 1000 <= 3
        ) {
          document.querySelector(".visSt").innerHTML = "Good";
        } else if (
          data.current.visibility / 1000 > 3 &&
          data.current.visibility / 1000 <= 8
        ) {
          document.querySelector(".visSt").innerHTML = "Average";
        } else if (data.current.visibility / 1000 >= 8) {
          document.querySelector(".visSt").innerHTML = "Very Good";
        } else {
          document.querySelector(".visSt").innerHTML = "N/A";
        }

        if (data.lat != undefined) {
          document.querySelector(".preloader").style.display = "none";
        } else {
        }
      }
    }

    function clearSearch() {
      let input = document.getElementById("search");
      input.value = "";
    }

    function clearSearchT() {
      let input = document.getElementById("searchCity");
      input.value = "";
    }
    function preLoaderOne() {
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "block";
      }, 0);
    }

    function preLoaderTwo() {
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 4000);
    }

    function preLoaderThree() {
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 110000);
    }

    const navBtn = document.querySelector(".navigation button");
    // const input = document.getElementById("search");

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
      clearSearch();
      preLoaderOne();
      preLoaderTwo();

      navBtn.addEventListener("click", () => {
        getLocation();
        preLoaderOne();
        preLoaderThree();
      });
    });
    searchBtnT.addEventListener("click", () => {
      checkWeather(searchBoxT.value);
      clearSearchT();
      preLoaderOne();
      preLoaderTwo();
      document.querySelector(".searCity").style.display = "none";
    });
    // input.addEventListener("keypress", function(event) {
    //     if (event.key === "Enter") {
    //       event.preventDefault();
    //       document.getElementById("myBtn").click();
    //     }
    //   });

    navBtn.addEventListener("click", () => {
      getLocation();
      preLoaderOne();
      preLoaderThree();
    });
    
  } else {
    document.querySelector(".searCity").style.display = "block";

  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation.";
        document.querySelector(".searCity").style.display = "block";
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable.";
        document.querySelector(".searCity").style.display = "block";
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out.";
        document.querySelector(".searCity").style.display = "block";
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred.";
        document.querySelector(".searCity").style.display = "block";
        break;
    }
  }
  }
