require.context('./img', true);
require.context('./fonts', true);
require.context('./', true, /\w*\.html$/);

import './sass/main.sass';
import './js/main.js';
