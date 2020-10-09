function deleteGame(listItem) {
  const id = listItem.getAttribute("data-id");
  axios.delete(`http://localhost:3333/games/${id}`).then(() => window.location.reload()).catch(err => console.log(err))
}

function loadForm(listItem) {
  const id = listItem.getAttribute("data-id");
  const title = listItem.getAttribute("data-title");
  const year = listItem.getAttribute("data-year");
  const price = listItem.getAttribute("data-price");

  document.getElementById("idEdit").value = id;
  document.getElementById("titleEdit").value = title;
  document.getElementById("yearEdit").value = year;
  document.getElementById("priceEdit").value = price;
}

function updateGame() {
  const ID = document.querySelector("#idEdit");
  const title = document.querySelector("#titleEdit");
  const year = document.querySelector("#yearEdit");
  const price = document.querySelector("#priceEdit");

  const game = {
    title: title.value,
    year: year.value,
    price: price.value
  }

  const id = ID.value;

  axios.put(`http://localhost:3333/games/${id}`, game).then(response => {

    if (response.status == 200) {
      window.location.reload()
    }

  }).catch(err => {
    console.log(err);
  })
}


function createGame() {
  const title = document.querySelector("#title");
  const year = document.querySelector("#year");
  const price = document.querySelector("#price");

  const game = {
    title: title.value,
    year: year.value,
    price: price.value
  }

  axios.post("http://localhost:3333/games", game).then(response => {

    if (response.status == 200) {
      window.location.reload()
    }

  }).catch(err => {
    console.log(err);
  })

}




axios.get("http://localhost:3333/games").then(response => {

  const games = response.data.game
  const list = document.querySelector("tbody");

  games.forEach(game => {
    const item = document.createElement("tr");

    item.setAttribute("data-id", game.id);
    item.setAttribute("data-title", game.title);
    item.setAttribute("data-year", game.year);
    item.setAttribute("data-price", game.price);

    item.innerHTML = `<td>${game.id}</td><td>${game.title}</td><td>${game.year}</td><td>R$ ${game.price}</td>`;

    const deleteBtn = document.createElement("button");

    deleteBtn.setAttribute("class", "btn btn-danger mr-3");
    deleteBtn.innerHTML = "deletar";
    deleteBtn.addEventListener("click", () => deleteGame(item));

    const updateBtn = document.createElement("button");

    updateBtn.setAttribute("type", "button");
    updateBtn.setAttribute("class", "btn btn-warning");
    updateBtn.setAttribute("data-toggle", "modal");
    updateBtn.setAttribute("data-target", "#exampleModal2");

    updateBtn.innerHTML = "Atualizar";
    updateBtn.addEventListener("click", () => loadForm(item));

    item.appendChild(deleteBtn);
    item.appendChild(updateBtn);
    list.appendChild(item);
  });

})
  .catch(error => console.log(error));
