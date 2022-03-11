import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasondisplay";
import Spinner from "./spinner";


class App extends React.Component{
   state = {lat:null,errorMessage:''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat :position.coords.latitude}),
            err =>this.setState({errorMessage:err})
        )
    }
    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message ="Please accept Location request"/> 
    
        
    }

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
                </div>
        )
        
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));
