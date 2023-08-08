import {
  DirectionalLight,
  HemisphereLight,
} from "/vendor/three/build/three.module.js";
import * as THREE from "/vendor/three/build/three.module.js";

function createLights() {
  const ambientLight = new HemisphereLight("white", "darkslategrey", 0.5);

  const mainLight_position = new THREE.Vector3(5, 0, 10);

  const mainLight = new DirectionalLight("white", 5);
  mainLight.position.set(
    mainLight_position.x,
    mainLight_position.y,
    mainLight_position.z
  );

  const light_geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const light_material = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
  });
  const light_mesh = new THREE.Mesh(light_geometry, light_material);
  light_mesh.position.set(
    mainLight_position.x,
    mainLight_position.y,
    mainLight_position.z
  );

  return [ambientLight, mainLight, light_mesh];
}

export { createLights };
