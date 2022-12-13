// // PlaneGeometry >> PLANE
const geometry = new THREE.PlaneGeometry(10, 10);
// MeshBasicMaterial >> Material for PLANE
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
// Mesh = Geometry + Material
const plane = new THREE.Mesh(geometry, material);
// Add PLANE Mesh into scene
plane.rotation.set(1.6, 0, 0);
// scene.add( plane );

const cubeGeo = new THREE.BoxGeometry(1, 1);
const cubeMat = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
cubeMesh.position.set(0, 0.6, 0);
// scene.add(cubeMesh)

const cubeGeo2 = new THREE.BoxGeometry(1, 1);
const cubeMat2 = new THREE.MeshBasicMaterial({ color: "blue" });
const cubeMesh2 = new THREE.Mesh(cubeGeo2, cubeMat2);
cubeMesh2.position.set(3, 0.4, 4);
// scene.add(cubeMesh2)

const cubeGeo3 = new THREE.BoxGeometry(1, 1);
const cubeMat3 = new THREE.MeshBasicMaterial({ color: "blue" });
const cubeMesh3 = new THREE.Mesh(cubeGeo3, cubeMat3);
cubeMesh3.position.set(-3, 0.4, 4);

const cubeGeo4 = new THREE.BoxGeometry(1, 1);
const cubeMat4 = new THREE.MeshBasicMaterial({ color: "blue" });
const cubeMesh4 = new THREE.Mesh(cubeGeo4, cubeMat4);
cubeMesh4.position.set(-4, 0.6, -4);

const cubeGeo5 = new THREE.BoxGeometry(1, 1);
const cubeMat5 = new THREE.MeshBasicMaterial({ color: "blue" });
const cubeMesh5 = new THREE.Mesh(cubeGeo5, cubeMat5);
cubeMesh5.position.set(4, 0.6, -4);

let group = new THREE.Group();
group.add(plane, cubeMesh, cubeMesh2, cubeMesh3, cubeMesh4, cubeMesh5);

export default group; 