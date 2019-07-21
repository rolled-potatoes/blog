import React, { Component } from 'react';
import styles from './style.scss'
import classNames from 'classnames'
import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

const cx = classNames.bind(styles)

class MarkdownRender extends Component {
    state={
        html : '',
    }
    renderMarkdown= ()=>{
        const {markdown} = this.props
        if(!markdown){
            this.setState({
                html :'',
            })
            return
        }
        this.setState({
            html : marked(markdown,{
                breaks : true,
                sanitize: true
            })
        })
    }
    constructor(props){
        super(props)
        const {markdown} = this.props;
        this.state ={
            html: markdown ? marked(props.markdown,{breaks : true, sanitize:true}):''
        }
    }
    componentDidMount(){
        Prism.highlightAll();
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.markdown !== this.props.markdown){
            this.renderMarkdown()
        }

        if(prevState.html !== this.state.html){
            Prism.highlightAll();
        }
    }
    render() {
        const {html} =this.state;
        const markup={
            __html : html
        }
        return (
            <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
        );
    }
}

export default MarkdownRender;
