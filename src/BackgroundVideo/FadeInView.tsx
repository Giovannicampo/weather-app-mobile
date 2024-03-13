import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import type {PropsWithChildren, ReactElement} from 'react';
import type {ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle, duration: number, flag: boolean}>;

export const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.flag ? 1 : 0,
      duration: props.duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

