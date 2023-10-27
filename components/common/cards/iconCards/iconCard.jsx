import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './iconCard.style';
import { Svg, G, Image } from 'react-native-svg';

const IconCard = ({ svgImage, text, subText }) => {
  return (
    <TouchableOpacity onPress={() => { /* Handle the touch event here */ }}>
      <View style={styles.iconLinked}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Svg width={25} height={25}>
              <G transform="translate(0, 1) rotate(0)">
                <Image href={svgImage} width={25} height={25} />
              </G>
            </Svg>
          </View>
        </View>
        <View style={{}}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default IconCard;
