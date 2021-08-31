import React, { FunctionComponent } from 'react';
import { RenderHtmlString } from './RenderHtmlString';

interface IRichTextProps {
  field: string;
  tag?: string;
  className?: string;
 }

export const RichText: FunctionComponent<IRichTextProps> = ({ field, tag, className, ...otherProps }) => 
{
    const containerTag = (tag && tag.length > 0) ? tag : 'div';
    const ContainerElement = `${containerTag}`;

    // @ts-ignore
    return <ContainerElement { ...otherProps} className={className}>
       <RenderHtmlString>{field}</RenderHtmlString>
    </ContainerElement>; 
};
