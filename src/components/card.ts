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

  render() {
    super.render();
    this.element.querySelector('.app');
  }

  createTemplate() {
    return `
     <li>
     <p> ID: ${this.pet.id} </p>
     <p> Name: ${this.pet.name} </p> 
     <p> Race: ${this.pet.race} </p>
     <p> Owner: ${this.pet.owner} </p>
     <p> Adopted: ${this.pet.isAdopted} </p>
     </li>`;
  }
}
