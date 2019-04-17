import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  adicionarContatoModificaEmail,
  adicionaContato
} from '../actions/AppActions';

const adicionarContato = props => (
  <View style={{ justifyContent: 'center', flex: 1, padding: 20 }}>
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <TextInput
        placeholder='E-mail'
        style={{ fontSize: 20, height: 45 }}
        value={props.adiciona_contato_email}
        onChangeText={text => props.adicionarContatoModificaEmail(text)}
      />
    </View>
    <View style={{ flex: 1 }}>
      <Button
        title='Adicionar'
        color='#115e54'
        onPress={() => props.adicionaContato(props.adiciona_contato_email)}
      />
      <Text style={{ fontSize: 20, color: '#f00', bagroundColor: '#fff5' }}>
        {props.adicionar_usuario_txt_erro}
      </Text>
    </View>
  </View>
);
const mapStateToProps = state => ({
  adicionar_usuario_txt_erro: state.AppReducer.adicionar_usuario_txt_erro,
  adiciona_contato_email: state.AppReducer.adiciona_contato_email
});
export default connect(
  mapStateToProps,
  { adicionarContatoModificaEmail, adicionaContato }
)(adicionarContato);
