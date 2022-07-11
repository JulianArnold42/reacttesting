import {Box} from "@mui/material";
import {ListElement} from "./ListElement";
import React, {MutableRefObject, useEffect} from "react";

export function List(props: { items: string[], listItemRefs: MutableRefObject<(HTMLDivElement | undefined)[]> }) {
    useEffect(() => {
        props.listItemRefs.current = props.listItemRefs.current.slice(0, props.items.length);
    }, [props.items]);

    return <>
        {props.items.map((e, index) =>
            <Box id={index.toString()} key={index} ref={e => props.listItemRefs.current[index] = e as HTMLDivElement}>
                <ListElement id={e}/>
            </Box>
        )}
    </>;
}