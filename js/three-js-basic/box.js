
const Box = (args) => {
  const {
    boxWidth,
    boxHeight,
    boxDepth,
    widthSeg,
    heightSeg,
    depthSeg,
    boxColor,
    positionX,
    positionY,
    positionZ,
  } = args;

  //gemometry
  let boxGeometry = new THREE.BoxGeometry(
    boxWidth ?? 1,
    boxHeight ?? 1,
    boxDepth ?? 1,
    widthSeg ?? 1,
    heightSeg ?? 1,
    depthSeg ?? 1
  );

  //material
  var boxMaterial = new THREE.MeshBasicMaterial({
    color: boxColor ?? "blue",
  });

  //mesh = geometry + material
  var box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(positionX ?? 0, positionY ?? 0, positionZ ?? 0);

  return box;
}

export default Box;