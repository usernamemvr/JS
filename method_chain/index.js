let username = window.prompt("Enter your username").trim();
console.log(username.toUpperCase().charAt(0) + username.slice(1, username.length).toLowerCase());
console.log("Second");
console.log(username.charAt(0).toUpperCase() + username.slice(1, username.length).toLowerCase());