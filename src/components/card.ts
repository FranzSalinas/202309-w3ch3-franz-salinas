import { Pets } from '../models/pets';
import { Component } from './component';

export class Card extends Component {
  pet: Pets;
  constructor(selector: string, pet: Pets) {
    super(selector);
    this.pet = pet;
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
     <li>
     <p> Name: ${this.pet.name} </p> 
     <p> Race: ${this.pet.race} </p>
     <p> Owner: ${this.pet.owner} </p>
     </li>`;
  }
}
