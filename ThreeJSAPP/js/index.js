//setup scene
var scene = new THREE.Scene();
//setup camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1 , 1000);
camera.position.z = 5;
//setup renderer
var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

//create a canvas
document.body.appendChild(renderer.domElement);
//update the following every time we resize
window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();
})


//define geometry
var geometry =  new THREE.BoxGeometry(1,1,1); //radius,width,height
//define material
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
//define the mesh
var mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

//add light

var light = new THREE.PointLight(0xFFFFFF,1,700) //color,intensity,distance
//add light position
light.position.set(10,0,25)

scene.add(light);

var render = function(){
    requestAnimationFrame(render);
    mesh.rotation.x += 0.05;
    renderer.render(scene,camera);
}

render();

