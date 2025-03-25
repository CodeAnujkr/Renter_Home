document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle Mobile Menu
    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (Mobile)
    navLinks.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });

    // Smooth Scrolling
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

function showForm() {
    const form = document.getElementsByClassName('google1');
    if (form.length > 0) {
      window.location.href = "index.html";
    }
  }

  function showForm() {
    const form = document.getElementsByClassName('google2');
    if (form.length > 0) {
      window.location.href = "FirstFloor.html";
    }
  }function showForm() {
    const form = document.getElementsByClassName('google3');
    if (form.length > 0) {
      window.location.href = "SecondFloor.html";
    }
  }function showForm() {
    const form = document.getElementsByClassName('google4');
    if (form.length > 0) {
      window.location.href = "TopFloor.html";
    }
  }function showForm() {
    const form = document.getElementsByClassName('google5');
    if (form.length > 0) {
      window.location.href = "contact.html";
    }
  }
                
function navigateToPage() {
    window.location.href = "login.html"; 
}

// function adminLogin() {
//     const adminName = document.getElementById('adminName').value;
//     const adminPassword = document.getElementById('adminPassword').value;

//     if (adminName === "admin" && adminPassword === "admin123") {
//         window.location.href = "admin.html";
//     } else {
//         alert("Invalid Admin Credentials");
//     }
// }

// function renterLogin() {
//     const renterName = document.getElementById('renterName').value;
//     const renterPassword = document.getElementById('renterPassword').value;

//     if (renterName === "renter" && renterPassword === "renter123") {
//         window.location.href = "renter.html";
//     } else {
//         alert("Invalid Renter Credentials");
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const navLinks = document.querySelector(".nav-links");

//   // Toggle Mobile Menu
//   burger.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link (Mobile)
//   navLinks.addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//           navLinks.classList.remove("active");
//       }
//   });

//   // Smooth Scrolling
//   document.querySelectorAll(".nav-links a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault();
//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);
//           if (targetElement) {
//               window.scrollTo({
//                   top: targetElement.offsetTop - 50,
//                   behavior: "smooth"
//               });
//           }
//       });
//   });
// });

// function showForm() {
//   const form = document.getElementsByClassName('google1');
//   if (form.length > 0) {
//     window.location.href = "index.html";
//   }
// }

// function showForm() {
//   const form = document.getElementsByClassName('google2');
//   if (form.length > 0) {
//     window.location.href = "FirstFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google3');
//   if (form.length > 0) {
//     window.location.href = "SecondFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google4');
//   if (form.length > 0) {
//     window.location.href = "TopFloor.html";
//   }
// }function showForm() {
//   const form = document.getElementsByClassName('google5');
//   if (form.length > 0) {
//     window.location.href = "contact.html";
//   }
// }
              
// function navigateToPage() {
//   window.location.href = "login.html"; 
// }

// // function adminLogin() {
// //     const adminName = document.getElementById('adminName').value;
// //     const adminPassword = document.getElementById('adminPassword').value;

// //     if (adminName === "admin" && adminPassword === "admin123") {
// //         window.location.href = "admin.html";
// //     } else {
// //         alert("Invalid Admin Credentials");
// //     }
// // }

// // function renterLogin() {
// //     const renterName = document.getElementById('renterName').value;
// //     const renterPassword = document.getElementById('renterPassword').value;

// //     if (renterName === "renter" && renterPassword === "renter123") {
// //         window.location.href = "renter.html";
// //     } else {
// //         alert("Invalid Renter Credentials");
// //     }
// // }
