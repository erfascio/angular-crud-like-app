export interface Utente {
    id: number,
    username: string,
    password: string,
    roles: string,
    bornDate: Date,
    lastLoginTime: Date
}