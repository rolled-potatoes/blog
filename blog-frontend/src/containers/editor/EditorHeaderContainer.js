import React, { Component } from 'react';
import EditorHeader from '../../components/editor/EditorHeader'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'
import * as editorAtions from '../../store/modules/editor'

class EditorHeaderContainer extends Component {
    componentDidMount(){
        const{EditorAtions,location} = this.props;
        EditorAtions.initialize();
        const {id} = queryString.parse(location.search);
        if(id){
            EditorAtions.get_post(id)
        }
    }   
    handleGoBack= ()=>{
        const {history} = this.props;
        history.goBack();
    }
    handleSubmit = async()  =>{
        const { title,markdown, tags, EditorAtions,history,location} = this.props;
        const post={
            title: title,
            body: markdown,
            tags: tags ===""? [] : [...new Set(tags.split(',').map(tag =>tag.trim()))]
        }
        try{
            const {id} =queryString.parse(location.search)
            if(id){
                await EditorAtions.edit_post({id, ...post})
                history.push(`/post/${id}`);
                return 
            }
            await EditorAtions.write_post(post);
            history.push(`/post/${this.props.postId}`);
        }
        catch(e){
            console.log(e);
        }

    }
    render() {
        const { handleGoBack,handleSubmit} = this;
        const {id} =queryString.parse(this.props.location.search)
        
        return (
            <EditorHeader
                onGoBack = {handleGoBack}
                onSubmit = {handleSubmit}
                idEdit = {id? true:false}
            />
        );
    }
}

export default connect(
    (state)=>({
        title : state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags : state.editor.get('tags'),
        postId: state.editor.get('postId'),
    }),
    (dispath)=>({
        EditorAtions : bindActionCreators(editorAtions,dispath)
    })
)(withRouter (EditorHeaderContainer));