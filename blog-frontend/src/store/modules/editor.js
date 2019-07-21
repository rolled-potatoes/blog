/**
 * 마크다운 에디터 상태를 룸
 */
import {createAction, handleActions} from 'redux-actions'
import {Map} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const INITIALIZE = 'editor/INITIALIZE'
const CHANGE_INPUT = 'editor/CHANGE_INPUT'
const WRITE_POST = 'editor/WRITE_POST'
const GET_POST = 'editor/GET_POST'
const EDIT_POST = 'editor/EDIT_POST'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const write_post = createAction(WRITE_POST,api.wirtePost)
export const get_post = createAction(GET_POST,api.getPost)
export const edit_post =createAction(EDIT_POST,api.editPost)

const initialState=Map({
    title:'',
    markdown : '',
    tags : '',
    postId: null,
})

export default handleActions({
    [INITIALIZE]: (state,action)=>{
        return initialState
    },
    [CHANGE_INPUT] : (state,action)=>{
        const {name , value} =action.payload
        return state.set(name,value)
    },
    ...pender({
        type:WRITE_POST,

        onSuccess:(state,action)=>{
            const{_id} = action.payload.data;
            return state.set('postId',_id)
        }
    }),
    ...pender({
        type: GET_POST,
        onSuccess:(state,action)=>{
            const {title,tags,body} = action.payload.data;
            return state.set('title', title)
                        .set('markdown',body)
                        .set('tags',tags.join(', '))
        }
        }
    )
    
},initialState)