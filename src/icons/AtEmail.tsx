import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type AtEmailProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M15.8571 13.2857H16.6071V13.2857L15.8571 13.2857ZM20.5986 14.6658L21.2311 15.0689L21.2311 15.0689L20.5986 14.6658ZM12 3.75C12.4142 3.75 12.75 3.41421 12.75 3C12.75 2.58579 12.4142 2.25 12 2.25V3.75ZM17.5719 20.002C17.9117 19.765 17.995 19.2975 17.758 18.9578C17.521 18.618 17.0535 18.5347 16.7138 18.7717L17.5719 20.002ZM18.5002 4.73283C18.1915 4.45658 17.7174 4.48285 17.4411 4.7915C17.1649 5.10014 17.1912 5.57429 17.4998 5.85053L18.5002 4.73283ZM12 15.1072C10.2839 15.1072 8.89282 13.7161 8.89282 12H7.39282C7.39282 14.5445 9.45551 16.6072 12 16.6072V15.1072ZM15.1071 12C15.1071 13.7161 13.716 15.1072 12 15.1072V16.6072C14.5444 16.6072 16.6071 14.5445 16.6071 12H15.1071ZM12 8.89288C13.716 8.89288 15.1071 10.284 15.1071 12H16.6071C16.6071 9.45557 14.5444 7.39288 12 7.39288V8.89288ZM12 7.39288C9.45551 7.39288 7.39282 9.45557 7.39282 12H8.89282C8.89282 10.284 10.2839 8.89288 12 8.89288V7.39288ZM15.1071 12L15.1071 13.2857L16.6071 13.2857L16.6071 12L15.1071 12ZM21.75 13.2857V12H20.25V13.2857H21.75ZM2.25 12C2.25 17.3848 6.61522 21.75 12 21.75V20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25ZM18.4286 16.6071C19.6077 16.6071 20.6427 15.9921 21.2311 15.0689L19.9662 14.2628C19.6416 14.772 19.074 15.1071 18.4286 15.1071V16.6071ZM21.2311 15.0689C21.5597 14.5533 21.75 13.9406 21.75 13.2857H20.25C20.25 13.6466 20.1458 13.9809 19.9662 14.2628L21.2311 15.0689ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75C3.75 7.44365 7.44365 3.75 12 3.75V2.25ZM15.1071 13.2857C15.1071 15.1201 16.5942 16.6071 18.4286 16.6071V15.1071C17.4226 15.1071 16.6071 14.2917 16.6071 13.2857H15.1071ZM12 21.75C14.0705 21.75 15.9924 21.1038 17.5719 20.002L16.7138 18.7717C15.3778 19.7036 13.7538 20.25 12 20.25V21.75ZM21.75 12C21.75 9.1123 20.4937 6.51705 18.5002 4.73283L17.4998 5.85053C19.1888 7.36224 20.25 9.5567 20.25 12H21.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15.8571 12H15.1071V12L15.8571 12ZM15.8571 13.2857H16.6071V13.2857L15.8571 13.2857ZM20.5986 14.6658L21.2311 15.0689L21.2311 15.0689L20.5986 14.6658ZM17.5719 20.002C17.9117 19.765 17.995 19.2975 17.758 18.9578C17.521 18.618 17.0535 18.5347 16.7138 18.7717L17.5719 20.002ZM12 15.1072C10.284 15.1072 8.89285 13.7161 8.89285 12H7.39285C7.39285 14.5445 9.45554 16.6072 12 16.6072V15.1072ZM15.1071 12C15.1071 13.7161 13.716 15.1072 12 15.1072V16.6072C14.5445 16.6072 16.6071 14.5445 16.6071 12H15.1071ZM12 8.89288C13.716 8.89288 15.1071 10.284 15.1071 12H16.6071C16.6071 9.45557 14.5445 7.39288 12 7.39288V8.89288ZM12 7.39288C9.45554 7.39288 7.39285 9.45557 7.39285 12H8.89285C8.89285 10.284 10.284 8.89288 12 8.89288V7.39288ZM15.1071 12L15.1071 13.2857L16.6071 13.2857L16.6071 12L15.1071 12ZM21.75 13.2857V12H20.25V13.2857H21.75ZM2.25 12C2.25 17.3848 6.61522 21.75 12 21.75V20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25ZM21.75 12C21.75 6.61522 17.3848 2.25 12 2.25V3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75ZM18.4286 16.6071C19.6077 16.6071 20.6427 15.9921 21.2311 15.0689L19.9662 14.2628C19.6416 14.772 19.074 15.1071 18.4286 15.1071V16.6071ZM21.2311 15.0689C21.5597 14.5533 21.75 13.9406 21.75 13.2857H20.25C20.25 13.6466 20.1458 13.9809 19.9662 14.2628L21.2311 15.0689ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75C3.75 7.44365 7.44365 3.75 12 3.75V2.25ZM15.1071 13.2857C15.1071 15.1201 16.5942 16.6071 18.4286 16.6071V15.1071C17.4226 15.1071 16.6071 14.2917 16.6071 13.2857H15.1071ZM12 21.75C14.0705 21.75 15.9924 21.1038 17.5719 20.002L16.7138 18.7717C15.3778 19.7036 13.7538 20.25 12 20.25V21.75Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15.8571 12H15.1071V12L15.8571 12ZM15.8571 13.2857H16.6071V13.2857L15.8571 13.2857ZM20.5986 14.6658L21.2311 15.0689L21.2311 15.0689L20.5986 14.6658ZM17.5719 20.002C17.9117 19.765 17.995 19.2975 17.758 18.9578C17.521 18.618 17.0535 18.5347 16.7138 18.7717L17.5719 20.002ZM12 15.1071C10.284 15.1071 8.89286 13.716 8.89286 12H7.39286C7.39286 14.5444 9.45555 16.6071 12 16.6071V15.1071ZM15.1071 12C15.1071 13.716 13.716 15.1071 12 15.1071V16.6071C14.5445 16.6071 16.6071 14.5444 16.6071 12H15.1071ZM12 8.89282C13.716 8.89282 15.1071 10.2839 15.1071 12H16.6071C16.6071 9.45551 14.5445 7.39282 12 7.39282V8.89282ZM12 7.39282C9.45555 7.39282 7.39286 9.45551 7.39286 12H8.89286C8.89286 10.2839 10.284 8.89282 12 8.89282V7.39282ZM15.1071 12L15.1071 13.2857L16.6071 13.2857L16.6071 12L15.1071 12ZM21.75 13.2857V12H20.25V13.2857H21.75ZM2.25 12C2.25 17.3848 6.61522 21.75 12 21.75V20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25ZM21.75 12C21.75 6.61522 17.3848 2.25 12 2.25V3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75ZM18.4286 16.6071C19.6077 16.6071 20.6427 15.9921 21.2311 15.0689L19.9662 14.2628C19.6416 14.772 19.074 15.1071 18.4286 15.1071V16.6071ZM21.2311 15.0689C21.5597 14.5533 21.75 13.9406 21.75 13.2857H20.25C20.25 13.6466 20.1458 13.9809 19.9662 14.2628L21.2311 15.0689ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75C3.75 7.44365 7.44365 3.75 12 3.75V2.25ZM15.1071 13.2857C15.1071 15.1201 16.5942 16.6071 18.4286 16.6071V15.1071C17.4226 15.1071 16.6071 14.2917 16.6071 13.2857H15.1071ZM12 21.75C14.0705 21.75 15.9924 21.1038 17.5719 20.002L16.7138 18.7717C15.3778 19.7036 13.7538 20.25 12 20.25V21.75Z" fill={props.fillColor} />
);

const AtEmail: VFC<AtEmailProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(AtEmail);