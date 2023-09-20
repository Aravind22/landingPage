import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = ({workComponentRef}) => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Set Your Preferences",
      text: "Start by customizing your meal planning experience. Tell Cookzy your dietary preferences, including dietary restrictions, cuisine choices, and meal types.",
    },
    {
      image: ChooseMeals,
      title: "Get Personalized Recipes",
      text: "Cookzy's algorithm suggests personalized recipes that match your preferences,tastes and requirements, ensuring a tailored culinary journey",
    },
    {
      image: DeliveryMeals,
      title: "Plan, Shop, and Cook",
      text: "Cookzy helps you plan meals, generates shopping lists, and provides step-by-step cooking instructions. Enjoy delicious meals with ease.",
    },
  ];
  return (
    <div className="work-section-wrapper" ref={workComponentRef}>
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          In just three steps, you'll discover how our app streamlines meal planning, offers personalized recipes, 
          and empowers you to create delicious dishes effortlessly. Let's dive in and uncover the magic behind Cookzy.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;