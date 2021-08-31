const breakpoints  = {
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1200
};


export let media: (
    condition: '<' | '<=' | '>' | '>=', 
    viewport: 'small' | 'medium' | 'large' | 'extraLarge') => string = function (
    condition: string,
    viewport: string
): string {
    let breakpoint = breakpoints[viewport];
    let prefix = '';
    switch(condition) {
        case '<':
            breakpoint = breakpoint-1;
            prefix = 'max-width';
          break;
        case '<=':
            prefix = 'max-width';
          break;
        case '>':
            breakpoint = breakpoint+1;
            prefix = 'min-width';
            break;
        case '>=':
            prefix = 'min-width';
            break;
      }

    return `@media (${prefix}: ${breakpoint}px)`;
};

