<script setup>
import * as THREE from 'three';

import { ref } from 'vue'

const cube = ref(null);

const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const geometry = new THREE.BoxGeometry(1, 1, 1);

// const animate = () => {
// 	requestAnimationFrame(animate);

//   cube.value.rotation.x += 0.1;
//   cube.value.rotation.y += 0.1;
// };
// requestAnimationFrame(animate);

// ref does not work because of some weird thing

</script>

<template>
  <mesh :geometry="geometry" :material="material" ref="cube" />
</template>
