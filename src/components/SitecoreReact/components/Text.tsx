import React, { Component } from 'react';
import { isExperienceEditor } from 'services/SitecoreService';
import { RenderHtmlString } from './RenderHtmlString';

interface ITextProps {
  field: string | undefined;
}

export class Text extends Component<ITextProps> {
  render(): JSX.Element {
    const { field } = this.props;

    const experienceEditor = isExperienceEditor();
    if (field == undefined) {
      return (<></>)
    }
    else {
      return (
        <>
          {experienceEditor ?
            <RenderHtmlString>{field}</RenderHtmlString>
            :
            <>{field}</>
          }
        </>
      )
    };
  }
};
