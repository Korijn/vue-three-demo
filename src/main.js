import * as THREE from 'three';

import { createApp } from '@korijn/vue-three'

import App from './App.vue';

const app = createApp(App);

const canvas = document.getElementById("app");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const ambientLight = new THREE.AmbientLight( 0xffffff, 0.15 );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-1, 1, 1);
scene.add( directionalLight );

camera.position.z = 5;

const animate = () => {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};
requestAnimationFrame(animate);

app.mount(scene);

