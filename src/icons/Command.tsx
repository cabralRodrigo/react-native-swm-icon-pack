import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type CommandProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M15 15V9H9V15H12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M9 9H6C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M9 9H15V15H9V9Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" fill={props.fillColor} />
            <Path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" fill={props.fillColor} />
            <Path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" fill={props.fillColor} />
            <Path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" fill={props.fillColor} />
        </G>
        <Path d="M9 9H15V15H9V9Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M9 9H15V15H9V9Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Command: VFC<CommandProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'curved':
            return <Curved {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Command);