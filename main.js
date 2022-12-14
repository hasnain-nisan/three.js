import Box from "./js/three-js-basic/box";
import Capsule from "./js/three-js-basic/capsule";
import Cone from "./js/three-js-basic/cone";
import boxes from "./js/three-js-basic/task/1";
import Plane from "./js/three-js-basic/plane";
// import group from "./js/three-js-basic/task/2";
// import {plane, group} from "./js/three-js-basic/task/home"

var width = window.innerWidth;
var height = window.innerHeight;
var viewAngle = 90;
var nearClipping = 0.1;
var farClipping = 9999;

//renderer
var renderer = new THREE.WebGLRenderer({
  antialize: true
});
renderer.setSize(width, height);

//html element to show the renderer
var element = document.getElementById('canvas');
element.appendChild(renderer.domElement);
 
// Scene
var scene = new THREE.Scene(); 

//camera
var camera = new THREE.PerspectiveCamera(viewAngle, width/height, nearClipping, farClipping);
camera.position.set(0, 3, 20);




//animation function
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}

animate();