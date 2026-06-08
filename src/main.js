import "./style.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Portfolio from "./pages/porfolio";
import Careers from "./pages/careers";

// Router function to determine which page to show
function getPage(path) {
  switch (path) {
    case "/":
    case "":
      return Home();
    case "/about":
      return About();
    case "/services":
      return Services();
    case "/portfolio":
      return Portfolio();
    case "/careers":
      return Careers();
    case "/contact":
      return Contact();
    default:
      return Home();
  }
}

// Render app
function renderApp() {
  const path = window.location.pathname.replace(/^\/aamblv-technologies/, "");
  document.querySelector("#app").innerHTML = `
    ${Navbar()}
    <main>
      ${getPage(path)}
    </main>
    ${Footer()}
  `;

  // Add click listeners to all links
  document.querySelectorAll("a[href^='/']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      window.history.pushState({}, "", href);
      renderApp();
      window.scrollTo(0, 0);
    });
  });
}

// Initial render
renderApp();

// Handle browser back/forward buttons
window.addEventListener("popstate", renderApp);