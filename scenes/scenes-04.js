function createMinimalistHouse() {
  const house = new THREE.Group();

  // Material para a casa
  const wallMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc99 });
  const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x8b0000 });

  // Corpo da casa (paredes)
  const wallShape = new THREE.Shape();
  wallShape.moveTo(0, 0); // Base do retângulo
  wallShape.lineTo(2, 0);
  wallShape.lineTo(2, 2);
  wallShape.lineTo(0, 2);
  wallShape.lineTo(0, 0);

  const wallGeometry = new THREE.ExtrudeGeometry(wallShape, {
    depth: 2,
    bevelEnabled: false,
  });

  const walls = new THREE.Mesh(wallGeometry, wallMaterial);
  walls.position.set(-1, 0, -1);
  house.add(walls);

  // Telhado
  const roofShape = new THREE.Shape();
  roofShape.moveTo(0, 0);
  roofShape.lineTo(2.5, 0);
  roofShape.lineTo(1.25, 1.5);
  roofShape.lineTo(0, 0);

  const roofGeometry = new THREE.ExtrudeGeometry(roofShape, {
    depth: 2.2,
    bevelEnabled: false,
  });

  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.rotation.x = Math.PI / 2;
  roof.position.set(-1.25, 2, -1.1);
  house.add(roof);

  // Porta
  const doorShape = new THREE.Shape();
  doorShape.moveTo(0, 0);
  doorShape.lineTo(0.6, 0);
  doorShape.lineTo(0.6, 1);
  doorShape.lineTo(0, 1);
  doorShape.lineTo(0, 0);

  const doorGeometry = new THREE.ExtrudeGeometry(doorShape, {
    depth: 0.1,
    bevelEnabled: false,
  });

  const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(-0.3, 0, 1.01);
  house.add(door);

  return house;
}
// Adiciona a casa à cena
const house = createMinimalistHouse();
scene.add(house);

// Animação
function animate() {
  requestAnimationFrame(animate);
  house.rotation.y += 0.01; // Rotação para visualização
  renderer.render(scene, camera);
}

animate();
