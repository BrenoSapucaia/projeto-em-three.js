// Cria material com propriedades corretas
const material = new THREE.MeshLambertMaterial({
  color: 0x483D8B,
  side: THREE.BackSide
});

// Criação do cubo
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  material
);
scene.add(cube);

// Criação do círculo
const circle = new THREE.Mesh(
  new THREE.CircleBufferGeometry(0.5, 20),
  material
);
circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(circle);

// Criação do cone
const cone = new THREE.Mesh(
  new THREE.ConeBufferGeometry(0.3, 0.5),
  material
);
cone.position.set(-2, 2, 0);
scene.add(cone);

// Criação do cilindro
const cylinder = new THREE.Mesh(
  new THREE.CylinderBufferGeometry(0.5, 0.5, 1),
  material
);
cylinder.position.set(2, 1, 0);
scene.add(cylinder);

// Criação do plano
const plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(1, 1),
  material
);
plane.position.set(2, 2, 0);
plane.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(plane);

// Criação da esfera
const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.3, 20, 20),
  material
);
sphere.position.set(0, 2, 0);
scene.add(sphere);

// Adicionando objetos ao X3
x3.add(sphere, { label: 'Sphere' });
x3.add(plane, { label: 'Plane' });
x3.add(cylinder, { label: 'Cylinder' });
x3.add(cone, { label: 'Cone' });
x3.add(circle, { label: 'Circle' });
x3.add(cube, { label: 'Cube' });

// Loop de animação
renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
