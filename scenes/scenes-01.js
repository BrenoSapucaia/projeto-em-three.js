const cubeGeometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial();
{ color: 0xFFFFFF}
const cube = new THREE.Mesh(Geometry, material
);
scene.add(cube);

x3.add(cube, {label: 'Cube'})
renderer.setAnimationLoop(() => {
    
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
x3.tick();

x3.fps(() => {
    
  renderer.render(scene, camera);
});

});