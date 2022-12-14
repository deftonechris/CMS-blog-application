const loginFormHandler = async (event) => {
  event.preventDefault();

  
  const username = document.querySelector("#login-username").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (username && password) {
    console.log(username && password)
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Your login was unsuccessful, please try again");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

  