import { Component } from '../components/component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    console.log('Header');
  }

  createTemplate() {
    return `
    <header>
      <h1> Pets Rules </h1>
      <header>
    `;
  }
}
