import React from 'react'
import QuestionImage from "../Assets/Right_Background.png"

const Question = () => {
    return (
        <div className='question-section-wrapper '>
            <div className='question-background-image-container'>
                <img src={QuestionImage} alt='' />
            </div>
            <div className='work-section-top'>
                <p className='primary-subheading'>
                    The Question
                </p>
                <h1 className='primary-heading'>
                    What's for dinner?
                </h1>
                <p className='primary-text'>
                    Cookzy banishes mealtime dilemmas, making "What's for dinner?" a breeze.
                    It's the antidote to culinary chaos, offering a fun, foolproof way to plan meals, cut costs, and enjoy delicious home-cooked dishes.
                    With Cookzy, you'll conquer meal planning mayhem, one recipe at a time!
                </p>
            </div>
        </div>
    )
}

export default Question