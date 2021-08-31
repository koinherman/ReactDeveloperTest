import { Classes, Styles } from 'jss';
import { createUseStyles } from 'react-jss';
import { media } from 'styles/mixins';
import { colours, fonts } from 'styles/variables';
import { HeadingProps } from './Heading';

export type HeadingClassNames = 'heading';
export type HeadingClasses = Classes<HeadingClassNames>;
export type HeadingStyles = Styles<HeadingClassNames>;
export type HeadingStylesProps = HeadingProps;
const getStyles: HeadingStyles = {
  heading: ({
    textColour,
    alignment,
    fontStyle,
    fontFamily,
  }: HeadingStylesProps) => ({
    color: mapColourVariant(textColour),
    ...mapFontFamilyVariant(fontFamily),
    ...mapAlignmentVariant(alignment),
    fontStyle:
      fontStyle == HeadingFontStyleVariants.italic ? 'italic' : 'normal',
    '&:first-letter': {
      textTransform: 'uppercase',
    },
    ...mapFontFamilyVariant(fontFamily),
  }),
};

const useHeadingStyles: (data?: any) => HeadingClasses = createUseStyles<
  HeadingClassNames
>(getStyles);
export default useHeadingStyles;

const mapColourVariant: (
  colourVariant: HeadingColourVariants | null,
) => string = function (colourVariant: HeadingColourVariants): string {
  switch (colourVariant) {
    case HeadingColourVariants.white:
      return colours.white;
    case HeadingColourVariants.black:
      return colours.typographyblack;
    case HeadingColourVariants.lime:
      return colours.limegreen40;
    case HeadingColourVariants.darkgreen:
      return colours.darkgreen110;
    case HeadingColourVariants.lightPurple:
      return colours.guildingpurple110;
    default:
      return colours.typographyblack;
  }
};

const mapAlignmentVariant = (
  alignmentVariant: HeadingAligmentVariants | null,
): object => {
  switch (alignmentVariant) {
    case HeadingAligmentVariants.left:
      return textAlign('left');
    case HeadingAligmentVariants.right:
      return textAlign('right');
    case HeadingAligmentVariants.centre:
      return textAlign('center');
    case HeadingAligmentVariants.inherit:
      return textAlign('inherit');
    case HeadingAligmentVariants.leftCenter:
      return leftCenter();
    default:
      return textAlign('left');
  }
};

const textAlign = (alignment): object => {
  return { textAlign: alignment };
};

const leftCenter = (): object => {
  return {
    textAlign: 'center',
    [media('>', 'large')]: {
      textAlign: 'left',
    },
  };
};

const mapFontFamilyVariant: (
  familyVariant: HeadingFontFamilyVariants | null,
) => object = function (familyVariant: HeadingFontFamilyVariants): object {
  switch (familyVariant) {
    case HeadingFontFamilyVariants.sansSerif:
      return { fontFamily: fonts.fontSansSerif };
    default:
      return { fontFamily: fonts.fontSerif };
  }
};

export enum HeadingColourVariants {
  black,
  lime,
  white,
  darkgreen,
  lightPurple,
}

export enum HeadingAligmentVariants {
  left,
  centre,
  right,
  inherit,
  leftCenter,
}

export enum HeadingFontStyleVariants {
  normal,
  italic,
}

export enum HeadingFontFamilyVariants {
  sansSerif,
  lora,
}
