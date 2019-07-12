import React, { Component } from 'react';
import {connect} from'react-redux'
import PreviewPane from '../../components/editor/PreviewPane/index'

class PreviewPaneContainer extends Component {
    render() {
        const {title,markdown} = this.props

        return (
            <PreviewPane
                title={title}
                markdown={markdown}
            >
            </PreviewPane>
        );
    }
}

export default connect(
    (state)=>({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
    })
)(PreviewPaneContainer);
