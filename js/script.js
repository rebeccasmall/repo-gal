// Div where profile information will appear 
const overview = document.querySelector(".overview");
// Unordered list to display repos
const reposList = document.querySelector(".repo-list")

const username = "rebeccasmall";

const getData = async function () {
    const res = await fetch (`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    displayUserInfo(data);
}

getData();

const displayUserInfo = function (data) {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-info");
    userDiv.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div> `
    overview.append(userDiv);
};

const getRepo = async function () {
    const res = await fetch (`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const data = await res.json();
    console.log(data);
};

getRepo();