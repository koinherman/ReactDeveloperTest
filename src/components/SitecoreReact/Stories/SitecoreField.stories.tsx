import React, {FunctionComponent} from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import { sitecoreKnobs } from '../../../_storybook/knobs';
import { isExperienceEditor } from 'services/SitecoreService';
import { Text, RichText, Image, Link } from '../Fields';
import { LoremIpsum } from "lorem-ipsum";

import { FeatureCategory } from '../../'

const StorySubject = "SitecoreReact";
const StoryKind = "Fields";

// Knob Variables
const contentGroupId = "Content";

// LoremIpsum Config
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const ExperienceEditorInfo: FunctionComponent = () => 
  <div className="alert alert-info" role="alert">
    <i>Toggle Experience Editor checkbox to see input option</i>
  </div>


// SitecoreReact Default
storiesOf(`${FeatureCategory}/${StorySubject}/${StoryKind}`, module)
  .addParameters({
    component: Text,
    subcomponents: {
    },
  })
  .addDecorator(withKnobs({
    escapeHTML: false,
  }))
  .add(
    'Text',
    () => {
      sitecoreKnobs();
      const isEditor = isExperienceEditor();


      var exampleText = lorem.generateWords(3);
      const textKnob = text('Text', exampleText, contentGroupId);
      const experienceEditorValue = '<input type="text" class="sb-ee-text" value="{value}" />';
      const experienceEditorTextKnob = text('Experience Editor Markup', experienceEditorValue, contentGroupId);
      const headingValue = isEditor ? experienceEditorTextKnob.replace('{value}', textKnob) : textKnob;
      return (
        <div className="container">
          <ExperienceEditorInfo />
          <Text field={headingValue} />
        </div>
      );
    }
  )
  .add(
    'RichText',
    () => {
      sitecoreKnobs();
      const isEditor = isExperienceEditor();

      var exampleText = lorem.generateSentences(5);
      const textKnob = text('Text', exampleText, contentGroupId);
      const experienceEditorValue = '<textarea id="test" name="test" class="sb-ee-rte">{value}</textarea>';
      const containerTagKnob = text('Container Tag', 'section', contentGroupId);
      const experienceEditorTextKnob = text('Experience Editor Markup', experienceEditorValue, contentGroupId);

      const headingValue = isEditor ? experienceEditorTextKnob.replace('{value}', textKnob) : textKnob;
      return (
        <div className="container">
          <ExperienceEditorInfo />
          <RichText field={headingValue} tag={containerTagKnob} className="rich-text" />
        </div>
      );
    }
  )
  .add(
    'Image',
    () => {
      sitecoreKnobs();
      const exampleImage = 'https://deelay.me/3000/https://picsum.photos/500/300';
      const imageKnob = text('Image', exampleImage, contentGroupId);
      const experienceEditorValue = '<img class="sb-ee-img" src="{value}" width="500" />';
      const experienceEditorTextKnob = text('Experience Editor Markup', experienceEditorValue, contentGroupId);
      const imageValue = experienceEditorTextKnob.replace('{value}', imageKnob);
      return (
        <div className="container">
          <ExperienceEditorInfo />
          <Image field={imageValue} />
        </div>
      );
    }
  )
  .add(
    'Link',
    () => {
      sitecoreKnobs();
      const urlKnob = text('Url', 'https://lawsociety.org.uk/', contentGroupId);
      const experienceEditorValue = '<a href="{value}" target="_blank">Test Link</a>';
      const experienceEditorTextKnob = text('Experience Editor Markup', experienceEditorValue, contentGroupId);
      const imageValue = experienceEditorTextKnob.replace('{value}', urlKnob);
      return (
        <div className="container">
          <ExperienceEditorInfo />
          <Link field={imageValue} />
        </div>
      );
    }
  )

