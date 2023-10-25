import { Card } from '../components/card';
import { Pets } from './pets';
import { Component } from '../components/component';
import { repo } from '../data/repo';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    return repo().map((item) => new Card('ul', item as Pets));
  }

  createTemplate() {
    return `<ul class="pets-list"></ul>`;
  }
}
