const myRequest = new Request(
  "https://dominator-proxy-server.herokuapp.com/997721/gamelog"
);

// going to change the proxy-server so that data comes back as JSON:
// let JSON = {
//   gamelog: ["", "", ""],
//   players: {playername:{}...},
//   map: {url:'', width:'', height: ''},
//   territory: { terr1: {}, terr2: {}, ... },
// };

fetch(myRequest)
  .then((res) => {
    console.log("got a response");
    return res.json();
  })
  .then((data) => {
    console.dir(data);
  })
  .catch((err) => console.log(err));
