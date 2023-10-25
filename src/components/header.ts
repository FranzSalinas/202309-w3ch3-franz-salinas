import { Component } from '../components/component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1> Pets Rules </h1>
      <header>
    `;
  }
}
