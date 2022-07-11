import React, {MutableRefObject, useRef} from 'react';
import {GlobalStyles, Grid, useTheme} from '@mui/material';
import {Buttons} from "./pages/Buttons";
import {List} from "./pages/List";

function printMe(listItemRefs: MutableRefObject<(HTMLDivElement | undefined)[]>): void {
    console.log(listItemRefs);
}

export function App() {
    const theme = useTheme();

    const listItemRefs = useRef<HTMLDivElement[]>([]);

    const items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return (
        <>
            <GlobalStyles styles={() => ({
                "& #root": {height: "100%", margin: 0},
                html: {height: "100%", margin: 0},
                body: {height: "100%", margin: 0}
            })}/>
            <Grid container bgcolor={theme.palette.divider} height={"100%"}>
                <Grid item xs={8}>
                    <Buttons items={items} listItemRefs={listItemRefs}/>
                </Grid>
                <Grid item xs={4} height={"100%"} overflow={"auto"}>
                    <List items={items} listItemRefs={listItemRefs}/>
                </Grid>
            </Grid>
        </>
    );
}
