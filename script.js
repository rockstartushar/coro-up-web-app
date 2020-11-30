const container = document.querySelector(".container");
const showStatsScr = () => {
  console.log("hello");
  $("#showop").css({
    display:"block"
  });
}
    const features = [{
      name: "India fights Corona",
      image: "covid1.jpg",
      btntxt: "Creative India",
      hreflink: "",
      onclick: "",
    },
      {
        name: "Far from Covid-19",
        image: "covid2.jpg",
        btntxt: "Preventive Measures",
        hreflink: "",
        onclick: "",
      },
      {
        name: "Covid-19 News",
        image: "covid3.jpg",
        btntxt: "Latest Updates",
        hreflink: "",
        onclick: "",
      },
      {
        name: "Covid-19 Cases",
        image: "covid4.jpg",
        btntxt: "Statistics",
        hreflink: "#statsbtn",
        onclick: "showStatsScr()"
      },
      {
        name: "Lock-down Games",
        image: "covid5.jpg",
        btntxt: "Explore Games",
        hreflink: "",
        onclick: "",
      },
    ]

    const showFeatures = () => {
      let output = ""
      features.forEach(
        ({
          name, image, btntxt, hreflink
        }) =>
        (output += `
          <div class="card">
          <img class="card--avatar" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" onclick="${onclick};" href=${hreflink}>${btntxt}</a>
          </div>
          `)
      )
      container.innerHTML = output
    }

    document.addEventListener("DOMContentLoaded", showFeatures);
    
    async function getdata() {
      const response = await fetch("https://api.covid19india.org/state_district_wise.json");
      const data = await response.json();
      console.log(data);
      let opstat = "";
      opstat = `<h1><b>Jaipur</b></h1><br /><h3>Total Cases</h3><br /><p>${data. Rajasthan.districtData.Jaipur.confirmed}</p>
      <br /><h3>Total Deaths</h3><br /><p>${data. Rajasthan.districtData.Jaipur.deceased}</p>
      <br /><h3>Total Recovered</h3><br /><p>${data. Rajasthan.districtData.Jaipur.recovered}</p><br /><h3>Total Active Cases</h3><br /><p>${data. Rajasthan.districtData.Jaipur.active
      }</p>`
      document.getElementById("jaipurstats").innerHTML = opstat
    }