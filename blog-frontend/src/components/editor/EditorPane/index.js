
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames/bind'
import CodeMirro from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/shell/shell'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

const cx = classNames.bind(styles)

class EditorPane extends React.Component {
  editor = null;
  cursor = null
  codeMirror = null;
  initializeEditor = () => {
    this.codeMirror = CodeMirro(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true, // 라인길면 다음줄
    })
    this.codeMirror.on('change', this.handleChangeMarkdown)
  }
  handleChange = (e) => {
    const { onChangeInput } = this.props
    const { value, name } = e.target;
    onChangeInput({ name, value })
  }
  handleChangeMarkdown = (doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this
      if (!codeMirror) return
      codeMirror.setValue(this.props.markdown)
      if(!cursor) return 
      codeMirror.setCursor(cursor)
    }
  }
  componentDidMount() {
    this.initializeEditor();
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { handleChange } = this
    const { tags, title } = this.props
    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder='제목을 입력하세요'
          name='title'
          value={title}
          onChange={handleChange} 
        />
        <div className={cx('code-editor')} ref={ref => this.editor = ref}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>
            태그
          </div>
          <input 
          name='tags' 
          value ={tags}
          onChange={handleChange}
          placeholder='태그를 입력하세요 ("#"로구분)' />
        </div>
      </div>
    );
  }
}

export default EditorPane
