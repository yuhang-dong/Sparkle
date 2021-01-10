import React, {ForwardedRef} from 'react';
import style from './SparkleMarkdownEditor.module.scss';
import './SparkleMarkdownEditor.scss'
import {DefaultProps} from "../../../types/framework";
import CodeMirror from 'codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/markdown/markdown';
import SparkleMarkdownRender from "../SparkleMarkdownRender/SparkleMarkdownRender";
import _ from 'lodash';

class SparkleMarkdownEditor extends React.Component<any, any>{
    private readonly codeMirrorRef: React.RefObject<HTMLDivElement>;
    private editor?: CodeMirror.Editor;
    constructor(props: DefaultProps) {
        super(props);
        this.state = {
            content: ''
        };
        this.codeMirrorRef = React.createRef();
    }

    render(){

        return <div className={style.editor}>
            <div className={style.operator}>

            </div>
            <div className={style.inputer}>
                <div ref={this.codeMirrorRef} className={style.left}/>
                <div className={style.right}>
                    <SparkleMarkdownRender content={this.state.content}/>
                </div>
            </div>

        </div>
    }

    componentDidMount() {
        this.editor = CodeMirror(this.codeMirrorRef.current as HTMLElement, {
            mode: "markdown",
            lineNumbers: true
        });

        this.editor.on("change", (instance, changeObj) => {
            // 节流进行实时渲染

            _.throttle(() => {
                this.setState({content: instance.getDoc().getValue()})
            }, 1000)();
        });
    }

}

export default SparkleMarkdownEditor;
