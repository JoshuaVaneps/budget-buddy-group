document
  .getElementById("serchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchQuery = document.getElementById("searchQuery").value;
    var url = "Budget.html?searchQuery=" + encodeURIComponent(searchQuery);
    window.location.href = url;
  });
