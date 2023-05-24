document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchQuery = document.getElementById("searchQuery").value;
    var url = "https://budget.html?searchQuery=" + encodeURIComponent(searchQuery);
    window.location.href = url;
  });
