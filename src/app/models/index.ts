
export enum Role {
    GroupAdmin = 'Group Admin',
    SuperAdmin = 'Super Admin',
    GroupAssis = 'Group Assis',
    NormalUser = 'Normal User',
}
export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}
