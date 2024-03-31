import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/QuizzifyLogo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0077CC',
    height: 120,
    paddingHorizontal: 20,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    tintColor: '#D9FE00',
  },
});

export default Header;
