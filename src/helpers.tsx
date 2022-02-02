import React, { forwardRef, memo, VFC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg from 'react-native-svg';

type IconProps = {
    style?: StyleProp<ViewStyle>
}

export function createIcon<TProps>(Component: VFC<TProps>) {
    const wrapper = forwardRef<View, TProps & IconProps>((props, ref) => (
        <View ref={ref} style={[{ aspectRatio: 1, width: 24, height: 24 }, props.style]}>
            <Svg viewBox="0 0 24 24" fill="none">
                <Component {...props} />
            </Svg>
        </View>
    ));

    return memo(wrapper);
}