// // index.js

// document.addEventListener("DOMContentLoaded", function () {
//     // Theme toggle
//     let checkbox = document.querySelector("input[name=theme]");
  
//     checkbox.addEventListener("change", function () {
//       if (this.checked) {
//         trans();
//         document.documentElement.setAttribute("data-theme", "dark");
//       } else {
//         trans();
//         document.documentElement.setAttribute("data-theme", "light");
//       }
//     });
  
//     // Smooth transition function
//     let trans = () => {
//       document.documentElement.classList.add("transition");
//       window.setTimeout(() => {
//         document.documentElement.classList.remove("transition");
//       }, 1000);
//     };
  
//     // Login form submission
//     const loginForm = document.getElementById("login-form");
  
//     loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
  
//       // Send the login credentials to the server
//       fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data); // Handle the server response as needed
//           // Redirect to dashboard or display a success message
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           // Display an error message to the user
//         });
//     });
  
//     // Logout functionality
//     const logoutButton = document.getElementById("logout-button");
  
//     logoutButton.addEventListener("click", function () {
//       // Send a logout request to the server
//       fetch("/logout", {
//         method: "POST",
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data); // Handle the server response as needed
//           // Redirect to the login page or display a success message
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           // Display an error message to the user
//         });
//     });
//   });
  
// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle
    let checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            trans();
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            trans();
            document.documentElement.setAttribute("data-theme", "light");
        }
    });

    // Smooth transition function
    let trans = () => {
        document.documentElement.classList.add("transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("transition");
        }, 1000);
    };

    // Login form submission
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send the login credentials to the server
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle the server response as needed
                // Redirect to dashboard upon successful login
                if (data.success) {
                    window.location.href = "/CodeAlpha3.html"; 
                } else {
                    // Handle failed login
                    // Display error message, reset form, etc.
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                // Display an error message to the user
            });
    });

    // Logout functionality
    const logoutButton = document.getElementById("logout-button");

    logoutButton.addEventListener("click", function () {
        // Send a logout request to the server
        fetch("/logout", {
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle the server response as needed
                // Redirect to the login page or display a success message
            })
            .catch((error) => {
                console.error("Error:", error);
                // Display an error message to the user
            });
    });
});
