/* global document */
import {storiesOf} from '@storybook/html';
import '../assets/scss/style.scss';


storiesOf('Button', module)
  .add('Prototype', () => '<h3>Прототип кнопки</h3> <button class="trm-btn">Prototype</button>')
  .add('Filled', () => '<h3>Залитая кнопка</h3> <button class="trm-btn trm-btn--filled trm-sm">primary sm</button> <button class="trm-btn trm-btn--filled trm-secondary trm-sm">secondary sm</button> <button class="trm-btn trm-btn--filled">primary md</button> <button class="trm-btn trm-btn--filled trm-secondary">secondary md</button> <button class="trm-btn trm-btn--filled trm-lg">primary lg</button> <button class="trm-btn trm-btn--filled trm-secondary trm-lg">secondary lg</button>')
  .add('Outlined', () => '<h3>Обведенная кнопки</h3> <button class="trm-btn trm-btn--outlined trm-sm">primary sm</button> <button class="trm-btn trm-btn--outlined trm-secondary trm-sm">secondary sm</button> <button class="trm-btn trm-btn--outlined">primary md</button> <button class="trm-btn trm-btn--outlined trm-secondary">secondary md</button> <button class="trm-btn trm-btn--outlined trm-lg">primary lg</button> <button class="trm-btn trm-btn--outlined trm-secondary trm-lg">secondary lg</button>');