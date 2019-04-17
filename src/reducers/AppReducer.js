import {
  ADICIONAR_CONTATO_MODIFICAR_EMAIL,
  ADICIONA_CONTATO_ERRO
} from '../actions/types';

const INITIAL_STATE = {
  adiciona_contato_email: '',
  adicionar_usuario_txt_erro: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('AppReducer-ActionLog', action);
  switch (action.type) {
    case ADICIONAR_CONTATO_MODIFICAR_EMAIL: {
      return { ...state, adiciona_contato_email: action.payload };
    }
    case ADICIONA_CONTATO_ERRO: {
      return { ...state, adicionar_usuario_txt_erro: action.payload };
    }
    default:
      return state;
  }
};
