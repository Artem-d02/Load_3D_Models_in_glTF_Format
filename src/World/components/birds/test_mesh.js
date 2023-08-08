import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadMesh() {
  const loader = new GLTFLoader();

  const test_mesh_data = await loader.loadAsync('/assets/models/HDLOD_Clusterization_Test_Transparent/Cluster0.b3dm.gltf');

  //  /assets/models/Mesh_PrimitiveVertexColor-test/Mesh_PrimitiveVertexColor_04.gltf
  //  /assets/models/HDLOD_Clusterization_Test/Cluster0.b3dm.gltf
  //  /assets/models/HDLOD_Clusterization_Test_Material/Cluster0.b3dm.gltf
  //  /assets/models/HDLOD_Clusterization_Test_Material/Cluster44.b3dm.gltf
  //  /assets/models/HDLOD_Clusterization_Test_Transparent/Cluster0.b3dm.gltf

  console.log('Mesh was loaded', test_mesh_data);

  const test_mesh = setupModel(test_mesh_data);
  test_mesh.position.set(0, 0, 0);

  return test_mesh;
}

export { loadMesh };