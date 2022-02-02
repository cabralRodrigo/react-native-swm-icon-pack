import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type PauseProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M15.75 16C15.75 15.5858 15.4142 15.25 15 15.25C14.5858 15.25 14.25 15.5858 14.25 16H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 12C14.25 12.4142 14.5858 12.75 15 12.75C15.4142 12.75 15.75 12.4142 15.75 12H14.25ZM9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6H9.75ZM8.25 18C8.25 18.4142 8.58579 18.75 9 18.75C9.41421 18.75 9.75 18.4142 9.75 18H8.25ZM14.25 16V18H15.75V16H14.25ZM14.25 6V12H15.75V6H14.25ZM8.25 6V18H9.75V6H8.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6H9.75ZM8.25 18C8.25 18.4142 8.58579 18.75 9 18.75C9.41421 18.75 9.75 18.4142 9.75 18H8.25ZM14.25 6V18H15.75V6H14.25ZM8.25 6V18H9.75V6H8.25Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6H9.75ZM8.25 18C8.25 18.4142 8.58579 18.75 9 18.75C9.41421 18.75 9.75 18.4142 9.75 18H8.25ZM14.25 6V18H15.75V6H14.25ZM8.25 6V18H9.75V6H8.25Z" fill={props.fillColor} />
);

const Pause: VFC<PauseProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Pause);