function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const url = "https://anapioficeandfire.com/api/books";

  // Return the fetch() request
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jsonData) => {
      // Call renderBooks() with the JSON-ified data
      renderBooks(jsonData);
      return jsonData;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
