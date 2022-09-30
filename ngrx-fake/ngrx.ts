export interface Action {
    type: string;
    payload?: any; // parametros que podemos enviarle a la acción
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}