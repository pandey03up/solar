import React,{useState} from 'react';
import reactor from './Images/arc-reacter.jpg';
import authentication from './Images/auth.jpg';
import code from './Images/code.jpg';
import wifi from './Images/wifi.jpg';
import './App.css';

function App() {
  const [images,set_images] = useState([
    reactor,authentication,code,wifi
  ])
  const moveForward = () =>{
    let all_images = [...images]
    let choped_image = all_images.splice(0,1)
    all_images = [...all_images,choped_image[0]]
    set_images(all_images)
  }
  const moveBack = () =>{
    let all_images = [...images]
    let choped_image = all_images.splice(images.length-1,1)
    all_images = [choped_image[0],...all_images]
    set_images(all_images)
  }
  return (
    <div>
      <div className = 'main_container'>
        <div className = 'big_container'>
          <div id = 'biggest' className = 'big_image'>
            <img  src = {images[0]} alt = 'image_' width = '100%' height = '100%'/>
          </div>
        </div>
        <div className = 'smalls_container'>
          <div id = 'small_1' className = 'small_1'>
            <img src = {images[1]} alt = 'image_1' width = '100%' height = '100%' onClick = {()=> moveBack()}/>
          </div>
          <div id = 'small_2' className = 'small_2'>
            <img src = {images[2]} alt = 'image_2' width = '100%' height = '100%' onClick = {()=> moveForward()}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
