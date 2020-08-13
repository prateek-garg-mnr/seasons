import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './seasonDisplay'
class App extends React.Component{

    // constructor(props) {
    //     super(props)

    //     // this is the only time we do the direct assignment ot this.state
    //     // one way to initialize state
    //     this.state = {
    //         lat:null,
    //         errorMessaage:''
    //     }
    // }

    // other way of defining state outside of constructor
    state = {lat:null, errorMessaage:''}

    //lifecycle method
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{

                // always update state using setState({})
                this.setState({
                    lat:position.coords.latitude,
                })
                // never do 
                // this.state.lat = position.coords.latitude
            },
            err=>this.setState({
                errorMessaage:err.message
            })
        )
    }
    
    // componentDidUpdate(){
    //     console.log('My component just updated')
    // }

    render(){
        // conditional rendering
       if(this.state.errorMessaage && !this.state.lat){

           return (<div>Error:{this.state.errorMessaage}</div>)

       } else if(this.state.lat && !this.state.errorMessaage){

           return(<SeasonDisplay lat={this.state.lat}/>)

       } else{

           return (<div>Loading</div>) 

       }
    }
}

ReactDOM.render(<App />,document.querySelector('#root'))