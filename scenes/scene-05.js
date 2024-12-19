const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 60, 60), // Corrigido para SphereGeometry
    new THREE.MeshLambertMaterial({
        color: 0xffffff,
    })
);
ball.position.set(1, 1, 0); // Posicionando a bola
ball.castShadow = true; // Permitir que a esfera projete sombra
scene.add(ball);

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10), // Corrigido para PlaneGeometry
    new THREE.MeshPhongMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true; // Permitir que o piso receba sombra
scene.add(floor);

const shadowLight = new THREE.PointLight(0xffffff, 0.75); // Corrigido para PointLight
shadowLight.position.set(0, 4, 0);
shadowLight.castShadow = true; // Ativar sombras na luz
scene.add(shadowLight);

x3.add(floor);
x3.add(shadowLight);
x3.add(ball);

renderer.setAnimationLoop(() => {
    x3.tick();
    renderer.render(scene, camera);
});
window.onload = () => {
    const audioPlayer = document.getElementById('audioPlayer');
    let isPlaying = false; // Estado inicial do áudio

    // Tenta reproduzir o áudio
    audioPlayer.play().catch(error => {
        console.error("Erro ao tentar reproduzir o áudio:", error);
    });

    // Ativa/desativa a música com a barra de espaço
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') { // Detecta a barra de espaço
            event.preventDefault(); // Evita o comportamento padrão da barra de espaço (scroll)

            if (isPlaying) {
                audioPlayer.pause();
                console.log("Música pausada.");
            } else {
                audioPlayer.play().catch(error => {
                    console.error("Erro ao tentar reproduzir o áudio:", error);
                });
                console.log("Música tocando.");
            }

            isPlaying = !isPlaying; // Alterna o estado
        }
    });

    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        console.log("Música começou a tocar.");
    });

    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        console.log("Música foi pausada.");
    });
};