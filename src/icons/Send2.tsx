import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Send2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M20 4L20.6935 4.28556C20.8088 4.00559 20.7444 3.68376 20.5303 3.46967C20.3162 3.25558 19.9944 3.19121 19.7144 3.30649L20 4ZM13 21L12.3106 21.2954C12.4296 21.573 12.7034 21.7521 13.0054 21.75C13.3073 21.7478 13.5785 21.5648 13.6935 21.2856L13 21ZM3 11L2.71444 10.3065C2.43521 10.4215 2.25218 10.6927 2.25002 10.9946C2.24786 11.2966 2.42701 11.5704 2.70456 11.6894L3 11ZM11.7144 6.60061C11.3314 6.75832 11.1488 7.19667 11.3065 7.57968C11.4642 7.96269 11.9025 8.14534 12.2856 7.98763L11.7144 6.60061ZM7.28556 10.0464C7.66858 9.88874 7.85122 9.45039 7.69351 9.06738C7.5358 8.68436 7.09745 8.50172 6.71444 8.65943L7.28556 10.0464ZM19.3065 3.71444L12.3065 20.7144L13.6935 21.2856L20.6935 4.28556L19.3065 3.71444ZM13.6894 20.7046L10.6894 13.7046L9.31064 14.2954L12.3106 21.2954L13.6894 20.7046ZM10.2954 13.3106L3.29544 10.3106L2.70456 11.6894L9.70456 14.6894L10.2954 13.3106ZM12.2856 7.98763L20.2856 4.69351L19.7144 3.30649L11.7144 6.60061L12.2856 7.98763ZM3.28556 11.6935L7.28556 10.0464L6.71444 8.65943L2.71444 10.3065L3.28556 11.6935ZM19.4697 3.46967L9.46967 13.4697L10.5303 14.5303L20.5303 4.53033L19.4697 3.46967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill={props.fillColor} />
        <Path d="M3 11L2.71444 10.3065C2.43521 10.4215 2.25218 10.6927 2.25002 10.9946C2.24786 11.2966 2.42701 11.5704 2.70456 11.6894L3 11ZM20 4L20.6935 4.28556C20.8088 4.00559 20.7444 3.68376 20.5303 3.46967C20.3162 3.25558 19.9944 3.19121 19.7144 3.30649L20 4ZM13 21L12.3106 21.2954C12.4296 21.573 12.7034 21.7521 13.0054 21.75C13.3073 21.7478 13.5785 21.5648 13.6935 21.2856L13 21ZM3.28556 11.6935L20.2856 4.69351L19.7144 3.30649L2.71444 10.3065L3.28556 11.6935ZM19.3065 3.71444L12.3065 20.7144L13.6935 21.2856L20.6935 4.28556L19.3065 3.71444ZM13.6894 20.7046L10.6894 13.7046L9.31064 14.2954L12.3106 21.2954L13.6894 20.7046ZM10.2954 13.3106L3.29544 10.3106L2.70456 11.6894L9.70456 14.6894L10.2954 13.3106ZM19.4697 3.46967L9.46967 13.4697L10.5303 14.5303L20.5303 4.53033L19.4697 3.46967Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3 11L2.71444 10.3065C2.43521 10.4215 2.25218 10.6927 2.25002 10.9946C2.24786 11.2966 2.42701 11.5704 2.70456 11.6894L3 11ZM20 4L20.6935 4.28556C20.8088 4.00559 20.7444 3.68376 20.5303 3.46967C20.3162 3.25558 19.9944 3.19121 19.7144 3.30649L20 4ZM13 21L12.3106 21.2954C12.4296 21.573 12.7034 21.7521 13.0054 21.75C13.3073 21.7478 13.5785 21.5648 13.6935 21.2856L13 21ZM3.28556 11.6935L20.2856 4.69351L19.7144 3.30649L2.71444 10.3065L3.28556 11.6935ZM19.3065 3.71444L12.3065 20.7144L13.6935 21.2856L20.6935 4.28556L19.3065 3.71444ZM13.6894 20.7046L10.6894 13.7046L9.31064 14.2954L12.3106 21.2954L13.6894 20.7046ZM10.2954 13.3106L3.29544 10.3106L2.70456 11.6894L9.70456 14.6894L10.2954 13.3106ZM19.4697 3.46967L9.46967 13.4697L10.5303 14.5303L20.5303 4.53033L19.4697 3.46967Z" fill={props.fillColor} />
);

const Send2: VFC<Send2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Send2);