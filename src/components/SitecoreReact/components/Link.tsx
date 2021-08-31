import React, { Component } from 'react';
import { RenderHtmlString } from './RenderHtmlString';

interface ILinkProps {
  field: string;
}

export class Link extends Component<ILinkProps> {
    render(): JSX.Element {
      const { field } = this.props;

      return (
        <RenderHtmlString>{field}</RenderHtmlString>
      )
    }
};
