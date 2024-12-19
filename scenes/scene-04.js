const cube = new THREE.Mesh(
    new THREE.BoxGeometry(), // Correção de BoxBufferGeometry para BoxGeometry
    new THREE.MeshLambertMaterial({
        color: 0x006A89,
    })
);
cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true; // Permitir que o cubo projete sombra
scene.add(cube);


const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10), // Correção de PlaneBufferGeometry para PlaneGeometry
    new THREE.MeshPhongMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true; 
scene.add(floor);

const shadowLight = new THREE.SpotLight(0xffffff,3,10, 0.4); 
shadowLight.position.y = 8;
shadowLight.castShadow = true;
shadowLight.target = cube;

scene.add (shadowLight);

x3.add (shadowLight, {helper: {visible: false}});
x3.add(cube);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
});

renderer