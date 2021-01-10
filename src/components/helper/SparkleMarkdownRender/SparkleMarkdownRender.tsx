import React from 'react';
import {DefaultProps} from "../../../types/framework";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
import './SparkleMarkdownRender.scss'

interface MarkdownRenderProps extends DefaultProps {
    content: string
}

function SparkleMarkdownRender(props: MarkdownRenderProps) {
    const md = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {}
            }

            return ''; // 使用额外的默认转义
        }
    });
    return <div dangerouslySetInnerHTML={{__html: md.render(props.content)}}/>
}

export default SparkleMarkdownRender;
