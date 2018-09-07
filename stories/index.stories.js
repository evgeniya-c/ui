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

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import ClipboardJS from 'clipboard';

import financeTheme from '../assets/scss/theme.finance.scss';
import minfinTheme from '../assets/scss/theme.minfin.scss';

/*import welcome from './welcome.html';
storiesOf('Welcome', module)
  .add('Welcome', () => welcome);*/

// Create a new Normalizer object
let nw = new Normalizer({
  'break-lines': 80,
  'tabs-to-spaces': 2,
  'spaces-to-tabs': 2
});

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Standart', () => {

    const themes = {
      finance: 'finance',
      minfin: 'minfin'
    };

    const types = {
      button: 'button',
      reset: 'reset',
      search: 'search'

    };

    const colors = {
      primary: 'primary',
      secondary: 'secondary'
    };

    const fills = {
      filled: 'filled',
      outlined: 'outlined'
    };

    const sizes = {
      small: 'sm',
      middle: 'md',
      large: 'lg'
    };

    // IMPORTANT: the order of props is corresponds preview pane
    const theme = select('Theme', themes, 'finance');
    const label = text('Label', 'Заявка онлайн');
    const color = select('Color', colors, 'primary');
    const fill = select('Fill type', fills, 'filled');
    const size = select('Size', sizes, 'middle');
    const type = select('Type', types, 'button');
    const disabled = boolean('Disabled', false) === true ? `disabled` : ``;
    const prototype = boolean('Show prototype', false);
    const className = `trm-btn` + (!prototype ? ` trm-${color} trm-btn--${fill} trm-${size}` : ``);

    if(theme === 'minfin') {
      minfinTheme.use();
      financeTheme.unuse();
    } else {
      financeTheme.use();
      minfinTheme.unuse();
    }

    let code = `<button type="${type}" class="${className}" ${disabled}>\n\t${label}\n</button>`;
    let codeNormalize = code = nw.normalize(code);
    let copyCode = code.replace(/\n|\t/g,'');
    let html = Prism.highlight(codeNormalize, Prism.languages.markup, 'markup');
    let markup = `<pre class="language-markup"><code class="language-markup">${html}</code></pre>`;
    let clipboard = new ClipboardJS('[data-clipboard-text]');

    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      e.clearSelection();
    });

    return code
      + `<br/><br/><h2>Html markup:</h2>`
      + markup
      + `<button style="border: 1px solid #ccc; padding: 5px" data-clipboard-text='${copyCode}'>copy</button>`;
  });