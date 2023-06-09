import React from 'react'
import './App.css'
import axios from 'axios'


class App extends React.Component {
  state = { advice: ''};

  componentDidMount(){
   this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then ((response) => {
        const{ advice } = response.data.slip;
        // console.log (advice);
        this.setState({advice });
    })

    .catch ((error)=>{
        console.log(error);
    })
  }

  render () {
    return (
        // <h1>{this.state.advice}</h1>
        <div className = "app">
            <div className = "card">
                <h1 className="heading">{this.state.advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span>NEXT</span>
                </button>
            </div>
        </div>
    );
  }
}

export default App;