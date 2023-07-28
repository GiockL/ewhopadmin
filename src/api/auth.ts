import request from "@/utils/request";

export function login(data:Object){
    return request({
        url:'api/auth/login',
        method:'POST',
        data,
    })
}

export function user(){
    return request({
        url:'/api/admin/user'
    })
}

export function logout(){
    return request({
        url:'/api/admin/logout',
        method:'POST'
    })
}