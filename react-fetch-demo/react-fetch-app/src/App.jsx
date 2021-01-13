import React from 'react';
import api from "./api"

class App extends React.Component{
  componentDidMount(){
    api.getBanner().then(res=>res.json()).then(data=>{
      console.log(data)
    })
  }
  render(){
    return(
      <div>
          App
      </div>
    )
  }
}

export default App;
