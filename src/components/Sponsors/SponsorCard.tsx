import React, { FunctionComponent, useMemo } from 'react';
import { Image } from 'components/SitecoreReact';
import "./sponsor.css";

export interface SponsorCardProps {
  srcURL: string;
  linkURL: string;
}

export const SponsorCard: FunctionComponent<SponsorCardProps> = ({ 
    srcURL,
    linkURL
}) => {

  const renderCard = useMemo(() => {
    const imageValue = `<img class="sb-ee-img" src="${srcURL}" width="100%" />`;
    return (
      <a href={ linkURL } target="_blank" className="storybook-sponsor-card">
        <Image field={imageValue} />
      </a>
    );
  }, [srcURL, linkURL]);

  return (
    <>
      { renderCard }
    </>
  )
}