/* eslint-disable no-new */
import { List } from './models/list';
import './scss/styles.scss';
import { Header } from './components/header';

function main() {
  new Header('.app');
  new List('.app');
}

main();
