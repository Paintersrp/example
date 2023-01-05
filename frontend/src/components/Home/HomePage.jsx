import React from "react";
import Home from "./Home";
import content from "./data";
import NewsletterSubscription from "./Newsletter";

function HomePage() {
  return (
    <div>
      <Home content={content} />
      <NewsletterSubscription />
    </div>
  );
}

export default HomePage;
