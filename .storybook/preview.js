import '../src/styles/global.scss';

const customViewports = {
  extraLarge: {
    name: 'Extra large',
    styles: {
      width: '1200px',
      height: '700px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '992px',
      height: '700px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '568px',
    },
  },
  small: {
    name: 'Small',
    styles: {
      width: '576px',
      height: '600px',
    },
  },
  extraSmall: {
    name: 'Extra small',
    styles: {
      width: '320px',
      height: '500px',
    },
  },
};

export const parameters = {
  viewport: {
    viewports: customViewports
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
}