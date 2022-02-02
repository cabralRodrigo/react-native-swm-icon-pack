import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type Send1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M3 11L2.71444 10.3065C2.43521 10.4215 2.25218 10.6927 2.25002 10.9946C2.24786 11.2966 2.42701 11.5704 2.70456 11.6894L3 11ZM20 4L20.6935 4.28556C20.8088 4.00559 20.7444 3.68376 20.5303 3.46967C20.3162 3.25558 19.9944 3.19121 19.7144 3.30649L20 4ZM13 21L12.3106 21.2954C12.4296 21.573 12.7034 21.7521 13.0054 21.75C13.3073 21.7478 13.5785 21.5648 13.6935 21.2856L13 21ZM10.6894 13.7046C10.5262 13.3238 10.0853 13.1475 9.70456 13.3106C9.32384 13.4738 9.14747 13.9147 9.31064 14.2954L10.6894 13.7046ZM6.20456 13.1894C6.58528 13.3525 7.02619 13.1762 7.18936 12.7954C7.35253 12.4147 7.17616 11.9738 6.79544 11.8106L6.20456 13.1894ZM3.28556 11.6935L20.2856 4.69351L19.7144 3.30649L2.71444 10.3065L3.28556 11.6935ZM19.3065 3.71444L12.3065 20.7144L13.6935 21.2856L20.6935 4.28556L19.3065 3.71444ZM13.6894 20.7046L10.6894 13.7046L9.31064 14.2954L12.3106 21.2954L13.6894 20.7046ZM6.79544 11.8106L3.29544 10.3106L2.70456 11.6894L6.20456 13.1894L6.79544 11.8106Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill={props.fillColor} />
        <Path d="M20 4L3 11L10 14L13 21L20 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3 11L2.71444 10.3065C2.43521 10.4215 2.25218 10.6927 2.25002 10.9946C2.24786 11.2966 2.42701 11.5704 2.70456 11.6894L3 11ZM20 4L20.6935 4.28556C20.8088 4.00559 20.7444 3.68376 20.5303 3.46967C20.3162 3.25558 19.9944 3.19121 19.7144 3.30649L20 4ZM13 21L12.3106 21.2954C12.4296 21.573 12.7034 21.7521 13.0054 21.75C13.3073 21.7478 13.5785 21.5648 13.6935 21.2856L13 21ZM10 14L10.6894 13.7046C10.6135 13.5275 10.4725 13.3865 10.2954 13.3106L10 14ZM3.28556 11.6935L20.2856 4.69351L19.7144 3.30649L2.71444 10.3065L3.28556 11.6935ZM19.3065 3.71444L12.3065 20.7144L13.6935 21.2856L20.6935 4.28556L19.3065 3.71444ZM13.6894 20.7046L10.6894 13.7046L9.31064 14.2954L12.3106 21.2954L13.6894 20.7046ZM10.2954 13.3106L3.29544 10.3106L2.70456 11.6894L9.70456 14.6894L10.2954 13.3106Z" fill={props.fillColor} />
);

const Send1: VFC<Send1Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Send1);