import React, {Component} from 'react';
import Navigation from './components/Navigation';
import { GlobalStyle } from './Globalstyles';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition';
import Signin from './components/Signin';
import Register from './components/Register';

const app = new Clarifai.App({
 apiKey: process.env.REACT_APP_CLARIFAI_API_KEY
});

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
}
};

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
  this.setState({ user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
  }})
  }


  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
  };

  displayFaceBox = (box) => {
    this.setState({box: box});
  };

  onInputChange = (event) => {
  this.setState({input: event.target.value})
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({imageUrl: this.state.input});

    app.models.predict(
      {
        id: 'face-detection',
        name: 'face-detection',
        version: '6dc7e46bc9124c5c8824be4822abe105',
        type: 'visual-detector',
      }, this.state.input)
    .then(response => {
      if(response){
        fetch('https://shrouded-sands-71043.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(err => console.log(err))
      }
       this.displayFaceBox(this.calculateFaceLocation(response))
      })
    .catch(err => console.log(err))
     }

     onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState(initialState)
      } else if(route === 'home'){
        this.setState({isSignedIn: true})
      }
      this.setState({route: route})
     };

  render(){
   const {isSignedIn, imageUrl, route, box} = this.state
  return (
   
    <div className="App">
      <ParticlesBg
       type="cobweb"
       bg={true}
       num='140' 
       color='#ebebeb'
       />
      <GlobalStyle/>
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
      {
       route === 'home' ?
        <div>
        <Logo/>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
       <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
       <FaceRecognition imageUrl={imageUrl} box={box}/>
       </div>
       :
       (
        this.state.route === 'signin' ?
        <div>
          <Logo/> 
         <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        </div>
        : 
        <div>
          <Logo/>
        <Register onRouteChange={this.onRouteChange}
        loadUser={this.loadUser}/>
        </div>
       )
        
       
      }
     
    </div>
  );
}
}

export default App;
