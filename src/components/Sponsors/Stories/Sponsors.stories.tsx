import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import { Sponsors } from '../';
import { SponsorCard, SponsorCardProps } from '../SponsorCard';
import Container from '@material-ui/core/Container';

import { FeatureCategory } from '../../';

const StorySubject = "Sponsors";
const StoryKind = "Default";

// Knob Variables
const contentGroupId = "Content";

// Sponsors Default
storiesOf(`${FeatureCategory}/${StorySubject}/${StoryKind}`, module)
  .addParameters({
    component: Sponsors,
    subcomponents: {
    },
  })
  .addDecorator(withKnobs({
    escapeHTML: false,
  }))
  .add(
    'Sponsors',
    () => {
      const sponsorInfos: SponsorCardProps[] = [
        {
          srcURL: 'https://res.cloudinary.com/black12312312312/image/upload/v1632229725/logo_mazars_th75ob.png',
          linkURL: 'https://lawsociety.org.uk'
        },
        {
          srcURL: 'https://res.cloudinary.com/black12312312312/image/upload/v1632229725/logo_jmc_yuvl4j.png',
          linkURL: 'https://lawsociety.org.uk'
        },
        {
          srcURL: 'https://res.cloudinary.com/black12312312312/image/upload/v1632229725/logo_rathbones_cjnpgp.png',
          linkURL: 'https://lawsociety.org.uk'
        }
      ];
      return (
        <Container>
          <Sponsors
            sponsorInfos={sponsorInfos} 
          />
        </Container>
      );
    }
  )
  .add(
    'SponsorCard',
    () => {
      const srcURL = 'https://res.cloudinary.com/black12312312312/image/upload/v1632229725/logo_jmc_yuvl4j.png';
      const linkURL = 'https://lawsociety.org.uk';
      const imageKnob = text('Image', srcURL, contentGroupId);
      const linkKnob = text('Link', linkURL, contentGroupId);
      const sponsorCardInfo = {
        srcURL: imageKnob,
        linkURL: linkKnob
      }
      return (
        <Container>
          <SponsorCard
            { ...sponsorCardInfo }
          />
        </Container>
      );
    }
  )
