export interface IUser{
    email: string;
    id: number;
    name: string;
    phone: string;
    username:string;
    website:string;
}

export interface IPost{
    body: string;
    title: string;
    id: number;
    userId: number;
}

export interface IComment{
    postId: number;
    id: number;
    name: string; 
    email: string;
    body: string;
}

export interface IPostData{
    id: number;
    userId: number
}