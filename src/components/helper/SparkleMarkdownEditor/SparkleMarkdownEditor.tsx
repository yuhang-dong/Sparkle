import React, {ForwardedRef} from 'react';
import style from './SparkleMarkdownEditor.module.scss';
import './SparkleMarkdownEditor.scss'
import {DefaultProps} from "../../../types/framework";
import CodeMirror from 'codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/markdown/markdown';
import SparkleMarkdownRender from "../SparkleMarkdownRender/SparkleMarkdownRender";
import _ from 'lodash';

export interface SparkleMarkdownEditorProps extends DefaultProps {
    change:(content:string)=>void;
}
class SparkleMarkdownEditor extends React.Component<SparkleMarkdownEditorProps, any>{
    private readonly codeMirrorRef: React.RefObject<HTMLDivElement>;
    private editor?: CodeMirror.Editor;
    constructor(props: SparkleMarkdownEditorProps) {
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
        const throttleRender = _.throttle((doit) => {
            doit();
        }, 1000);
        this.editor.on("change", (instance, changeObj) => {
            // 节流进行实时渲染
            const content = instance.getDoc().getValue();
            throttleRender(() => this.setState({content}));
            this.props.change(content);
        });
    }

}

export default SparkleMarkdownEditor;
