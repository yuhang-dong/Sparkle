import {DefaultProps} from "../../../types/framework";
import {Breadcrumb} from 'antd';
import React from "react";

export interface Item {
    str: string,
    href?: string,
}
export interface SparkleBreadcrumbProps extends DefaultProps {
    items: Array<string | Item>,
    separator?: string,
}

function SparkleBreadcrumb(props: SparkleBreadcrumbProps) {

    const sep = props.separator;
    const items = props.items;
    const generate = items.map((item, index) => {
        if(typeof item === 'string') {
            return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
        } else {
            return <Breadcrumb.Item href={item.href} key={index}>{item.str}</Breadcrumb.Item>
        }
    });

    return <Breadcrumb separator={sep ? sep : ">"}>
        {generate}
    </Breadcrumb>
}

export default SparkleBreadcrumb;
