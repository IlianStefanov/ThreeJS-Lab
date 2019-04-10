
// // We'll define a Decoration, which is just a THREE.Group with some cusomtisation
// var Decoration = function() {

//     // Run the Group constructor with the given arguments
//     THREE.Group.apply(this, arguments);

//     // A random color assignment
//     var colors = ['#ff0051', '#f56762','#a53c6c','#f19fa0','#72bdbf','#47689b'];

//     // The main bauble is an Octahedron
//     var bauble = new THREE.Mesh(
//         addNoise(new THREE.OctahedronGeometry(12,1), 2),
//         new THREE.MeshStandardMaterial( {
//             color: colors[Math.floor(Math.random()*colors.length)],
//             shading: THREE.FlatShading ,
//             metalness: 0,
//             roughness: 0.8,
//             refractionRatio: 0.25
//     } )
//     );
//     bauble.castShadow = true;
//     bauble.receiveShadow = true;
//     bauble.rotateZ(Math.random()*Math.PI*2);
//     bauble.rotateY(Math.random()*Math.PI*2);
//     this.add(bauble);

//     // A cylinder to represent the top attachement
//     var shapeOne = new THREE.Mesh(
//         addNoise(new THREE.CylinderGeometry(4, 6, 10, 6, 1), 0.5),
//         new THREE.MeshStandardMaterial( {
//             color: 0xf8db08,
//             shading: THREE.FlatShading ,
//             metalness: 0,
//             roughness: 0.8,
//             refractionRatio: 0.25
//         } )
//     );
//     shapeOne.position.y += 8;
//     shapeOne.castShadow = true;
//     shapeOne.receiveShadow = true;
//     this.add(shapeOne);

//     // A Torus to represent the top hook
//     var shapeTwo = new THREE.Mesh(
//         addNoise(new THREE.TorusGeometry( 2,1, 6, 4, Math.PI), 0.2),
//         new THREE.MeshStandardMaterial( {
//             color: 0xf8db08,
//             shading: THREE.FlatShading ,
//             metalness: 0,
//             roughness: 0.8,
//             refractionRatio: 0.25

//         } )
//     );
//     shapeTwo.position.y += 13;
//     shapeTwo.castShadow = true;
//     shapeTwo.receiveShadow = true;
//     this.add(shapeTwo);

// };
// Decoration.prototype = Object.create(THREE.Group.prototype);
// Decoration.prototype.constructor = Decoration;

// // Create a scene which will hold all our meshes to be rendered
// var scene = new THREE.Scene();

// // Create and position a camera
// var camera = new THREE.PerspectiveCamera(
//     60,                                   // Field of view
//     window.innerWidth/window.innerHeight, // Aspect ratio
//     0.1,                                  // Near clipping pane
//     1000                                  // Far clipping pane
// );

// // Reposition the camera
// camera.position.set(0,30,50);

// // Point the camera at a given coordinate
// camera.lookAt(new THREE.Vector3(0,15,0))

// // Create a renderer
// var renderer = new THREE.WebGLRenderer({ antialias: true });

// // Size should be the same as the window
// renderer.setSize( window.innerWidth, window.innerHeight );

// // Set a near white clear color (default is black)
// renderer.setClearColor( 0xfff6e6 );

// // Enable shadow mapping
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// // Append to the document
// document.body.appendChild( renderer.domElement );

// // Add an ambient lights
// var ambientLight = new THREE.AmbientLight( 0xffffff, 0.3 );
// scene.add( ambientLight );

// // Add a point light that will cast shadows
// var pointLight = new THREE.PointLight( 0xffffff, 1 );
// pointLight.position.set( 25, 50, 25 );
// pointLight.castShadow = true;
// pointLight.shadow.mapSize.width = 1024;
// pointLight.shadow.mapSize.height = 1024;
// scene.add( pointLight );

// // A basic material that shows the ground
// var shadowMaterial = new THREE.ShadowMaterial( { color: 0xeeeeee } );
// shadowMaterial.opacity = 0.5;
// var groundMesh = new THREE.Mesh(
//     new THREE.BoxGeometry( 100, .1, 100 ),
//     shadowMaterial
// );
// groundMesh.receiveShadow = true;
// scene.add( groundMesh );

// // Add some new instances of our decoration
// var decoration1 = new Decoration();
// decoration1.position.y += 10;
// scene.add(decoration1);

// var decoration2 = new Decoration();
// decoration2.position.set(20,15,-10);
// decoration2.scale.set(.8,.8,.8);
// scene.add(decoration2);

// var decoration3 = new Decoration();
// decoration3.position.set(-20,20,-12);
// scene.add(decoration3);

// // Render the scene/camera combnation
// renderer.render(scene, camera);

// // Add an orbit control which allows us to move around the scene. See the three.js example for more details
// // https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
// var controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.target = new THREE.Vector3(0,15,0);
// controls.maxPolarAngle = Math.PI / 2;
// controls.addEventListener( 'change', function() { renderer.render(scene, camera); } ); // add this only if there is no animation loop (requestAnimationFrame)

// /**
//  * Helper function to add random noise to geometry vertixes
//  *
//  * @param geometry The geometry to alter
//  * @param noiseX Amount of noise on the X axis
//  * @param noiseY Amount of noise on the Y axis
//  * @param noiseZ Amount of noise on the Z axis
//  * @returns the geometry object
//  */
// function addNoise(geometry, noiseX, noiseY, noiseZ) {

//     noiseX = noiseX || 2;
//     noiseY = noiseY || noiseX;
//     noiseZ = noiseZ || noiseY;

//     // loop through each vertix in the geometry and move it randomly
//     for(var i = 0; i < geometry.vertices.length; i++){
//         var v = geometry.vertices[i];
//         v.x += -noiseX / 2 + Math.random() * noiseX;
//         v.y += -noiseY / 2 + Math.random() * noiseY;
//         v.z += -noiseZ / 2 + Math.random() * noiseZ;
//     }

//     return geometry;
// }


// COLOR PALETTE
var Colors = {
    red:0xf25346,
	white:0xd8d0d1,
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
    blue:0x68c3c0,
    nightSky: 'rgb(206, 7, 138)',
    fogNightSky: 'rgb(65, 54, 145)'
};


// EVERY VARIABLE FOR THIS CONCEPT: https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2016/04/Animated3DScene_three-components.png 
var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container, controls;

function createScene() {
    // Get the width and the height of the screen,
	// use them to set up the aspect ratio of the camera 
    // and the size of the renderer.
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    // Create the scene
    scene = new THREE.Scene();

    // Add a fog effect to the scene; same color as the
	// background color used in the style sheet
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    // Create Camera 
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;

    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    // Set the position of the camera
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 200;
    
    renderer = new THREE.WebGLRenderer({
        // Allow transparency to show the gradient background
		// we defined in the CSS
        alpha: true,
        // Activate the anti-aliasing; this is less performant,
		// but, as our project is low-poly based, it should be fine :)
		antialias: true 
    });

    // Define the size of the renderer; in this case,
    // it will fill the entire screen
    renderer.setSize(WIDTH, HEIGHT);

    // Enable shadow rendering
    renderer.shadowMap.enabled = true;

    // Add the DOM element of the renderer to the 
    // container we created in the HTML
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);
    //controls = new THREE.OrbitControls(camera, container)
    // Listen to the screen: if the user resizes it
    // we have to update the camera and the renderer size
    window.addEventListener('resize', handleWindowResize, false);
}

function handleWindowResize() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

var hemishpereLight, shadowLight;

function createLights() {
    // A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
    // the third parameter is the intensity of the light
    hemishpereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);

    // A directional light shines from a specific direction. 
    // It acts like the sun, that means that all the rays produced are parallel. 
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    // Set the direction of the light 
    shadowLight.position.set(150, 350, 350);

    // Allow shadow casting 
    shadowLight.castShadow = true;

    // define the visible area of the projected shadow
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    // define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    ambientLight = new THREE.AmbientLight(0xdc8874, .5);
    
    
    console.log("Shadow light object");
    console.log(shadowLight);

    // an ambient light modifies the global color of a scene and makes the shadows softer

    scene.add(ambientLight);
    scene.add(hemishpereLight);
    scene.add(shadowLight);
}

// First let's define a Sea object :
Sea = function() {
    // create the geometry (shape) of the cylinder;
	// the parameters are: 
    // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
    var geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(- Math.PI / 2));

    // create the material 
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.blue,
        transparent: true,
        opacity: .6,
        shading: THREE.FlatShading,
    });

    this.waves = [];

    var l = geom.vertices.length;
    console.log("Vertices: " + l);

    for(var i = 0; i < l; i++) {
        var v = geom.vertices[i];

        this.waves.push({
            y: v.y,
            x: v.x,
            z: v.z,
            // a random angle
            ang: Math.random()*Math.PI*2,
            // a random distance
            amp: 5 + Math.random() * 15,
            // a random spreed between 0.016 and 0.048 radians / frame
            speed: 0.016 + Math.random() * 0.032
        });
    }

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
}

// now we create the function that will be called in each frame 
// to update the position of the vertices to simulate the waves
Sea.prototype.moveWaves = function() {

    // get the vertices
    var verts = this.mesh.geometry.vertices;
    var l = verts.length;

    for(var i = 0; i < l; i++) {
        var v = verts[i];

        // get the data associated to it
        var vprops = this.waves[i];

        // update the position of the vertex
        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;

        // increment the angle for the next frame
		vprops.ang += vprops.speed;
    }
    // Tell the renderer that the geometry of the sea has changed.
	// In fact, in order to maintain the best level of performance, 
	// three.js caches the geometries and ignores any changes
	// unless we add this line
    this.mesh.geometry.verticesNeedUpdate=true;
    this.mesh.rotation.z += .001;
};

var sea; 

function createSea() {
    sea = new Sea();

    // push it a little bit at the bottom of the scene
	sea.mesh.position.y = -600;
    scene.add(sea.mesh);
}

Cloud = function() {
    // Create an empty container that will hold the different parts of the cloud
    this.mesh = new THREE.Object3D();

    // create a cube geometry;
	// this shape will be duplicated to create the cloud
    var geom = new THREE.BoxGeometry(20,20,20);

    // create a material; a simple white material will do the trick
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.white,
    });

    // duplicate the geometry a random number of times
    var nBlocks = 3 + Math.floor(Math.random() * 3);

    for(var i = 0; i < nBlocks; i++) {
        var m = new THREE.Mesh(geom, mat);

        // set the position and the rotation of each cube randomly
        m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;
		m.rotation.z = Math.random()*Math.PI*2;
        m.rotation.y = Math.random()*Math.PI*2;
        
        // set the size of the cube randomly
        var s = .1 + Math.random() * .9;
        m.scale.set(s,s,s);

        // allow each cube to cast and to receive shadows
        m.castShadow = true;
        m.receiveSHadow = true;

        // add the cube to the container we first created
        this.mesh.add(m);
    }
};


Sky = function() {
    this.mesh = new THREE.Object3D();

    this.nClouds = 20;

    var stepAngle = Math.PI * 2 / this.nClouds;

    for(var i = 0; i < this.nClouds; i++) {
        // First we call our Clouds object with all calculations for clouds
        var c = new Cloud();

        // set the rotation and the position of each cloud;
        // for that we use a bit of trigonometry
        
        var a = stepAngle * i;
        var h = 750 + Math.random() * 200;

        // Trigonometry!!! I hope you remember what you've learned in Math :)
		// in case you don't: 
        // we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
        c.mesh.position.x = Math.sin(a) * h;
        c.mesh.position.y = Math.cos(a) * h;

        // rotate the cloud according to its position
		c.mesh.rotation.z = a + Math.PI/2;

		// for a better result, we position the clouds 
		// at random depths inside of the scene
		c.mesh.position.z = -400-Math.random()*400;
		
		// we also set a random scale for each cloud
		var s = 1+Math.random()*2;
		c.mesh.scale.set(s,s,s);

        // do not forget to add the mesh of each cloud in the scene
        this.mesh.add(c.mesh);
    }
}

var sky;

function createSky() {
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh);
};

var Pilot = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = 'pilot';

    // angleHairs is a property used to animate the hair later 
    this.angleHairs = 0;

    // Body of the pilot
    var bodyGeom = new THREE.BoxGeometry(15,15,15);
    var bodyMat = new THREE.MeshPhongMaterial({
        color: Colors.brown, 
        shading:THREE.FlatShading
    });
    var body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.set(2,-12,0);
    this.mesh.add(body);
    
    // Face of the pilot 
    
    var faceGeom = new THREE.BoxGeometry(10,10,10);
	var faceMat = new THREE.MeshLambertMaterial({color:Colors.pink});
	var face = new THREE.Mesh(faceGeom, faceMat);
	this.mesh.add(face);

    // Hair element
	var hairGeom = new THREE.BoxGeometry(4,4,4);
	var hairMat = new THREE.MeshLambertMaterial({color:Colors.brown});
	var hair = new THREE.Mesh(hairGeom, hairMat);
    // Align the shape of the hair to its bottom boundary, that will make it easier to scale.
    hair.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,2,0));

    // create a container for the hair
    var hairs = new THREE.Object3D();

    // create a container for the hairs at the top 
	// of the head (the ones that will be animated)
    this.hairsTop = new THREE.Object3D();

    // create the hairs at the top of the head 
    // and position them on a 3 x 4 grid
    for(var i = 0; i < 12; i++) {
        var h = hair.clone();
        var row = i % 3;
        var col  = Math.floor(i / 3);
        var startPosZ = -4;
        var startPosX = -4;
        h.position.set(startPosX + row * 4, 0, startPosZ + col * 4);
        this.hairsTop.add(h);
    }
    hairs.add(this.hairsTop);

    // create the hairs at the side of the face
    var hairSideGeom = new THREE.BoxGeometry(12,4,2);
    hairSideGeom.applyMatrix(new THREE.Matrix4().makeTranslation(-6, 0, 0));
    var hairSideR = new THREE.Mesh(hairSideGeom, hairMat);
    var hairSideL = hairSideR.clone();
    hairSideR.position.set(8, -2, 6);
    hairSideL.position.set(8, -2, -6);
    hairs.add(hairSideR);
    hairs.add(hairSideL);

    // create the hairs at the back of the head
	var hairBackGeom = new THREE.BoxGeometry(2,8,10);
	var hairBack = new THREE.Mesh(hairBackGeom, hairMat);
	hairBack.position.set(-1,-4,0)
	hairs.add(hairBack);
	hairs.position.set(-5,5,0);

    this.mesh.add(hairs);
    
    var glassGeom = new THREE.BoxGeometry(5,5,5);
	var glassMat = new THREE.MeshLambertMaterial({color:Colors.brown});
	var glassR = new THREE.Mesh(glassGeom,glassMat);
	glassR.position.set(6,0,3);
	var glassL = glassR.clone();
    glassL.position.z = -glassR.position.z
    
    var glassAGeom = new THREE.BoxGeometry(11,1,11);
    var glassA = new THREE.Mesh(glassAGeom, glassMat);
    
    this.mesh.add(glassR);
	this.mesh.add(glassL);
	this.mesh.add(glassA);

    var earGeom = new THREE.BoxGeometry(2,3,2);
	var earL = new THREE.Mesh(earGeom,faceMat);
	earL.position.set(0,0,-6);
	var earR = earL.clone();
	earR.position.set(0,0,6);
	this.mesh.add(earL);
	this.mesh.add(earR);
}

Pilot.prototype.updateHairs = function() {
    // get the hair
    var hairs = this.hairsTop.children;

    // update them according to the angle angleHairs
    var l = hairs.length;
    for(var i = 0; i < l; i++) {
        var h = hairs[i];
        // each hair element will scale on cyclical basis between 75% and 100% of its original size
        h.scale.y = .75 + Math.cos(this.angleHairs+i/3)*.25;
    }
    // increment the angle for the next frame
    this.angleHairs += 0.16;
};

var Airplane = function() {
    // building object container
    this.mesh = new THREE.Object3D();

    // creating the corpus
    var geomCockpit = new THREE.BoxGeometry(80,50,50,1,1,1);
    var matCockpit = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});

    // we can access a specific vertex of a shape through 
    // the vertices array, and then move its x, y and z property:

    geomCockpit.vertices[4].y -= 10;
    geomCockpit.vertices[4].z += 20;
    geomCockpit.vertices[5].y -= 10;
    geomCockpit.vertices[5].z -= 20;
    geomCockpit.vertices[6].y += 30;
    geomCockpit.vertices[6].z += 20;
    geomCockpit.vertices[7].y += 30;
    geomCockpit.vertices[7].z -= 20;
    // geomCockpit.vertices[7].y += -10;

    // console.log(geomCockpit.vertices[1]);
    // geomCockpit.vertices.map((key, i) => {
    //     console.log("Start ========= " + i);
    //     console.log("X: " + key.x);
    //     console.log("Y: " + key.y);
    //     console.log("Z: " + key.z);
    // });
    //console.log('Cockpit geometry: ' + geomCockpit.vertices);


    var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    // engine
    var geomEngine = new THREE.BoxGeometry(20,50,50,1,1,1);
    var matEngine = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var engine = new THREE.Mesh(geomEngine, matEngine);
    engine.position.x = 50;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);

    // create the tail 
    var geomTailPlane = new THREE.BoxGeometry(15,20,5,1,1,1);
    var matTailPlane = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(-40,20,0);
    tailPlane.castShadow = true;
	tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);

    // Create the wing
    var geomSideWing = new THREE.BoxGeometry(30,5,120,1,1,1);
    var matSideWing = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var sideWing = new THREE.Mesh(geomSideWing, matSideWing);
    sideWing.position.set(0,15,0);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;
    this.mesh.add(sideWing);

    var geomWindshield = new THREE.BoxGeometry(3,15,20,1,1,1);
    var matWindshield = new THREE.MeshPhongMaterial({color:Colors.white,transparent:true, opacity:.3, shading:THREE.FlatShading});;
    var windshield = new THREE.Mesh(geomWindshield, matWindshield);
    windshield.position.set(5,27,0);

    windshield.castShadow = true;
    windshield.receiveShadow = true;

    this.mesh.add(windshield);
    
    // propeller
    var geomPropeller = new THREE.BoxGeometry(20,10,10,1,1,1);
    geomPropeller.vertices[4].y-=5;
    geomPropeller.vertices[4].z+=5;
    geomPropeller.vertices[5].y-=5;
    geomPropeller.vertices[5].z-=5;
    geomPropeller.vertices[6].y+=5;
    geomPropeller.vertices[6].z+=5;
    geomPropeller.vertices[7].y+=5;
    geomPropeller.vertices[7].z-=5;
	var matPropeller = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
	this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
	this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    var wheelProtecGeom = new THREE.BoxGeometry(30,15,10,1,1,1);
    var wheelProtecMat = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var wheelProtecR = new THREE.Mesh(wheelProtecGeom,wheelProtecMat);
    wheelProtecR.position.set(25,-20,25);
    this.mesh.add(wheelProtecR);

    var wheelTireGeom = new THREE.BoxGeometry(24,24,4);
    var wheelTireMat = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});
    var wheelTireR = new THREE.Mesh(wheelTireGeom,wheelTireMat);
    wheelTireR.position.set(25,-28,25);

    var wheelAxisGeom = new THREE.BoxGeometry(10,10,6);
    var wheelAxisMat = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
    var wheelAxis = new THREE.Mesh(wheelAxisGeom,wheelAxisMat);
    wheelTireR.add(wheelAxis);

    this.mesh.add(wheelTireR);

    var wheelProtecL = wheelProtecR.clone();
    wheelProtecL.position.z = -wheelProtecR.position.z ;
    this.mesh.add(wheelProtecL);

    var wheelTireL = wheelTireR.clone();
    wheelTireL.position.z = -wheelTireR.position.z;
    this.mesh.add(wheelTireL);

    var wheelTireB = wheelTireR.clone();
    wheelTireB.scale.set(.5,.5,.5);
    wheelTireB.position.set(-35,-5,0);
    this.mesh.add(wheelTireB);

    var suspensionGeom = new THREE.BoxGeometry(4,20,4);
    suspensionGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0,10,0))
    var suspensionMat = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var suspension = new THREE.Mesh(suspensionGeom,suspensionMat);
    suspension.position.set(-35,-5,0);
    suspension.rotation.z = -.3;
    this.mesh.add(suspension);

    
    // blades 
    var geomBlade = new THREE.BoxGeometry(1,80,10,1,1,1);
    var matBlade = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});
    var blade1 = new THREE.Mesh(geomBlade, matBlade);
    blade1.position.set(8,0,0);

    blade1.castShadow = true;
    blade1.receiveShadow = true;

    var blade2 = blade1.clone();
    blade2.rotation.x = Math.PI/2;

    blade2.castShadow = true;
    blade2.receiveShadow = true;

    this.propeller.add(blade1);
    this.propeller.add(blade2);
    this.propeller.position.set(60,0,0);
    this.mesh.add(this.propeller);

    this.pilot = new Pilot();
    this.pilot.mesh.position.set(-10, 27, 0);
    this.mesh.add(this.pilot.mesh);

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
}

var airplane;

function createAirplane() {
    airplane = new Airplane();

    airplane.mesh.scale.set(.25, .25, .25);
    airplane.mesh.position.y = 100;
    //airplane.mesh.rotation.y = -350;
    console.log("x --- y --- z " + airplane.mesh.position.x + " "
    + airplane.mesh.position.y + " " + airplane.mesh.position.z);
    scene.add(airplane.mesh);
}


// document.addEventListener('mousemove', function(e) {
//     console.log("X: " + e.clientX + " --- " + "Y: " + e.clientY);
// });

function handleMouseMove(event) {
    // here we are converting the mouse position value received 
	// to a normalized value varying between -1 and 1;
    // this is the formula for the horizontal axis:
    var tx = -1 + (event.clientX / WIDTH)*2;

    // for the vertical axis, we need to inverse the formula 
    // because the 2D y-axis goes the opposite direction of the 3D y-axis
    var ty = 1 - (event.clientY / HEIGHT)*2;
    mousePosition = {x:tx, y:ty};
    //console.log("Mouse position " + mousePosition.x + " " + mousePosition.y);
}
function loop() {
    document.addEventListener('mousemove', handleMouseMove, false);
    updatePlane();

    sea.mesh.rotation.z += .005;
    sky.mesh.rotation.z += .005;
    airplane.pilot.updateHairs();
    updateCameraFov();
    sea.moveWaves();
    //controls.update();
    // render the scene
    renderer.render(scene, camera);
    
    // call the loop function again
    requestAnimationFrame(loop);
}

var mousePosition = { x: 0, y: 0 };

// now handle the mousemove event

function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
   // console.log("NV: " + nv);
    var dv = vmax-vmin;
   // console.log("DV: " + dv);
    var pc = (nv-vmin)/dv;
   // console.log("PC: " + pc);
    var dt = tmax-tmin;
  //  console.log("DT: " + dt);
    var tv = tmin + (pc*dt);
  //  console.log("TV: " + tv);
    return tv;
};
//normalize(-0.855555555, -1, 1, -100, 100);

function updatePlane() {
    // let's move the airplane between -100 and 100 on the horizontal axis, 
	// and between 25 and 175 on the vertical axis,
	// depending on the mouse position which ranges between -1 and 1 on both axes;
    // to achieve that we use a normalize function (see below)
    
    var targetX = normalize(mousePosition.x, -1, 1, -100, 100);
    var targetY = normalize(mousePosition.y, -1, 1, 25, 175);

    //airplane.mesh.rotation.z += (targetY - airplane.mesh.position.y) * 0.01;

    // console.log("position plane: " + airplane.mesh.position.y);
    // console.log('target y: ' + targetY);
    // console.log('equation: ' + (targetY - airplane.mesh.position.y) * 0.01);
    // update the airplane's position
    airplane.mesh.position.y += (targetY - airplane.mesh.position.y) * 0.1;

    airplane.mesh.rotation.x = (airplane.mesh.position.y - targetY) * 0.0128;
    airplane.mesh.rotation.z = (targetY - airplane.mesh.position.y) * 0.0064;
    
	airplane.propeller.rotation.x += 0.3;
};

function updateCameraFov() {
    camera.fov = normalize(mousePosition.x, -1, 1, 40, 80);
    camera.updateProjectionMatrix();
}


function init() {
    // SET UP SCENE, THE CAMERA AND THE RENDERER
    createScene();
    
    // add the lights
    createLights();

    // add the sea
    createSea();

    // add sky
    createSky();
    
    // add plane
    createAirplane();

    // Update plane position
    updatePlane();

    document.addEventListener('mousemove', handleMouseMove, false);
    // Loop sea
    loop();
}

window.addEventListener('load', init, false);