var division = document.querySelector("#dataplace");
var getCountry = document.querySelector("#getCountry");
var modal = document.querySelector("#exampleModal");
var err = document.querySelector(".err-msg");
var spin = document.querySelector(".spin-style");
async function fetchData() {
  const data = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
  const result = await data.json();
  return result;
}

async function fetchAllData() {
  division.innerHTML = "";
  division.append(spin);
  spin.style.display = "unset";
  var table = document.createElement("table");
  table.classList.add("table");
  let data = await fetchData();
  let countries = Object.keys(data);
  let tableHead = createTableHeader();
  let tableData = createTableData(data, countries);

  table.append(tableHead);
  table.append(tableData);
  table.style.textAlign = "left";
  division.append(table);
  spin.style.display = "none";
  document.body.append(division);
}

function createTableHeader() {
  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  thead.style.background = "black";
  thead.style.color = "white";
  var th = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");

  th1.innerHTML = "Country Name";
  th2.innerHTML = "Population";
  th3.innerHTML = "Confirmed";
  th4.innerHTML = "Recovered";
  th5.innerHTML = "Deaths";

  th.append(th1, th2, th3, th4, th5);
  thead.append(th);

  return thead;
}

function createTableData(d, con) {
  var tbody = document.createElement("tbody");

  con.forEach((e) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = e;
    var td2 = document.createElement("td");
    td2.innerHTML = d[e].All.population;
    var td3 = document.createElement("td");
    td3.innerHTML = d[e].All.confirmed;
    var td4 = document.createElement("td");
    td4.innerHTML = d[e].All.recovered;
    var td5 = document.createElement("td");
    td5.innerHTML = d[e].All.deaths;

    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  });
  return tbody;
}

//for confirmed cases
async function getConfirmedCases() {
  division.innerHTML = "";
  division.append(spin);
  spin.style.display = "unset";

  var table = document.createElement("table");
  table.classList.add("table");

  let data = await fetchData();
  let countries = Object.keys(data);
  // let tableHead = createTableHeader();
  // let tableData = createTableData(data, countries);

  //creating header
  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  thead.style.background = "black";
  thead.style.color = "white";
  var th = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerHTML = "Country Name";
  th2.innerHTML = "Population";
  th3.innerHTML = "Confirmed";

  th.append(th1, th2, th3);
  thead.append(th);

  //creating table data
  var tbody = document.createElement("tbody");

  countries.forEach((e) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = e;
    var td2 = document.createElement("td");
    td2.innerHTML = data[e].All.population;
    var td3 = document.createElement("td");
    td3.innerHTML = data[e].All.confirmed;

    tr.append(td1, td2, td3);
    tbody.append(tr);
  });

  table.append(thead);
  table.append(tbody);
  table.style.textAlign = "left";
  division.append(table);
  spin.style.display = "none";
  document.body.append(division);
}

//for recovered cases- recovered cases button implementation
async function getRecoveredCases() {
  division.innerHTML = "";
  division.append(spin);
  spin.style.display = "unset";
  var table = document.createElement("table");
  table.classList.add("table");
  let data = await fetchData();
  let countries = Object.keys(data);
  // let tableHead = createTableHeader();
  // let tableData = createTableData(data, countries);

  //creating header
  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  thead.style.background = "black";
  thead.style.color = "white";
  var th = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerHTML = "Country Name";
  th2.innerHTML = "Confirmed";
  th3.innerHTML = "Recovered";

  th.append(th1, th2, th3);
  thead.append(th);

  //creating table data
  var tbody = document.createElement("tbody");

  countries.forEach((e) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = e;
    var td2 = document.createElement("td");
    td2.innerHTML = data[e].All.confirmed;
    var td3 = document.createElement("td");
    td3.innerHTML = data[e].All.recovered;

    tr.append(td1, td2, td3);
    tbody.append(tr);
  });

  table.append(thead);
  table.append(tbody);
  table.style.textAlign = "left";
  division.append(table);
  spin.style.display = "none";
  document.body.append(division);
}

//for death cases- deaths button implementation
async function getDeathCount() {
  division.innerHTML = "";
  division.append(spin);
  spin.style.display = "unset";
  var table = document.createElement("table");
  table.classList.add("table");
  let data = await fetchData();
  let countries = Object.keys(data);
  // let tableHead = createTableHeader();
  // let tableData = createTableData(data, countries);

  //creating header
  var thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  thead.style.background = "black";
  thead.style.color = "white";
  var th = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  th1.innerHTML = "Country Name";
  th2.innerHTML = "Confirmed";
  th3.innerHTML = "Deaths";

  th.append(th1, th2, th3);
  thead.append(th);

  //creating table data
  var tbody = document.createElement("tbody");

  countries.forEach((e) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = e;
    var td2 = document.createElement("td");
    td2.innerHTML = data[e].All.confirmed;
    var td3 = document.createElement("td");
    td3.innerHTML = data[e].All.deaths;

    tr.append(td1, td2, td3);
    tbody.append(tr);
  });

  table.append(thead);
  table.append(tbody);
  table.style.textAlign = "left";
  division.append(table);
  spin.style.display = "none";
  document.body.append(division);
}

//get country wise data
async function getCountryWiseData() {
  division.innerHTML = "";

  var table = document.createElement("table");
  table.classList.add("table");
  var note = document.createElement("div");
  note.innerHTML =
    "<h5>NOTE: you need to enter valid country name (should start with Capital letter and remaining should be in lowercase) while fetching countrywise data else  it will only display country names with empty fields. YOU CAN ALSO FIND CORRECT COUNTRY NAMES FROM THAT INFO</h5><h6>it will display states data only if available in server</h6><h6>**All indicates total country cases";
  note.style.color = "indigo";
  note.style.padding = "15px";
  const con = getCountry.value;
  if (con !== "" && con !== " " && con) {
    modal.style.display = "none";
    division.append(spin);
    spin.style.display = "unset";
    const data = await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${con}`
    );
    const result = await data.json();
    let countries = Object.entries(result);

    var thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    thead.style.background = "black";
    thead.style.color = "white";
    var th = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");

    th1.innerHTML = "Country/State Name";
    th2.innerHTML = "Confirmed";
    th3.innerHTML = "Recovered";
    th4.innerHTML = "Deaths";

    th.append(th1, th2, th3, th4);
    thead.append(th);

    let tbody = document.createElement("tbody");

    countries.forEach((e) => {
      var tr = document.createElement("tr");

      var td1 = document.createElement("td");
      td1.innerHTML = e[0];
      var td3 = document.createElement("td");
      td3.innerHTML = e[1].confirmed;
      var td4 = document.createElement("td");
      td4.innerHTML = e[1].recovered;
      var td5 = document.createElement("td");
      td5.innerHTML = e[1].deaths;

      tr.append(td1, td3, td4, td5);
      tbody.append(tr);
    });

    table.append(thead);
    table.append(tbody);
    table.style.textAlign = "left";
    spin.style.display = "none";
    division.append(note);
    division.append(table);
    document.body.append(division);
  } else {
    division.append(note);
    document.body.append(division);
    err.style.display = "unset";
    getCountry.innerHTML = "";
  }
}
