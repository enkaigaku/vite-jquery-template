$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    this.reset();
  });
});
