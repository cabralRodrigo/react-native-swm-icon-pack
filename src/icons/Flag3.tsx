import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Flag3Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M4.25 12C4.25 12.4142 4.58579 12.75 5 12.75C5.41421 12.75 5.75 12.4142 5.75 12H4.25ZM5 3L5.31716 2.32036C5.08488 2.21196 4.81333 2.2297 4.59712 2.3674C4.38091 2.50509 4.25 2.74367 4.25 3L5 3ZM4.25 21C4.25 21.4142 4.58579 21.75 5 21.75C5.41421 21.75 5.75 21.4142 5.75 21H4.25ZM5 17L4.68284 16.3204C4.41878 16.4436 4.25 16.7086 4.25 17H5ZM20 10L20.3172 10.6796C20.5812 10.5564 20.75 10.2914 20.75 10C20.75 9.70861 20.5812 9.44359 20.3172 9.32036L20 10ZM5.75 12V3H4.25V12H5.75ZM5.75 21V17H4.25V21H5.75ZM4.68284 3.67964L19.6828 10.6796L20.3172 9.32036L5.31716 2.32036L4.68284 3.67964ZM19.6828 9.32036L4.68284 16.3204L5.31716 17.6796L20.3172 10.6796L19.6828 9.32036Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M5 17L20 10L5 3V17Z" fill={props.fillColor} />
        <Path d="M4.25 21C4.25 21.4142 4.58579 21.75 5 21.75C5.41421 21.75 5.75 21.4142 5.75 21H4.25ZM5 3L5.31716 2.32036C5.08488 2.21196 4.81333 2.2297 4.59712 2.3674C4.38091 2.50509 4.25 2.74367 4.25 3L5 3ZM20 10L20.3172 10.6796C20.5812 10.5564 20.75 10.2914 20.75 10C20.75 9.70861 20.5812 9.44359 20.3172 9.32036L20 10ZM5.75 21V17H4.25V21H5.75ZM5.75 17V3H4.25V17H5.75ZM4.68284 3.67964L19.6828 10.6796L20.3172 9.32036L5.31716 2.32036L4.68284 3.67964ZM19.6828 9.32036L4.68284 16.3204L5.31716 17.6796L20.3172 10.6796L19.6828 9.32036Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M4.25 21C4.25 21.4142 4.58579 21.75 5 21.75C5.41421 21.75 5.75 21.4142 5.75 21H4.25ZM5 3L5.31716 2.32036C5.08488 2.21196 4.81333 2.2297 4.59712 2.3674C4.38091 2.50509 4.25 2.74367 4.25 3L5 3ZM20 10L20.3172 10.6796C20.5812 10.5564 20.75 10.2914 20.75 10C20.75 9.70861 20.5812 9.44359 20.3172 9.32036L20 10ZM5.75 21V17H4.25V21H5.75ZM5.75 17V3H4.25V17H5.75ZM4.68284 3.67964L19.6828 10.6796L20.3172 9.32036L5.31716 2.32036L4.68284 3.67964ZM19.6828 9.32036L4.68284 16.3204L5.31716 17.6796L20.3172 10.6796L19.6828 9.32036Z" fill={props.fillColor} />
);

const Flag3: VFC<Flag3Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Flag3);