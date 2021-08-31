import React, { Component } from 'react';
import { isExperienceEditor } from 'services/SitecoreService';
import { RenderHtmlString } from './RenderHtmlString';
import { Img } from 'components/Image';
import useSSR from 'use-ssr';

const { isBrowser, isServer, isNative } = useSSR();

interface IImage {
  field: string;
}

class ImageWrapper extends Component<IImage> {
 

    render(): JSX.Element {   
      const { field } = this.props;

      const experienceEditor = isExperienceEditor();
      let imageElement = null;

      if(isBrowser) {
        // Converts HTMLString into HTMLElement to allow us to extract atribtues 
        var parser = new DOMParser();
        var doc = parser.parseFromString(field , 'text/html');
        imageElement = doc.querySelector('img');
      }
     
      // Render original markup if either in Experience Editor or failed to get an img element from the HtmlSting
      if(experienceEditor || !imageElement) {
        return (
          <RenderHtmlString>{field}</RenderHtmlString>
        )
      }

      const imageUrl = imageElement.getAttribute('src');
      const imageHeight = imageElement.getAttribute('height');
      const imageWidth = imageElement.getAttribute('width');

      return (
        <Img
            src={imageUrl}
            height={imageHeight}
            width={imageWidth}
            loader={<div>Loading...</div>}
            unloader={<div>Image failed to load</div>}
          />
  
      )
    }
};

export class Image extends Component<IImage> {
  render(): JSX.Element {   
    return(<span suppressHydrationWarning={true}>
      <ImageWrapper {...this.props} />
    </span>)
  }
}

