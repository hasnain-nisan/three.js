const Plane = (args) => {
  const {
    x,
    y,
    color,
    positionX,
    positionY,
    positionZ,
  } = args;

  const geometry = new THREE.PlaneGeometry(x, y);
  const material = new THREE.MeshBasicMaterial({ 
    color: color,
    side: THREE.DoubleSide 
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(positionX ?? 0, positionY ?? 0, positionZ ?? 0);

  return plane;
};

export default Plane;
