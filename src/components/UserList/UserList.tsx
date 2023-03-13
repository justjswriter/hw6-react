import { Component} from "react";
import apiClient from "../../common/api";
import { IUser } from "../../types";

interface IUserListState{
    users: IUser[]
}

export default class UserList extends Component{
    state: IUserListState = {
        users:[]
    }
    getUsers = async () => {
        const res = await apiClient.get<IUser[]>('/users')
        this.setState({users: res.data})
    }

    componentDidMount(): void {
        this.getUsers()    
    }

    

    render() {
        return(
            <div>
                {this.state.users.map(user => <p key={user.id} >{user.name}</p>)}
            </div>
        )
    }
}