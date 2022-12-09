import { createReducer, on, Action } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

const initialState: filtrosValidos = 'todos';

export const _filtroReducer = createReducer<filtrosValidos, Action>(initialState,
    on(setFiltro, (state, {filtro}) => filtro),
);

export function filtroReducer(state: filtrosValidos | undefined, action: Action) {
    return _filtroReducer(state, action);
}