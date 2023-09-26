import React from 'react'

const Benefits = () => {
    const benefitsInfoData = [
        {
            title: "📋 Recipe Recommendations:",
            text: "Discover a world of mouthwatering recipes, carefully curated to match your taste buds. From quick weeknight dinners to gourmet delights, we have you covered.",
        },
        {
            title: "🛒 Smart Grocery Lists:",
            text: "Our app generates organized grocery lists based on your chosen recipes. No more wandering the aisles aimlessly or forgetting essential ingredients.",
        },
        {
            title: "🌱 Nutrition Insights:",
            text: "Make informed choices with detailed nutritional information for every recipe. Cookzy helps you eat well and stay on track with your health goals.",
        },
        {
            title: "💰 Cost Savings:",
            text: "Save money on groceries by planning meals efficiently and avoiding unnecessary food waste. Enjoy restaurant-quality meals at a fraction of the cost.",
        },
    ];
    return (
        <div className="work-section-wrapper" >
            <div className="work-section-top">
                <p className="primary-subheading">Benfits</p>
                <h1 className="primary-heading">What's in it for you?</h1>
                {/* <p className="primary-text">
                    In just three steps, you'll discover how our app streamlines meal planning, offers personalized recipes,
                    and empowers you to create delicious dishes effortlessly. Let's dive in and uncover the magic behind Cookzy.
                </p> */}
            </div>
            <div className="work-section-bottom">
                {benefitsInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits