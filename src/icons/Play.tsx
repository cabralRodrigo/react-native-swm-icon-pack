import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type PlayProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M7.25 18C7.25 18.4142 7.58579 18.75 8 18.75C8.41421 18.75 8.75 18.4142 8.75 18H7.25ZM8 6L8.38587 5.35688C8.15417 5.21786 7.86561 5.21422 7.63048 5.34735C7.39534 5.48048 7.25 5.7298 7.25 6H8ZM18 12L18.3859 12.6431C18.6118 12.5076 18.75 12.2634 18.75 12C18.75 11.7366 18.6118 11.4924 18.3859 11.3569L18 12ZM10.9475 15.3569C10.5923 15.57 10.4771 16.0307 10.6902 16.3859C10.9033 16.7411 11.364 16.8562 11.7192 16.6431L10.9475 15.3569ZM8.75 18V6H7.25V18H8.75ZM7.61413 6.64312L17.6141 12.6431L18.3859 11.3569L8.38587 5.35688L7.61413 6.64312ZM17.6141 11.3569L10.9475 15.3569L11.7192 16.6431L18.3859 12.6431L17.6141 11.3569Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M8 6V18L18 12L8 6Z" fill={props.fillColor} />
        <Path d="M8 6V18L18 12L8 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M8 6L8.38587 5.35688C8.15417 5.21786 7.86561 5.21422 7.63048 5.34735C7.39534 5.48048 7.25 5.7298 7.25 6H8ZM8 18H7.25C7.25 18.2702 7.39534 18.5195 7.63048 18.6526C7.86561 18.7858 8.15417 18.7821 8.38587 18.6431L8 18ZM18 12L18.3859 12.6431C18.6118 12.5076 18.75 12.2634 18.75 12C18.75 11.7366 18.6118 11.4924 18.3859 11.3569L18 12ZM8.75 18V6H7.25V18H8.75ZM17.6141 11.3569L7.61413 17.3569L8.38587 18.6431L18.3859 12.6431L17.6141 11.3569ZM7.61413 6.64312L17.6141 12.6431L18.3859 11.3569L8.38587 5.35688L7.61413 6.64312Z" fill={props.fillColor} />
);

const Play: VFC<PlayProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Play);