import {
  BoxGeometry,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  DoubleSide,
} from "/vendor/three/build/three.module.js";
import * as THREE from "/vendor/three/build/three.module.js";

const ThreeBSP = require(["/node_modules/three-js-csg/index.js"])(THREE);

async function get_substracted_mesh() {
  const material = new MeshStandardMaterial({
    side: DoubleSide,
    color: 0x00ff00,
    flatShading: true,
  });
  const box_geometry = new BoxGeometry(2, 2, 2);
  const mesh = new Mesh(box_geometry, material);

  const clipping_mesh = mesh.clone();
  clipping_mesh.position.x = -1;

  const bsp_mesh = ThreeBSP(mesh);
  //const bsp_clipping_mesh = new ThreeBSP(clipping_mesh);

  //const bsp_result = bsp_mesh.subtract(bsp_clipping_mesh);

  //const result = bsp_result.toMesh(material);

  return mesh;
}

export { get_substracted_mesh };
