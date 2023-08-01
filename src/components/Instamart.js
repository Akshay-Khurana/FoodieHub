import { useState } from "react";

const Section = ({ title, description,isVisible,setVisible }) => {
//   const [isVisible, setVisible] = useState(false);

  return (
    <div className="border border-black m-2 p-2 ">
      <h1 className="font-bold">{title}</h1>
      {isVisible? 
        <button onClick={() => setVisible(false)} className="underline">
          hide
        </button>
       : 
        <button onClick={() => setVisible(true)} className="underline">
          show
        </button>
      }
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibleSection,setVisibleSection] = useState("hide");
  return (
    <div>
      <h1 className="text-3xl font-bold">Instamart</h1>
      <Section
        title="About"
        description="FoodieHub is an Indian online food ordering and delivery platform. Founded in 2014, FoodieHub is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021.Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart"
        isVisible = {visibleSection === "about"}
        setVisible = {()=>setVisibleSection(visibleSection == "about" ? "hide" : "about")} 
      />
      <Section
        title="Product"
        description="Our food application is a cutting-edge mobile and web platform that revolutionizes the way people explore, order, and indulge in their favorite cuisines. The app offers a comprehensive and user-friendly interface, providing access to a vast network of restaurants, cafes, and eateries. With intuitive search and filtering options, users can easily discover diverse food options tailored to their preferences and dietary requirements."
        isVisible = {visibleSection === "product"}
        setVisible = {()=>setVisibleSection(visibleSection == "product" ? "hide" : "product")}
      />
      <Section
        title="Careers"
        description="At FoodieHub, we are passionate about revolutionizing the way people discover, order, and enjoy their favorite cuisines. Our mission is to create a seamless and delightful food experience for our users while empowering restaurant partners to thrive in the digital age.
        Join our dynamic and innovative team, and be a part of the food tech revolution. As we continue to grow and expand our services, we are looking for talented individuals who share our vision and values. Here, you'll have the opportunity to work in a fast-paced, collaborative, and fun environment, where creativity and innovation are encouraged and rewarded."
        isVisible = {visibleSection === "careers"}
        setVisible = {()=>setVisibleSection(visibleSection == "careers" ? "hide" : "careers")}
      />
    </div>
  );
};

export default Instamart;
