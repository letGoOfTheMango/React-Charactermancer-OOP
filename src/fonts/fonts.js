import { createGlobalStyle } from "styled-components";
import MrsEavesSmallCaps from "./MrsEavesSmallCaps Regular.ttf";
import ScalaSans from "./ScalaSans.ttf";
import ScalaSansItalic from "./ScalaSans-Italic.ttf";
import Bookmania from "./Bookmania W01 Reg.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'MrsEavesSmallCaps';
        src: local('MrsEavesSmallCaps'), local('MrsEavesSmallCaps'),
        url(${MrsEavesSmallCaps}) format('ttf'),
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'ScalaSans';
        src: local('ScalaSans'), local('ScalaSans'),
        url(${ScalaSans}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'ScalaSansItalic';
        src: local('ScalaSansItalic'), local('ScalaSansItalic'),
        url(${ScalaSansItalic}) format('ttf');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: 'Bookmania';
        src: local('Bookmania'), local('Bookmania'),
        url(${Bookmania}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }
`;
