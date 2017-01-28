import React from 'react';
import { render } from 'react-dom';
import A from './A.jsx';

render(
  <A message={'It works!'} />,
  document.getElementById('root'),
);
