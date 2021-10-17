import './style.css'
import * as THREE from 'three'



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

//adds background particles
const vertices = [];

for ( let i = 0; i < 1000000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}



const backgeometry = new THREE.BufferGeometry();
backgeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const backmaterial = new THREE.PointsMaterial( { color: 0x888888, size:0.3} );

const points = new THREE.Points( backgeometry, backmaterial );

scene.add( points );

//theboys

const friendsCube = new THREE.BoxGeometry(1, 1, 1 );
const friendsTexture = new THREE.TextureLoader().load('textures/theboys.jpg');
const friends = new THREE.Mesh(
    friendsCube,
    new THREE.MeshBasicMaterial({map: friendsTexture})
)
friends.position.setZ(-3);
friends.position.setX(1);
friends.rotateY(0.01);

//familyone
const familyTextureOne = new THREE.TextureLoader().load('textures/family.jpg');
const familyOne = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:familyTextureOne})
)
familyOne.position.setZ(-7);
familyOne.position.setX(-0.5);
familyOne.rotateY(-0.005)

//familytwo
const familyTextureTwo = new THREE.TextureLoader().load('textures/familytwo.jpg')
const familyTwo = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:familyTextureTwo})
)
familyTwo.position.setZ(-11);
familyTwo.position.setX(-1.5);
familyOne.rotateY(-0.005);

//brothers
const brothersTxt = new THREE.TextureLoader().load('textures/brothers.jpg')
const brothers = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:brothersTxt})
)
brothers.position.setZ(-15);
brothers.position.setX(-1.5);
brothers.rotateY(-0.01);

//sunglasses
const sunglassesTxt = new THREE.TextureLoader().load('textures/sunglasses.jpg')
const sunglasses = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:sunglassesTxt})
)
sunglasses.position.setZ(-19);
sunglasses.position.setX(-0.5);
sunglasses.rotateY(-0.01);

//smallme

const smallmeTxt = new THREE.TextureLoader().load('textures/smallme.jpg')
const smallme = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:smallmeTxt})
)
smallme.position.setZ(-23);
smallme.position.setX(-2);
smallme.rotateY(-0.3);

//parents
const parentsTxt = new THREE.TextureLoader().load('textures/parents.jpg')
const parents = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:parentsTxt})
)
parents.position.setZ(-27);
parents.position.setX(-2);
parents.rotateY(-0.3);

//meteandme
const meteandmeTxt = new THREE.TextureLoader().load('textures/meteandme.jpg')
const meteandme = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({map:meteandmeTxt})
)
meteandme.position.setZ(-31);
meteandme.position.setX(-0.5);
meteandme.rotateY(-0.3);

//windsurfing

const windsurfingTxt = new THREE.TextureLoader().load('textures/windsurfing.jpg')
const windsurfing = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({map:windsurfingTxt})
)
windsurfing.position.setZ(-35);
windsurfing.position.setX(-1.5);
windsurfing.rotateY(-0.3);

//brotherstwo

const brotherstwoTxt = new THREE.TextureLoader().load('textures/brotherstwo.jpg')
const brotherstwo = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({map:brotherstwoTxt})
)
brotherstwo.position.setZ(-39);
brotherstwo.position.setX(-1.5);
brotherstwo.rotateY(-0.3);

//sunglassestwo
const sunglassestwoTxt = new THREE.TextureLoader().load('textures/sunglassestwo.jpg')
const sunglassestwo = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({map:sunglassestwoTxt})
)
sunglassestwo.position.setZ(-43);
sunglassestwo.position.setX(-1);


//adding all the people
scene.add(sunglassestwo)
scene.add(brotherstwo)
scene.add(windsurfing)
scene.add(meteandme)
scene.add(parents)
scene.add(smallme)
scene.add(sunglasses)
scene.add(brothers)
scene.add(familyTwo)
scene.add(friends);
scene.add(familyOne)


//moving the camera
function moveCamera(){
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * 0.009;
    camera.position.x = t * 0.002;
    camera.rotation.y = t * 0.0002;

    

}
document.body.onscroll = moveCamera;



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */



/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{



    // Update objects

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()