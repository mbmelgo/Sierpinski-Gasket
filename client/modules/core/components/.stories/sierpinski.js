import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Sierpinski from '../sierpinski.jsx';

storiesOf('core.Sierpinski', module)
  .add('default view', () => {
    return (
      <Sierpinski />
    );
  })
