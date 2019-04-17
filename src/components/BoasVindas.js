import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const background = require('../imgs/bg.png');

export default props => (
  <Image source={background} style={{ width: null, flex: 1, padding: 15 }}>
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
        {' '}
        Seja Bem-vindo
      </Text>
      <Image style={{ margin: 10 }} source={logo} />
    </View>
    <View style={{ flex: 1 }}>
      <Button title='Fazer Login' onPress={() => Actions.formLogin()} />
    </View>
  </Image>
);
