  
import React, {
  FunctionComponent,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode
} from "react";
import useHeadingStyles, { HeadingClasses, HeadingColourVariants, HeadingAligmentVariants, HeadingFontStyleVariants, HeadingFontFamilyVariants } from './HeadingStyles';

export type HeadingProps  = {
  level?: number;
  children: ReactNode;
  textColour?: HeadingColourVariants;
  alignment?: HeadingAligmentVariants;
  fontStyle?: HeadingFontStyleVariants;
  fontFamily?: HeadingFontFamilyVariants;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>; 

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const H: FunctionComponent<HeadingProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({ 
  children, level, textColour, alignment, fontStyle, fontFamily, ...otherProps 
}) => {
  const useStyles: HeadingClasses = useHeadingStyles({textColour, alignment, fontStyle, fontFamily});
  const proposedLevel = (level !== undefined ? level : 1);
  const levelValue = levelRange(proposedLevel);
  const Tag = `h${levelValue}` as HeadingTag;
  return (
    <Tag className={useStyles.heading} {...otherProps}>{children}</Tag>
  )
}

function levelRange(level: number): number {
  if (level > 0 && level <= MAXIMUM_LEVEL) {
    return level;
  }
  const errorMessage = `Heading level "${level}" is not valid HTML5 which only allows levels 1-${MAXIMUM_LEVEL}`;
  if (!isProd()) {
    throw Error(`${errorMessage}${exceptionOnDev}`);
  }
  return Math.min(Math.max(1, level), MAXIMUM_LEVEL);
}

function isProd() {
  return !process || !process.env || process.env.NODE_ENV === "production";
}

const exceptionOnDev =
  ". This exception is only thrown in non-production environments.";

const MAXIMUM_LEVEL = 6;