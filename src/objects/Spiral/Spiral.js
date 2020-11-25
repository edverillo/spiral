import { Group, ObjectLoader  } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import MODEL from './packspiral.gltf';
import BIN from './packspiral.bin';

export default class Spiral extends Group {
  constructor() {
    const loader = new GLTFLoader();
    
    super();

    this.name = 'spiral';

    loader.load(MODEL, (mesh)=>{
      this.add(mesh.scene);
    });
  }
}
