export interface Iempleado {
    id: number
    name: string,
    email: string,
    post: string
}

export type empleadoDb = Pick<Iempleado, 'name' | 'email' | 'post'>
