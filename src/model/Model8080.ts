export interface Student {
    id: number,
    name: string,
    sex: string,
    age: number
}

export interface SpringError {
    timestamp: string,
    status: number,
    error: string,
    message: string,
    path: string
}

export interface SpringList<T> {
    data: T[],
    message?: string,
    code: number
}

export interface SpringPage<T> {
    data: {
        list: T[],
        total: number
    },
    message?: string,
    code: number
}