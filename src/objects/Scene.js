import { Group } from 'three';
import Spiral from './Spiral/Spiral.js';
import BasicLights from './Lights.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const lights = new BasicLights();
    const spiral = new Spiral();

    this.add(lights, spiral);
  }

  update(timeStamp) {
    this.rotation.x = -timeStamp / 5000;
  }
}