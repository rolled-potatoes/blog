import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as baseActions from '../../store/modules/base'
import * as postActions  from '../../store/modules/post'
import AskRemoveModal from '../../components/modal/askRemoveModal/AskRemoveModal'
import {withRouter} from'react-router-dom'
class AskRemoveModalContainer extends Component {
    handleCancel=()=>{
        const{BaseActions} = this.props;
        BaseActions.hideModal('remove')
    }
    handelConfirm=async()=>{
        const {history,match,BaseActions,PostActions}  = this.props
        const {id} = match.params;
        try{
            await PostActions.removePost(id);
            BaseActions.hideModal('remove');
            history.push('/')
        }
        catch(e){
            console.log(e);
        }
    }
    render() {
        const {visible} =this.props
        const {handelConfirm,handleCancel} = this

        return (
            <AskRemoveModal
                visible={visible}
                onCancel = {handleCancel}
                onConfirm = {handelConfirm}
            />
        );
    }
}

export default connect(
    (state)=>({
        visible : state.base.getIn(['modal','remove'])
    }),
    (dispatch) =>({
        BaseActions : bindActionCreators(baseActions,dispatch),
        PostActions : bindActionCreators(postActions,dispatch)
    })
)(withRouter(AskRemoveModalContainer));