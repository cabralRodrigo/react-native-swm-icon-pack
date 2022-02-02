import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type Speaker0Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M13 3H13.75C13.75 2.70899 13.5817 2.44424 13.3181 2.32081C13.0546 2.19737 12.7434 2.23753 12.5199 2.42383L13 3ZM7 8V8.75C7.17545 8.75 7.34535 8.68849 7.48014 8.57617L7 8ZM7 16.75C7.41421 16.75 7.75 16.4142 7.75 16C7.75 15.5858 7.41421 15.25 7 15.25V16.75ZM13 21L12.5199 21.5762C12.7434 21.7625 13.0546 21.8026 13.3181 21.6792C13.5817 21.5558 13.75 21.291 13.75 21H13ZM10.4801 17.9238C10.1619 17.6587 9.68901 17.7017 9.42383 18.0199C9.15866 18.3381 9.20165 18.811 9.51986 19.0762L10.4801 17.9238ZM12.5199 2.42383L6.51986 7.42383L7.48014 8.57617L13.4801 3.57617L12.5199 2.42383ZM7 7.25H5V8.75H7V7.25ZM2.25 10V14H3.75V10H2.25ZM5 16.75H7V15.25H5V16.75ZM13.75 21V3H12.25V21H13.75ZM2.25 14C2.25 15.5188 3.48122 16.75 5 16.75V15.25C4.30964 15.25 3.75 14.6904 3.75 14H2.25ZM5 7.25C3.48122 7.25 2.25 8.48122 2.25 10H3.75C3.75 9.30964 4.30964 8.75 5 8.75V7.25ZM9.51986 19.0762L12.5199 21.5762L13.4801 20.4238L10.4801 17.9238L9.51986 19.0762Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" fill={props.fillColor} />
        <Path d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M13 3H13.75C13.75 2.70899 13.5817 2.44424 13.3181 2.32081C13.0546 2.19737 12.7434 2.23753 12.5199 2.42383L13 3ZM7 8V8.75C7.17545 8.75 7.34535 8.68849 7.48014 8.57617L7 8ZM7 16L7.48014 15.4238C7.34535 15.3115 7.17545 15.25 7 15.25V16ZM13 21L12.5199 21.5762C12.7434 21.7625 13.0546 21.8026 13.3181 21.6792C13.5817 21.5558 13.75 21.291 13.75 21H13ZM12.5199 2.42383L6.51986 7.42383L7.48014 8.57617L13.4801 3.57617L12.5199 2.42383ZM7 7.25H5V8.75H7V7.25ZM2.25 10V14H3.75V10H2.25ZM5 16.75H7V15.25H5V16.75ZM6.51986 16.5762L12.5199 21.5762L13.4801 20.4238L7.48014 15.4238L6.51986 16.5762ZM13.75 21V3H12.25V21H13.75ZM2.25 14C2.25 15.5188 3.48122 16.75 5 16.75V15.25C4.30964 15.25 3.75 14.6904 3.75 14H2.25ZM5 7.25C3.48122 7.25 2.25 8.48122 2.25 10H3.75C3.75 9.30964 4.30964 8.75 5 8.75V7.25Z" fill={props.fillColor} />
);

const Speaker0: VFC<Speaker0Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Speaker0);