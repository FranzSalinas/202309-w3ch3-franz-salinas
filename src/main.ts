/* eslint-disable no-new */
import { List } from './models/list';
import './scss/styles.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';

function main() {
  new Header('.app');
  new List('.app');
  new Footer('.app');
}

main();
