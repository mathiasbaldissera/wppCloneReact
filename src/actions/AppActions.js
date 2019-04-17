import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import {
  ADICIONAR_CONTATO_MODIFICAR_EMAIL,
  ADICIONA_CONTATO_ERRO
} from './types';

export const adicionarContatoModificaEmail = payload => {
  return {
    type: ADICIONAR_CONTATO_MODIFICAR_EMAIL,
    payload
  };
};
export const adicionaContato = texto => {
  return dispatch => {
    var email64 = b64.encode(texto);
    var db = firebase.database();
    db.ref(`/contatos/${email64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          console.log(snapshot.val());
        } else {
          dispatch({
            type: ADICIONA_CONTATO_ERRO,
            payload: 'Email informado não pertence a nenhum usuário'
          });
        }
      });
  };
};
