import React, {ForwardedRef} from 'react';
import style from './SparkleMarkdownEditor.module.scss';
import './SparkleMarkdownEditor.scss'
import {DefaultProps} from "../../../types/framework";
import CodeMirror from 'codemirror';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/markdown/markdown';
import SparkleMarkdownRender from "../SparkleMarkdownRender/SparkleMarkdownRender";
import _ from 'lodash';
import {Switch, Tooltip} from "antd";
import {EditOutlined, EyeOutlined, SplitCellsOutlined} from "@ant-design/icons";

export interface SparkleMarkdownEditorProps extends DefaultProps {
    change:(content:string)=>void;
}
class SparkleMarkdownEditor extends React.Component<SparkleMarkdownEditorProps, any>{
    private readonly codeMirrorRef: React.RefObject<HTMLDivElement>;
    private editor?: CodeMirror.Editor;
    constructor(props: SparkleMarkdownEditorProps) {
        super(props);
        this.state = {
            content: '',
            mode: 'realtime'
        };
        this.codeMirrorRef = React.createRef();
    }

    changeLineWrapper(checked: boolean) {
        this.editor?.setOption('lineWrapping', checked);
    }

    changeMode(mode: 'realtime' | 'preview' | 'edit') {
        this.setState({mode: mode});
    }

    render(){

        return <div className={style.editor}>
            <div className={style.operator}>
                <div className={style.mode}>
                    <Tooltip placement="bottom" title="预览">
                        <EyeOutlined onClick={() => {this.changeMode('preview')}} className={this.state.mode === 'preview' ? style.activate : ''}/>
                    </Tooltip>

                    <Tooltip placement="bottom" title="编辑">
                    <EditOutlined onClick={() => {this.changeMode('edit')}} className={this.state.mode === 'edit' ? style.activate : ''}/>
                    </Tooltip>
                    <Tooltip placement="bottom" title="实时">
                    <SplitCellsOutlined onClick={() => {this.changeMode('realtime')}} className={this.state.mode === 'realtime' ? style.activate : ''}/>
                    </Tooltip>
                </div>
                <span>自动换行 <Switch defaultChecked onChange={this.changeLineWrapper.bind(this)}></Switch></span>
            </div>
            <div className={style.inputer}>
                <div ref={this.codeMirrorRef} className={`${style.left} ${this.state.mode==='preview' ? style.none : ''}`} />
                <div className={`${style.right} ${this.state.mode==='edit' ? style.none : ''}`}>
                    <SparkleMarkdownRender content={this.state.content}/>
                </div>
            </div>

        </div>
    }

    componentDidMount() {
        this.editor = CodeMirror(this.codeMirrorRef.current as HTMLElement, {
            mode: "markdown",
            lineNumbers: true,
            lineWrapping: true,
            extraKeys: {
                Tab: function(cm) {
                    cm.replaceSelection(Array(5).join(" "));
                }
            }
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
