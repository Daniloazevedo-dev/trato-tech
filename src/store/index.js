import { configureStore  } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import contatorSlice from './reducers/contator';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        contator: contatorSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
});

export default store;