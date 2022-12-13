const Cone = (args) => {
  const {
    radius,
    height,
    radialSegments,
    color,
    positionX,
    positionY,
    positionZ,
  } = args;

  const geometry = new THREE.ConeGeometry(radius, height, radialSegments);
  const material = new THREE.MeshBasicMaterial({ color: color });
  const cone = new THREE.Mesh(geometry, material);
  cone.position.set(positionX ?? 0, positionY ?? 0, positionZ ?? 0);

  return cone;
};

export default Cone;
