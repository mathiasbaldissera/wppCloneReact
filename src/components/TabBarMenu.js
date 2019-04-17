import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
const imgaddcontatos = require('../imgs/adicionar-contato.png');

export default props => (
  <View
    style={{
      backgroundColor: '#115e54',
      marginBottom: 6,
      elevation: 5
    }}
  >
    <StatusBar backgroundColor='#115e54' />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={{ color: '#fff', marginLeft: 20, fontSize: 20 }}>
          Whatsapp Clone
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 20
        }}
      >
        <View
          style={{
            width: 50,
            alignItems: 'center'
          }}
        >
          <TouchableHighlight
            style={{
              padding: 5
            }}
            underlayColor='#226f65'
            onPress={() => Actions.adicionarContato()}
          >
            <Image source={imgaddcontatos} />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={{
            padding: 5
          }}
          underlayColor='#226f65'
          onPress={() => false}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Sair</Text>
        </TouchableHighlight>
      </View>
    </View>
    <TabBar {...props} style={{ backgroundColor: '#115e54', elevation: 0 }} />
  </View>
);
