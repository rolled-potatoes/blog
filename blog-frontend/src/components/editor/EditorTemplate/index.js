
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

const cx = classNames.bind(styles)

class EditorTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPercentage : 0.5,
    };
  }
  handleMouseMove=(e)=>{
    this.setState({
      leftPercentage : e.clientX / window.innerWidth
    })
  }
  handleMouseUp=(e)=>{
    document.body.removeEventListener('mousemove',this.handleMouseMove)
    window.removeEventListener('mouseup',this.handleMouseUp)

  }
  handleSeparatorMouseDown=(e)=>{
    document.body.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup',this.handleMouseUp)

  }
  render() {
    const { header, editor, preview } = this.props;
    const {handleSeparatorMouseDown} =this
    const {leftPercentage} = this.state;
    const leftstyle ={
      flex : leftPercentage
    }
    const rightStyle ={
      flex : 1- leftPercentage
    }
    const separatorStyle={
      left :`${leftPercentage *100}%`
    }

    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor') }style ={leftstyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div className={cx('separator')} style={separatorStyle} onMouseDown={handleSeparatorMouseDown}>

          </div>
        </div>
      </div>
    );
  }
}

export default EditorTemplate
