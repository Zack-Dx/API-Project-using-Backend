const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 4000;

// Your API KEY
const apiKey = "(Your API KEY)";

//Partials Path:
const partialPath = path.join(__dirname, "./templates/partials");

//Register Partials:
hbs.registerPartials(partialPath);

//Template Engine Set:
app.set(`view engine`, `hbs`);

// Changing views path:
const templates = path.join(__dirname, "./templates/views");
app.set("views", templates);

//Public static path:
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));


//Routing:

// Home Page:

app.get("/", (req, res) => {
  res.render("index", {
  headlines: headlinesData,
  });
});


//About:

app.get("/about", (req, res) => res.render(`about`));
app.get("/sports", (req, res) => {
  res.render(`sports`, {
    sports: sportsData,
  });
});

//Entertainment:

app.get("/entertainment", (req, res) => {
  res.render(`entertainment`, {
    entertainment: enterData,
  });
});

//Business:

app.get("/business", (req, res) => {
  res.render(`business`, {
    business: businessData,
  });
});

//Technology:

app.get("/technology", (req, res) => {
  res.render(`technology`, {
    technology: technologyData,
  });
});


//404 Error Page:

app.get("*", (req, res) => res.render(`404error`));


//Listening Server:

app.listen(port, () => console.log(`Server running at port ${port}`));

//Headlines Section
let headlinesData;
const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const apiCall = async () => {
  const response = await fetch(url);
  const data = await response.json();
  headlinesData = data.articles;
};

apiCall();

//Technology Section:
let technologyData;
const technologyurl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`;

const technologyapi = async () => {
  const response = await fetch(technologyurl);
  const data = await response.json();
  technologyData = data.articles;
};

technologyapi();

//Business Section:
const businessurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
const businessapi = async () => {
  const response = await fetch(businessurl);
  const data = await response.json();
  businessData = data.articles;
};

businessapi();

// Sports Section

console.log("Hello");
const sportsurl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
const sportapi = async () => {
  const response = await fetch(sportsurl);
  const data = await response.json();
  sportsData = data.articles;
};

sportapi();

// Entertainment Section

const enterurl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`;
const enterapi = async () => {
  const response = await fetch(enterurl);
  const data = await response.json();
  enterData = data.articles;
};

enterapi();
