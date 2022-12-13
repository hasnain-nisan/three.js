const Capsule = (args) => {
    const {
        radius, 
        length, 
        capSegments, 
        radialSegments, 
        color, 
        positionX, 
        positionY, 
        positionZ
    } = args

    const geometry = new THREE.CapsuleGeometry(radius, length, capSegments, radialSegments);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const capsule = new THREE.Mesh(geometry, material);
    capsule.position.set(positionX ?? 0, positionY ?? 0, positionZ ?? 0);

    return capsule;
}

export default Capsule;