import {FC} from 'react'
import { IComment } from '../../types'
import './Comment.css'

const CommentsItem: FC<IComment> = (props) => {
    return(
        <div className='comment'>
            <p>{props.email}</p>
            <p>{props.name}</p>
            <p>{props.body}</p>
        </div>
    )
}

export default CommentsItem