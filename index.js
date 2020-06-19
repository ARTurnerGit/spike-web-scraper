const myRequest = new Request(
  "https://dominator-proxy-server.herokuapp.com/997721"
);

fetch(myRequest)
  .then((res) => {
    console.log("got a response");
    return res.text();
  })
  .then((data) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(data, "text/html");
    let main = doc.getElementsByClassName("main-content");
    console.dir(main);
  })
  .catch((err) => console.log(err));
