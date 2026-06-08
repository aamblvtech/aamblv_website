/**
 * SEO Manager - Dynamically updates meta tags for each page
 */

const seoData = {
  home: {
    title: "Aamblv Technologies - Digital Transformation & Web Development",
    description: "Transform your business with cutting-edge digital solutions. Web development, mobile apps, cloud services, and AI-powered platforms by Aamblv Technologies.",
    keywords: "web development, mobile apps, digital transformation, software solutions, cloud services, India",
    ogImage: "https://aamblvtech.in/og-image-home.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Aamblv Technologies - Home",
      "description": "Digital transformation and innovative tech solutions",
      "image": "https://aamblvtech.in/og-image-home.jpg"
    }
  },
  about: {
    title: "About Aamblv Technologies - Our Team & Mission",
    description: "Learn about Aamblv Technologies, our mission to transform businesses through innovation, our talented team, and our commitment to digital excellence.",
    keywords: "about aamblv, digital transformation company, web development team, software company India",
    ogImage: "https://aamblvtech.in/og-image-about.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Aamblv Technologies",
      "description": "We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology."
    }
  },
  services: {
    title: "Our Services - Web & Mobile Development | Aamblv Technologies",
    description: "Explore our comprehensive digital services: web development, mobile apps, cloud solutions, AI/ML, UI/UX design, and more. Custom solutions for your business.",
    keywords: "web development services, mobile app development, cloud services, UI/UX design, AI/ML solutions, software development",
    ogImage: "https://aamblvtech.in/og-image-services.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Services",
      "description": "Comprehensive digital solutions tailored to business needs",
      "provider": "Aamblv Technologies"
    }
  },
  portfolio: {
    title: "Our Portfolio - Successful Projects | Aamblv Technologies",
    description: "View our portfolio of successful projects across e-commerce, SaaS, mobile apps, and more. See how we've helped businesses achieve their goals.",
    keywords: "portfolio, projects, case studies, web applications, mobile apps, project showcase",
    ogImage: "https://aamblvtech.in/og-image-portfolio.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio - Aamblv Technologies",
      "description": "Showcase of our recent projects and innovative solutions"
    }
  },
  contact: {
    title: "Contact Us - Get in Touch | Aamblv Technologies",
    description: "Ready to start your next project? Contact Aamblv Technologies. We're based in Hyderabad and Warangal, Telangana, India, and available globally. Call, email, or send us a message.",
    keywords: "contact aamblv, get in touch, contact form, business inquiry, support",
    ogImage: "https://aamblvtech.in/og-image-contact.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - Aamblv Technologies",
      "description": "Contact information and inquiry form"
    }
  },
  careers: {
    title: "Careers - Join Our Team | Aamblv Technologies",
    description: "Join Aamblv Technologies and be part of a talented team transforming the digital landscape. Explore career opportunities in web development, design, and more.",
    keywords: "careers, jobs, hiring, web developer jobs, design jobs, tech careers India",
    ogImage: "https://aamblvtech.in/og-image-careers.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Careers - Aamblv Technologies",
      "description": "Join our team of digital innovators"
    }
  }
};

/**
 * Update page meta tags
 */
function updateMetaTags(page) {
  const data = seoData[page] || seoData.home;
  const baseUrl = "https://aamblvtech.in";
  const currentPath = window.location.pathname === "/" ? "/" : window.location.pathname;

  // Update title
  document.title = data.title;
  updateMetaTag("meta[name='title']", "content", data.title);
  updateMetaTag("meta[id='pageTitle']", "content", data.title);
  updateMetaTag("meta[property='og:title']", "content", data.title);
  updateMetaTag("meta[name='twitter:title']", "content", data.title);

  // Update description
  updateMetaTag("meta[name='description']", "content", data.description);
  updateMetaTag("meta[id='metaDescription']", "content", data.description);
  updateMetaTag("meta[property='og:description']", "content", data.description);
  updateMetaTag("meta[name='twitter:description']", "content", data.description);

  // Update keywords
  updateMetaTag("meta[name='keywords']", "content", data.keywords);
  updateMetaTag("meta[id='metaKeywords']", "content", data.keywords);

  // Update canonical URL
  const canonicalUrl = baseUrl + (currentPath === "/" ? "/" : currentPath);
  updateMetaTag("link[rel='canonical']", "href", canonicalUrl);

  // Update OG image
  updateMetaTag("meta[property='og:image']", "content", data.ogImage);
  updateMetaTag("meta[name='twitter:image']", "content", data.ogImage);

  // Update OG and Twitter URLs
  updateMetaTag("meta[property='og:url']", "content", canonicalUrl);
  updateMetaTag("meta[name='twitter:url']", "content", canonicalUrl);

  // Update schema markup
  const schemaScript = document.getElementById("schemaScript");
  if (schemaScript) {
    schemaScript.textContent = JSON.stringify(data.schema);
  }
}

/**
 * Helper function to update meta tags
 */
function updateMetaTag(selector, attribute, value) {
  let element = document.querySelector(selector);
  if (!element) {
    // Create the element if it doesn't exist
    const tagName = selector.includes("link") ? "link" : "meta";
    element = document.createElement(tagName);
    
    if (selector.includes("property=")) {
      const propValue = selector.match(/property='([^']+)'/)[1];
      element.setAttribute("property", propValue);
    } else if (selector.includes("name=")) {
      const nameValue = selector.match(/name='([^']+)'/)[1];
      element.setAttribute("name", nameValue);
    } else if (selector.includes("rel=")) {
      const relValue = selector.match(/rel='([^']+)'/)[1];
      element.setAttribute("rel", relValue);
    }
    
    document.head.appendChild(element);
  }
  
  element.setAttribute(attribute, value);
}

/**
 * Get page name from current path
 */
function getPageName() {
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes("/about")) return "about";
  if (path.includes("/services")) return "services";
  if (path.includes("/portfolio")) return "portfolio";
  if (path.includes("/careers")) return "careers";
  if (path.includes("/contact")) return "contact";
  
  return "home";
}

// Initialize SEO on page load
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = getPageName();
  updateMetaTags(currentPage);
});

// Update SEO when history changes (for client-side routing)
window.addEventListener("popstate", () => {
  const currentPage = getPageName();
  updateMetaTags(currentPage);
});

// Export functions for use in page transitions
window.updatePageSEO = updateMetaTags;
window.getPageName = getPageName;