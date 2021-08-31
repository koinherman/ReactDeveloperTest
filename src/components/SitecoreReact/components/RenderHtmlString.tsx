import React, { FunctionComponent } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

type  IRenderHtmlStringProps = {
    children: string
}

export const RenderHtmlString: FunctionComponent<IRenderHtmlStringProps> = ({ children }) => 
{
    return ReactHtmlParser(children); 
};