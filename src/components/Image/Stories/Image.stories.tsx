import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import { Img } from '../';

import { FeatureCategory } from '../../'

const StorySubject = "Image";
const StoryKind = "Default";

// Knob Variables
const contentGroupId = "Content";

const randSeconds = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

// Image Default
storiesOf(`${FeatureCategory}/${StorySubject}/${StoryKind}`, module)
  .addParameters({
    component: Image,
    subcomponents: {
    },
  })
  .addDecorator(withKnobs({
    escapeHTML: false,
  }))
  .add(
    'Random Time Load',
    () => {
        const rand1 = randSeconds(1, 8);
      return (
        <div>
          <Img
            style={{width: 200}}
            src={`http://deelay.me/${rand1 * 1000}/https://picsum.photos/200`}
            loader={<div>Loading...</div>}
            unloader={<div>wont load!</div>}
          />
          <p>Should load in {rand1} seconds</p>
        </div>
      );
    }
  )
