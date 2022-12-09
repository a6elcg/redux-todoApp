import { createAction, props } from '@ngrx/store';

// listado de acciones

// TODO: CREAR ACTION
export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()
);

// TODO: TOGGLE ACTION
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

// TODO: EDITAR ACTION
export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

// TODO: BORRAR ACTION
export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

// TODO: TOGGLE ALL ACTION
export const toggleAll = createAction(
    '[TODO] Toggle All Todos',
    props<{ completado: boolean }>()
); 

// TODO: BORRAR COMPLETADOS ACTION
export const borrarCompletados = createAction(
    '[TODO] Borrar Todos Completados',
); 