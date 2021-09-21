import React, { FunctionComponent, useMemo } from 'react';
import { SponsorCard, SponsorCardProps } from './SponsorCard';

export interface SponsorsProps {
  sponsorInfos: SponsorCardProps[]
}

export const Sponsors: FunctionComponent<SponsorsProps> = ({ 
  sponsorInfos
}) => {

  const renderSponsorCards = useMemo(() => {
    return (
      <div className="storybook-sponsor">
        {
          sponsorInfos && sponsorInfos.map((sponsorInfo: SponsorCardProps) => {
            return <SponsorCard { ...sponsorInfo } />
          })
        }
      </div>
      
    );
  }, [sponsorInfos]);

  return (
    <div className="container storybook-sponsors-container">
      { renderSponsorCards }
    </div>
  )
}