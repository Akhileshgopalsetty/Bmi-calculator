import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Body from './Body/Body'

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'Enter your name', weight: 90, height: 180, bmi: 27, message: '', optimalweight: ''};
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      let heightSquared = (this.state.height/100  * this.state.height/100);
      let bmi = this.state.weight / heightSquared;
      let low = Math.round(18.5 * heightSquared);                                                         
      let high = Math.round(24.99 * heightSquared);    
      let message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
      }
      else if(bmi >= 30){
          message ="You are obese";
      }
      else if(bmi < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
      <Header />
        <div className="App-header">
    
        </div>
        <div className='Bmiform'>
          <form onSubmit={this.submitMe}>
        <p>To Know your BMI Please enter your details and click SUBMIT.</p>
            <label>
              Please enter your name
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />
             <label>
             Enter your height in cm
            </label>
            <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label>
             Enter your weight in kg 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            <label className='Resultmessage'>{this.state.checked} Hello {this.state.name}, Your BMI is {this.state.bmi} </label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             
            <input type="submit" value="Submit"/>
          </form>
          </div>
        <Body />
      
      </div>
    );
  }
}

export default App;
