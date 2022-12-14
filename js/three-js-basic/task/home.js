let home = 'as';

//plane
const geometry = new THREE.PlaneGeometry(15, 15);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
plane.rotation.set(1.6, 0, 0);

const wall1 = new THREE.BoxGeometry(12, 5, .3);
const wallMat1 = new THREE.MeshBasicMaterial({ color: "red" });
const wallMesh1 = new THREE.Mesh(wall1, wallMat1);
wallMesh1.position.set(0, 2.3, 5);

const wall2 = new THREE.BoxGeometry(12, 5, .3);
const wallMat2 = new THREE.MeshBasicMaterial({ color: "red" });
const wallMesh2 = new THREE.Mesh(wall2, wallMat2);
wallMesh2.position.set(0, 2.6, -5);

const roof1 = new THREE.BoxGeometry(15, 6.1, 0.3);
const roof1Mat = new THREE.MeshBasicMaterial({ color: "grey" });
const roofMesh = new THREE.Mesh(roof1, roof1Mat);
roofMesh.rotation.set(-5.2, 0, 0);
roofMesh.position.set(0, 6.4, -3);

const roof2 = new THREE.BoxGeometry(15, 7.4, 0.3);
const roof2Mat = new THREE.MeshBasicMaterial({ color: "grey" });
const roofMesh2 = new THREE.Mesh(roof2, roof2Mat);
roofMesh2.rotation.set(5.2, 0, 0);
roofMesh2.position.set(0, 6.1, 3);

let group = new THREE.Group();
group.add(plane, wallMesh1, wallMesh2, roofMesh, roofMesh2);

export {
    plane,
    group
};