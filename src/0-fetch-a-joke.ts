import fetch from "node-fetch";

function demoFetchWithThen() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((res) => console.log(res));
}

async function demoFetchWithAwait() {
  const response = await fetch(
    "https://api.kanye.rest/"
  );
  const jsonBody = await response.json();
  console.log(jsonBody);
}

demoFetchWithThen();
demoFetchWithAwait();
