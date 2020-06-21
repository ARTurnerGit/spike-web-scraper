const myRequest = new Request(
  "https://dominator-proxy-server.herokuapp.com/997721"
);

// going to change the proxy-server so that data comes back as JSON:
// let JSON = {
//   gameLog: ["", "", ""],
//   playerColours: ["", "", ""],
//   mapUrl: "",
//   territory: { terr1: {}, terr2: {} },
// };

fetch(myRequest)
  .then((res) => {
    console.log("got a response");
    return res.text();
  })
  .then((data) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(data, "text/html");
    let loadlog = doc.querySelector("#load-log");
    console.dir(loadlog);
  })
  .catch((err) => console.log(err));
