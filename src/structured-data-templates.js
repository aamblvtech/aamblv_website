/* Structured Data Templates for Content Enhancement */

/* 1. SERVICE SCHEMA - Use for individual services */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development",
  "description": "Custom web development services using modern frameworks",
  "provider": {
    "@type": "Organization",
    "name": "Aamblv Technologies Pvt Ltd",
    "url": "https://aamblv-technologies.com"
  },
  "areaServed": "IN",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "React Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vue.js Development"
        }
      }
    ]
  }
};

/* 2. CREATIVE WORK SCHEMA - Use for portfolio projects */
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "E-Commerce Platform",
  "description": "Full-featured e-commerce platform built with React and Node.js",
  "author": {
    "@type": "Organization",
    "name": "Aamblv Technologies Pvt Ltd"
  },
  "image": "https://aamblv-technologies.com/project-image.jpg",
  "datePublished": "2024-06-08",
  "keywords": "e-commerce, React, Node.js, Stripe",
  "inLanguage": "en-US",
  "mentions": {
    "@type": "Thing",
    "name": "React",
    "url": "https://react.dev"
  }
};

/* 3. LOCAL BUSINESS SCHEMA - For location-based services */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aamblv-technologies.com",
  "name": "Aamblv Technologies Pvt Ltd",
  "image": "https://aamblv-technologies.com/logo.png",
  "description": "Digital transformation and web development company",
  "url": "https://aamblv-technologies.com",
  "telephone": "+91-123-456-7890",
  "email": "info@aamblv.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Delhi",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6139,
    "longitude": 77.2090
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/aamblvtech",
    "https://www.twitter.com/aamblvtech",
    "https://www.linkedin.com/company/aamblvtech"
  ]
};

/* 4. FAQ SCHEMA - For FAQ sections */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer web development, mobile apps, cloud solutions, and digital transformation services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a project typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on scope and complexity. We provide detailed estimates after initial consultation."
      }
    }
  ]
};

/* 5. JOB POSTING SCHEMA - For careers page */
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Senior React Developer",
  "description": "We are looking for an experienced React developer to join our team.",
  "datePosted": "2024-06-08",
  "validThrough": "2024-07-08",
  "employmentType": "FULL_TIME",
  "baseSalary": {
    "@type": "PriceSpecification",
    "priceCurrency": "INR",
    "price": "500000"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    }
  },
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Aamblv Technologies Pvt Ltd",
    "sameAs": "https://aamblv-technologies.com",
    "logo": "https://aamblv-technologies.com/logo.png"
  },
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "IN"
  }
};

/* 6. BREADCRUMB SCHEMA - For navigation tracking */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aamblv-technologies.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://aamblv-technologies.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Development",
      "item": "https://aamblv-technologies.com/services/web-development"
    }
  ]
};

/* 7. REVIEW/RATING SCHEMA - For testimonials */
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": "Excellent service and professional team. They delivered exactly what we needed.",
  "datePublished": "2024-06-08",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Aamblv Technologies Pvt Ltd"
  }
};

/* 8. AGGREGATE RATING SCHEMA - For company ratings */
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "ratingCount": "45",
  "bestRating": "5",
  "worstRating": "1"
};

/* 9. ARTICLE/NEWS SCHEMA - For blog posts */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Optimize Your Website for SEO",
  "description": "A comprehensive guide to SEO optimization",
  "image": "https://aamblv-technologies.com/article-image.jpg",
  "datePublished": "2024-06-08",
  "dateModified": "2024-06-08",
  "author": {
    "@type": "Person",
    "name": "Aamblv Technologies"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aamblv Technologies",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aamblv-technologies.com/logo.png"
    }
  },
  "articleBody": "Article content goes here..."
};

/* 10. EVENT SCHEMA - For webinars or events */
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Web Development Workshop",
  "description": "Learn modern web development techniques",
  "startDate": "2024-07-15T10:00:00",
  "endDate": "2024-07-15T12:00:00",
  "eventAttendanceMode": "OnlineEventAttendanceMode",
  "eventStatus": "EventScheduled",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://aamblv-technologies.com/webinar"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Aamblv Technologies Pvt Ltd",
    "url": "https://aamblv-technologies.com"
  }
};

/* How to use these schemas:
 * 
 * 1. Add to your index.html or dynamically inject them
 * 2. Update values with actual data
 * 3. Validate using: https://schema.org/validator/
 * 4. Test with Google's Structured Data Testing Tool
 * 5. Use in JSON-LD script tags like:
 * 
 * <script type="application/ld+json">
 * {schema content here}
 * </script>
 */