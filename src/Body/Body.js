import React from 'react';


import  './Body.css'


const Body = (props) =>{
     return(
        <div className='Container'>
                 <div className='Info'> 

                <h1> BMI introduction  </h1>
                <p>  BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that is used by the calculator.  </p>
                
                <h1> BMI table for adults </h1>
                <p>  This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older. </p>
                
                <img className='pic' src='https://www.mealpro.net/wp-content/uploads/2017/05/BMI-Widget-Chart.png' height='400px' alt='table' aling='center'/>
                
                <h1> BMI chart for adults </h1>
                <p> This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent subdivisions within a major categorization. </p>
                
                <img className='pic' src='https://cdn2.slidemodel.com/wp-content/uploads/6338-01-bmi-chart-1.jpg' width='600' height='400' aling='center' alt='pic'/>
                
                <h1> BMI table for children and teens, age 2-20 </h1>
                <p> The Centers for Disease Control and Prevention (CDC) recommends BMI categorization for children and teens between age 2 and 20.</p>
                
                <img className='pic' src='https://biomedgrid.com/table/volume4/american-journal-of-biomedical-science-&-research.ID.000757.T001.png' width='700' height='300'   alt='pic'/>

                <h1> Risks associated with being overweight </h1>
                <p> Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):

                    <ul>
                        <li>High blood pressure</li>
                        <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                        <li>Type II diabetes</li>
                        <li>Coronary heart disease</li>
                        <li>Stroke</li>
                        <li>Gallbladder disease</li>
                        <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                        <li>Sleep apnea and breathing problems</li>
                        <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                        <li>Low quality of life</li>
                        <li>Mental illnesses such as clinical depression, anxiety, and others</li>
                        <li>Body pains and difficulty with certain physical functions</li>
                        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                    </ul>
                    As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.</p>           
                    <h1> Risks associated with being underweight</h1>
                    <p>Being underweight has its own associated risks, listed below:
                    <ul> 
                    <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
                    <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
                    <li>A decrease in immune function</li>
                    <li>Growth and development issues, particularly in children and teenagers</li>
                    <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
                    <li>Potential complications as a result of surgery</li>
                    <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                    </ul>
                    In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.
                    </p>

                        <h1>Limitations of BMI</h1>
                        <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>

                        <h2>In adults:</h2>

                        <p>BMI cannot be fully accurate because it is a measure of excess body weight, rather than excess body fat. BMI is further influenced by factors such as age, sex, ethnicity, muscle mass, and body fat, and activity level, among others. For example, an older person who is considered a healthy weight, but is completely inactive in their daily life may have significant amounts of excess body fat even though they are not heavy. This would be considered unhealthy, while a younger person with higher muscle composition of the same BMI would be considered healthy. In athletes, particularly bodybuilders who would be considered overweight due to muscle being heavier than fat, it is entirely possible that they are actually at a healthy weight for their body composition. Generally, according to the CDC:</p>

                        <ul>
                        <li>Older adults tend to have more body fat than younger adults with the same BMI.</li>
                        <li>Women tend to have more body fat than men for an equivalent BMI.</li>
                        <li>Muscular individuals and highly trained athletes may have higher BMIs due to large muscle mass.</li>
                        </ul>
                        
                        <h2>In children and adolescents:</h2>

                        <p>The same factors that limit the efficacy of BMI for adults can also apply to children and adolescents. Additionally, height and level of sexual maturation can influence BMI and body fat among children. BMI is a better indicator of excess body fat for obese children than it is for overweight children, whose BMI could be a result of increased levels of either fat or fat-free mass (all body components except for fat, which includes water, organs, muscle, etc.). In thin children, the difference in BMI can also be due to fat-free mass.</p>

                        <p>That being said, BMI is fairly indicative of body fat for 90-95% of the population, and can effectively be used along with other measures to help determine an individual's healthy body weight.</p>

                </div>
                <div className='Footer'>
                <div className='Fbody'>    
                </div>
                </div>
            </div>
        );
    }


export default  Body;