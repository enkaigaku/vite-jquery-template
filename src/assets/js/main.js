export function init() {
  $("#content").html(`
    <p>This is the content inserted by jQuery</p>
    <button id="clickMe">Click me</button>
  `);

  $("#clickMe").on("click", function () {
    alert("you clicked me!");
  });
}

init();
