import { loadBirds } from "./components/birds/birds.js";
import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { loadMesh } from "./components/birds/test_mesh.js";
import { get_substracted_mesh } from "./components/birds/substracted_mesh.js";

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const [ambientLight, mainLight, meshLight] = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);
    setTimeout(() => console.log(meshLight), 1000);
    scene.add(meshLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    //const test_mesh = await get_substracted_mesh();

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);

    //controls.target.copy(test_mesh.position);

    scene.add(parrot, flamingo, stork);

    //scene.add(test_mesh);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
