import { document } from 'global';
import { storiesOf } from '@storybook/html';
import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  text,
  number,
  withKnobs,
} from '@storybook/addon-knobs';

import financeTheme from '../assets/scss/finance.scss';
import minfinTheme from '../assets/scss/minfin.scss';

/*import welcome from './welcome.html';
storiesOf('Welcome', module)
  .add('Welcome', () => welcome);*/

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => {

    const types = {
      button: 'button',
      reset: 'reset',
      search: 'search'

    };

    const themes = {
      primary: 'primary',
      secondary: 'secondary'
    };

    const views = {
      filled: 'filled',
      outlined: 'outlined'
    };

    const projects = {
      finance: 'finance',
      minfin: 'minfin'
    };

    const sizes = {
      sm: 'small',
      md: 'middle',
      lg: 'large'
    };

    const label = text('Label', 'Заявка онлайн');
    const type = select('Type', types, 'button');
    const theme = select('Theme', themes, 'primary');
    const view = select('View', views, 'filled');
    const size = select('Size', sizes, 'middle');
    const project = select('Project', projects, 'finance');
    const disabled = boolean('Disabled', false);
    const className = `trm-btn trm-${theme} trm-btn--${view} trm-${size}`;

    if(project === 'minfin') {
      minfinTheme.use();
      financeTheme.unuse();
    } else {
      financeTheme.use();
      minfinTheme.unuse();
    }

    return `<button type="${type}" class="${className}" disabled="${disabled}">${label}</button>`;
  });