import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import { H, HeadingColourVariants } from '../';

import { FeatureCategory } from '../../';

const StorySubject = "Heading";
const DefaultStoryKind = "Default";

// Knob Variables
const contentGroupId = "Content";

// Heading Default
storiesOf(`${FeatureCategory}/${StorySubject}/${DefaultStoryKind}`, module)
  .addParameters({
    component: H,
    subcomponents: {
    },
  })
  .addDecorator(withKnobs({
    escapeHTML: false,
  }))
  .add(
    'Single',
    () => {
      const headingKnob = text('Heading', 'Example Heading', contentGroupId);
      const headingLevelKnob = number('Heading Level', 1, {'min': 1, max: 6}, contentGroupId);
      return (
        <H level={headingLevelKnob}>{headingKnob}</H>
      );
    }
  )
  .add(
    'All',
    () => {
      const headingKnob = text('Heading', 'Example Heading', contentGroupId);
      return (
        <>
        <H level={1}>{headingKnob}</H>
        <H level={2}>{headingKnob}</H>
        <H level={3}>{headingKnob}</H>
        <H level={4}>{headingKnob}</H>
        <H level={5}>{headingKnob}</H>
        <H level={6}>{headingKnob}</H>
        </>
      );
    }
  )
  .add(
  'Colour Variants',
  () => {
    const headingKnob = text('Heading', 'Example Heading', contentGroupId);
    const headingLevelKnob = number('Heading Level', 1, {'min': 1, max: 6}, contentGroupId);

    const colourOptions = {
      'Black': HeadingColourVariants.black,
      'White': HeadingColourVariants.white,
    };
    const colourOptionsKnob = select('Colour', colourOptions, colourOptions.Black, contentGroupId);
    
    return (
      <H level={headingLevelKnob} textColour={colourOptionsKnob}>{headingKnob}</H>
    );
  }
)
