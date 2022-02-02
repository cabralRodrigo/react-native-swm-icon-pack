import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type StopProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M13 5.25C12.5858 5.25 12.25 5.58579 12.25 6C12.25 6.41421 12.5858 6.75 13 6.75V5.25ZM18 6H18.75C18.75 5.58579 18.4142 5.25 18 5.25V6ZM17.25 11C17.25 11.4142 17.5858 11.75 18 11.75C18.4142 11.75 18.75 11.4142 18.75 11H17.25ZM18 18V18.75C18.4142 18.75 18.75 18.4142 18.75 18H18ZM6 18H5.25C5.25 18.4142 5.58579 18.75 6 18.75V18ZM6 6V5.25C5.58579 5.25 5.25 5.58579 5.25 6H6ZM9 6.75C9.41421 6.75 9.75 6.41421 9.75 6C9.75 5.58579 9.41421 5.25 9 5.25V6.75ZM18.75 15C18.75 14.5858 18.4142 14.25 18 14.25C17.5858 14.25 17.25 14.5858 17.25 15H18.75ZM13 6.75H18V5.25H13V6.75ZM17.25 6V11H18.75V6H17.25ZM18 17.25H6V18.75H18V17.25ZM6.75 18V6H5.25V18H6.75ZM6 6.75H9V5.25H6V6.75ZM17.25 15V18H18.75V15H17.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M6 6H18V18H6V6Z" fill={props.fillColor} />
        <Path d="M6 6H18V18H6V6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M6 6V5.25C5.58579 5.25 5.25 5.58579 5.25 6H6ZM18 6H18.75C18.75 5.58579 18.4142 5.25 18 5.25V6ZM18 18V18.75C18.4142 18.75 18.75 18.4142 18.75 18H18ZM6 18H5.25C5.25 18.4142 5.58579 18.75 6 18.75V18ZM6 6.75H18V5.25H6V6.75ZM17.25 6V18H18.75V6H17.25ZM18 17.25H6V18.75H18V17.25ZM6.75 18V6H5.25V18H6.75Z" fill={props.fillColor} />
);

const Stop: VFC<StopProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Stop);