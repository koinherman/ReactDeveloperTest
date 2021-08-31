import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';

export const sitecoreKnobs = (defaultValue: boolean = false) => {
    const sitecoreKnobCategory = 'Sitecore';

    const isExperienceEditorKnob = boolean('Experience Editor', defaultValue, sitecoreKnobCategory);
    if (isExperienceEditorKnob) {
        global.document.body.classList.add('sc-edit-mode');
    } else {
        global.document.body.classList.remove('sc-edit-mode');
    }
}