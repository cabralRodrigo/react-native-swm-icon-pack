import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type PhoneDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M21.7923 11.8009C22.4856 12.3791 22.5266 13.4721 21.895 14.1049L20.2357 15.7642C19.97 16.0352 19.6149 16.2006 19.2367 16.2294C18.1615 16.3114 16.1037 14.9979 15.5768 14.1847C15.1654 13.5497 15.3268 12.6563 15.3275 11.9399C14.5632 11.7305 13.7839 11.5951 13 11.5337" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8.69702 11.9465C8.69631 12.6629 8.8559 13.5559 8.44327 14.1917C7.91395 15.0073 5.84479 16.3311 4.76752 16.2431C4.38552 16.2119 4.02858 16.0413 3.76461 15.7639L2.10863 14.1079C1.47304 13.4775 1.51362 12.3797 2.21038 11.7982C6.5253 7.47653 12.7299 6.56242 17.8478 9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 8C20.3886 8.00052 21.7129 10.6594 21.8897 11.7802C21.9329 11.9459 22.6286 15.6383 19.8986 15.9247C13.1064 16.6189 17.7759 11.9168 11.9997 12.0954C6.22345 12.274 10.8928 16.6189 4.10194 15.925C1.37129 15.638 2.06709 11.9456 2.11033 11.7813C2.28654 10.6598 3.61158 8.00016 12.0004 8Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M3.76461 15.7639L2.10863 14.1079C1.47304 13.4775 1.51362 12.3797 2.21038 11.7982C7.7222 6.27776 16.3175 6.31749 21.7923 11.8009C22.4856 12.3791 22.5266 13.4721 21.895 14.1049L20.2357 15.7642C19.97 16.0352 19.6149 16.2006 19.2367 16.2294C18.1615 16.3114 16.1037 14.9979 15.5768 14.1847C15.1654 13.5497 15.3268 12.6563 15.3275 11.9399C13.1582 11.3453 10.8675 11.3476 8.69702 11.9465C8.69631 12.6629 8.8559 13.5559 8.44327 14.1917C7.91395 15.0073 5.84479 16.3311 4.76752 16.2431C4.38552 16.2119 4.02858 16.0413 3.76461 15.7639Z" fill={props.fillColor} />
        <Path d="M2.10863 14.1079L3.76461 15.7639C4.02858 16.0413 4.38552 16.2119 4.76752 16.2431C5.84479 16.3311 7.91395 15.0073 8.44327 14.1917C8.8559 13.5559 8.69631 12.6629 8.69702 11.9465C10.8675 11.3476 13.1582 11.3453 15.3275 11.9399C15.3268 12.6563 15.1654 13.5497 15.5768 14.1847C16.1037 14.9979 18.1615 16.3114 19.2367 16.2294C19.6149 16.2006 19.97 16.0352 20.2357 15.7642L21.895 14.1049C22.5266 13.4721 22.4856 12.3791 21.7923 11.8009C16.3175 6.31749 7.7222 6.27776 2.21038 11.7982C1.51362 12.3797 1.47304 13.4775 2.10863 14.1079Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M2.10863 14.1079L3.76461 15.7639C4.02858 16.0413 4.38552 16.2119 4.76752 16.2431C5.84479 16.3311 7.91395 15.0073 8.44327 14.1917C8.8559 13.5559 8.69631 12.6629 8.69702 11.9465C10.8675 11.3476 13.1582 11.3453 15.3275 11.9399C15.3268 12.6563 15.1654 13.5497 15.5768 14.1847C16.1037 14.9979 18.1615 16.3114 19.2367 16.2294C19.6149 16.2006 19.97 16.0352 20.2357 15.7642L21.895 14.1049C22.5266 13.4721 22.4856 12.3791 21.7923 11.8009C16.3175 6.31749 7.7222 6.27776 2.21038 11.7982C1.51362 12.3797 1.47304 13.4775 2.10863 14.1079Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const PhoneDown: VFC<PhoneDownProps> = (props) => {
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

export default createIcon(PhoneDown);