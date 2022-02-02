import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type Filters3Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M4 4V3.25C3.72736 3.25 3.47619 3.39796 3.34402 3.63642C3.21185 3.87489 3.2195 4.1663 3.364 4.3975L4 4ZM8.364 12.3975C8.58353 12.7488 9.04625 12.8555 9.3975 12.636C9.74875 12.4165 9.85553 11.9538 9.636 11.6025L8.364 12.3975ZM15 4.75C15.4142 4.75 15.75 4.41421 15.75 4C15.75 3.58579 15.4142 3.25 15 3.25V4.75ZM15 12L14.364 11.6025C14.2895 11.7217 14.25 11.8594 14.25 12H15ZM20.636 4.3975C20.8555 4.04625 20.7488 3.58353 20.3975 3.364C20.0462 3.14447 19.5835 3.25125 19.364 3.6025L20.636 4.3975ZM9 18H8.25C8.25 18.2841 8.4105 18.5438 8.66459 18.6708L9 18ZM15 21L14.6646 21.6708C14.8971 21.7871 15.1732 21.7746 15.3943 21.638C15.6154 21.5013 15.75 21.2599 15.75 21H15ZM9.75 16C9.75 15.5858 9.41421 15.25 9 15.25C8.58579 15.25 8.25 15.5858 8.25 16H9.75ZM3.364 4.3975L8.364 12.3975L9.636 11.6025L4.636 3.6025L3.364 4.3975ZM4 4.75H15V3.25H4V4.75ZM15.636 12.3975L20.636 4.3975L19.364 3.6025L14.364 11.6025L15.636 12.3975ZM8.66459 18.6708L14.6646 21.6708L15.3354 20.3292L9.33541 17.3292L8.66459 18.6708ZM15.75 21V12H14.25V21H15.75ZM8.25 16V18H9.75V16H8.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M4 4L9 12V18L15 21V12L20 4H4Z" fill={props.fillColor} />
        <Path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M4 4V3.25C3.72736 3.25 3.47619 3.39796 3.34402 3.63642C3.21185 3.87489 3.2195 4.1663 3.364 4.3975L4 4ZM20 4L20.636 4.3975C20.7805 4.1663 20.7882 3.87489 20.656 3.63642C20.5238 3.39796 20.2726 3.25 20 3.25V4ZM9 12H9.75C9.75 11.8594 9.7105 11.7217 9.636 11.6025L9 12ZM15 12L14.364 11.6025C14.2895 11.7217 14.25 11.8594 14.25 12H15ZM9 18H8.25C8.25 18.2841 8.4105 18.5438 8.66459 18.6708L9 18ZM15 21L14.6646 21.6708C14.8971 21.7871 15.1732 21.7746 15.3943 21.638C15.6154 21.5013 15.75 21.2599 15.75 21H15ZM3.364 4.3975L8.364 12.3975L9.636 11.6025L4.636 3.6025L3.364 4.3975ZM15.636 12.3975L20.636 4.3975L19.364 3.6025L14.364 11.6025L15.636 12.3975ZM8.25 12V18H9.75V12H8.25ZM8.66459 18.6708L14.6646 21.6708L15.3354 20.3292L9.33541 17.3292L8.66459 18.6708ZM15.75 21V12H14.25V21H15.75ZM4 4.75H20V3.25H4V4.75Z" fill={props.fillColor} />
);

const Filters3: VFC<Filters3Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Filters3);