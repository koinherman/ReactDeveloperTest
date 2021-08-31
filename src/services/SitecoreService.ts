import useSSR from 'use-ssr';

const { isBrowser, isServer, isNative } = useSSR();

export const isExperienceEditor: Function = (): boolean => {
    if(isServer) return false;
    // @ts-ignore
    return (!!((typeof Sitecore !== "undefined") && (typeof Sitecore.PageModes !== "undefined") && (typeof Sitecore.PageModes.PageEditor !== "undefined")) || (document.body && document.body.classList.contains("sc-edit-mode")));
};
