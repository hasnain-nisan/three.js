import Box from "./js/three-js-basic/box";
import Capsule from "./js/three-js-basic/capsule";
import Cone from "./js/three-js-basic/cone";
import boxes from "./js/three-js-basic/task/1";
import Plane from "./js/three-js-basic/plane";
import group from "./js/three-js-basic/task/2";

var width = window.innerWidth;
var height = window.innerHeight;
var viewAngle = 45;
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


// Geometry + Material = Mesh 


//animation function
const animate = () => {
  group.rotation.y += .01
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}

animate();