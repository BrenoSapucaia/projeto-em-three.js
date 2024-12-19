
        // Renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Adicionar um plano
        const geometry = new THREE.PlaneGeometry(10, 10);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Carregar modelo OBJ
        const loader = new THREE.OBJLoader();
        loader.load('path/to/your/model.obj', function (object) {
            scene.add(object);
        });

        // Função de animação
        function animate() {
            requestAnimationFrame(animate);

            // Renderizar a cena
            renderer.render(scene, camera);
        }

        // Iniciar animação
        animate();
