console.log('%c Hello from /scripts/script.js ', 'background: lemonchiffon; border: 1px solid #fff');
console.log('%c Welcome to tris-webpack-boilerplate! ', 'background: lavenderblush; border: 1px solid #fff');
//import HumanModel from '../models/human.obj';
// add custom js below
var obj = require('./human.obj');

export default class App {
    init() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.fogConfig = {
            color: '#353c3c',
            near: 1,
            far: 208
        };
        // var human = require('../models/human.obj');
        // console.info('Human', human);
        
        this.pages = {
            page1: 'page1',
            page2: 'page2'
        };
        console.log(this.width);
        console.log(this);
        // Initializing the scene object
        this.createScene();

        // Adding the camera
        this.createCamera();
        this.addFloor();
        //this.createObject();
        this.addBackgroundShape();
        this.addCameraControls();

        this.animate();

        this.pointLightObj3 = {
            color: '#d3263a',
            intensity: 8.2,
            position: {
              x: 16,
              y: 100,
              z: -68,
            }
          };
          this.addTweensOnPages('page1');
        this.addPointLight(this.pointLightObj3);
    }

    addTweensOnPages(params) {
        switch(params) {
            case 'page1':
            console.log("page1");
            //TweenMax.to(this.sphere.position, .6 + (2 / 4000), { y: -1, ease: Quint.easeOut, delay: 1 / 4000 });
            TweenMax.fromTo([this.sphere.position], 1, {x: 0, z: 0}, {x: -5, z: 10});
            TweenMax.fromTo([this.sphere.rotation], 1, {x: 0}, {x: Math.PI / 4});
            break;
            case 'page2': 
            console.log("page2");
            TweenMax.to(this.sphere.position, 1.6 + (2 / 40), { z: 70, ease: Quint.easeOut, delay: 1 / 40 });
            break;
        }
    }

    addPointLight(params) {
        // sample params
        // {
        //   color: '#00ff00',
        //   intensity: 4,
        //   position: {
        //     x: 18,
        //     y: 22,
        //     z: -9,
        //   }
        // };

        this.pointLight = new THREE.PointLight(params.color, params.intensity);
        this.pointLight.position.set(params.position.x, params.position.y, params.position.z);

        this.scene.add(this.pointLight);
    }

    createScene() {
        this.scene = new THREE.Scene();
  
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.width, this.height);
    
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
        document.body.querySelector('#world').appendChild(this.renderer.domElement);
    
    //    / this.scene.fog = new THREE.Fog(this.fogConfig.color, this.fogConfig.near, this.fogConfig.far);
    }

    loadModel() {
        object.traverse( function ( child ) {
            if ( child.isMesh ) child.material.map = texture;
        } );
        object.position.y = - 95;
        scene.add( object );
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(20, this.width / this.height, 1, 1000);
        this.camera.position.set(0, 0, 155);
  
        this.scene.add(this.camera);
    }

    addFloor() {
        const floor = { color: '#000000' };
        const planeGeometry = new THREE.PlaneGeometry(200, 200);
        const planeMaterial = new THREE.MeshStandardMaterial({
        color: floor.color,
        metalness: 0,
        emissive: '#000000',
        roughness: 0,
        });
    }

    addCameraControls() {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        
        this.controls.enabled = true;
    }

    addBackgroundShape() {
        // const planeGeometry = new THREE.PlaneGeometry(400, 100);
        // const planeMaterial = new THREE.MeshPhysicalMaterial({ color: '#fff' });
        // this.backgroundShape = new THREE.Mesh(planeGeometry, planeMaterial);
    
        // this.backgroundShape.position.y = 10;
        // this.backgroundShape.position.z = -150;
    
        // this.scene.add(this.backgroundShape);
        
        var geometry = new THREE.SphereGeometry( 10, 64, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
        this.sphere = new THREE.Mesh( geometry, material );
        this.sphere.name = "Centered main sphere";
        this.sphere.position.y += 20;
        //sphere.position.y += 10.5;
       // sphere.rotation._y += 20;
        console.log(this.sphere);
        this.scene.add( this.sphere );

        var geometryBox = new THREE.BoxGeometry( 100, 0, 100 );
        var materialBox = new THREE.MeshPhongMaterial( {color: 0xf25346, } );
        this.box = new THREE.Mesh(geometryBox, materialBox);
        this.box.castShadow = true;
        this.box.receiveShadow = true;
        this.scene.add(this.box);
        
      }
      onDocumentMouseMove( event ) {
        var mouseX = ( event.clientX - window.innerWidth / 2 ) / 2;
        var mouseY = ( event.clientY - window.innerHeight / 2 ) / 2;
        console.log(mouseX  + " x:y " + mouseY);
    }
    loop() {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
        this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * .05;

        this.camera.lookAt( this.scene.position );

        this.renderer.render(this.scene, this.camera);
    } 
    
    

    // GAME LOOP FUNCTION
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        //this.scene.rotation.y += .05;
        
        //this.sphere.rotation.y += 0.005;
        document.addEventListener('mousemove', this.onDocumentMouseMove, false);
        //this.loop();
        this.renderer.render(this.scene, this.camera);
        
        
        
    }
}