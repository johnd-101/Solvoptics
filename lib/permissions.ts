export function isAdmin(role:string){

    return role === "ADMIN";

}


export function isManager(role:string){

    return (
        role === "ADMIN" ||
        role === "MANAGER"
    );

}


export function canManageUsers(role:string){

    return role === "ADMIN";

}