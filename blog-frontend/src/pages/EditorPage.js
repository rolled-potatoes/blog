import React from 'react'
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeaderContainer from '../containers/editor/EditorHeaderContainer';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer'
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeaderContainer/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </div>
    )
}

export default EditorPage;