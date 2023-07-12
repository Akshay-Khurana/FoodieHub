import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
    Header 
        - Logo 
        - Nav Items {right side}
        -Cart
    Body
        - Search Bar
        - Restaurant List 
            - Food Items 
                - Image 
                - Name 
                - Rating
                -Cuisine
    Footer 
        - Links
        - Copyright
*/


// React Fragement 
// use it as a div alternative when we have to wrap elements 
// it will not take div element as a space structure will not include anything 
// <React.Fragement>

// Shorthand for React.Fragment
/* <>

   </> 
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
