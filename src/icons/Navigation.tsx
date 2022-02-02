import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type NavigationProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 3L12.6935 2.71444C12.5778 2.43341 12.3039 2.25 12 2.25C11.6961 2.25 11.4222 2.43341 11.3065 2.71444L12 3ZM19 20L18.7046 20.6894C18.9846 20.8094 19.3095 20.748 19.5265 20.5341C19.7435 20.3202 19.8095 19.9962 19.6935 19.7144L19 20ZM12.2954 16.3106C11.9147 16.1475 11.4738 16.3238 11.3106 16.7046C11.1475 17.0853 11.3238 17.5262 11.7046 17.6894L12.2954 16.3106ZM5 20L4.30649 19.7144C4.19047 19.9962 4.25646 20.3202 4.47347 20.5341C4.69048 20.748 5.01535 20.8094 5.29544 20.6894L5 20ZM8.79544 19.1894C9.17616 19.0262 9.35253 18.5853 9.18936 18.2046C9.02619 17.8238 8.58528 17.6475 8.20456 17.8106L8.79544 19.1894ZM11.3065 3.28556L18.3065 20.2856L19.6935 19.7144L12.6935 2.71444L11.3065 3.28556ZM19.2954 19.3106L12.2954 16.3106L11.7046 17.6894L18.7046 20.6894L19.2954 19.3106ZM5.69351 20.2856L12.6935 3.28556L11.3065 2.71444L4.30649 19.7144L5.69351 20.2856ZM8.20456 17.8106L4.70456 19.3106L5.29544 20.6894L8.79544 19.1894L8.20456 17.8106Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M12 3L19 20L12 17L5 20L12 3Z" fill={props.fillColor} />
        <Path d="M19 20L12 3L5 20L12 17L19 20Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 3L12.6935 2.71444C12.5778 2.43341 12.3039 2.25 12 2.25C11.6961 2.25 11.4222 2.43341 11.3065 2.71444L12 3ZM19 20L18.7046 20.6894C18.9846 20.8094 19.3095 20.748 19.5265 20.5341C19.7435 20.3202 19.8095 19.9962 19.6935 19.7144L19 20ZM12 17L12.2954 16.3106C12.1068 16.2298 11.8932 16.2298 11.7046 16.3106L12 17ZM5 20L4.30649 19.7144C4.19047 19.9962 4.25646 20.3202 4.47347 20.5341C4.69048 20.748 5.01535 20.8094 5.29544 20.6894L5 20ZM11.3065 3.28556L18.3065 20.2856L19.6935 19.7144L12.6935 2.71444L11.3065 3.28556ZM19.2954 19.3106L12.2954 16.3106L11.7046 17.6894L18.7046 20.6894L19.2954 19.3106ZM11.7046 16.3106L4.70456 19.3106L5.29544 20.6894L12.2954 17.6894L11.7046 16.3106ZM5.69351 20.2856L12.6935 3.28556L11.3065 2.71444L4.30649 19.7144L5.69351 20.2856Z" fill={props.fillColor} />
);

const Navigation: VFC<NavigationProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Navigation);