import * as Phaser from 'phaser';
import { baseConfig } from './config';

const config = {
  ...baseConfig,
  type: Phaser.AUTO,
  scene: {
    preload,
    create,
  },
};

const init = (parent: string): void => {
  new Phaser.Game({
    ...config,
    parent,
  });
  const oneSpinner = document
    .getElementById(parent)
    .getElementsByClassName('loading-spinner');
  for (let i = 0; i < oneSpinner.length; i++) {
    oneSpinner.item(i).remove();
  }
}

export { init };

function preload () {
  this.load.setBaseURL('http://localhost:8080')

  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/blue.png');
}

function create () {
  this.add.image(400, 300, 'sky');

  const particles = this.add.particles('red');

  const emitter = particles.createEmitter({
    speed: 200,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD',
  });

  const logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}
