import {Box, Button, Grid} from "@mui/material";
import {MutableRefObject} from "react";

function selectElement(elementId: string, listItemRefs: MutableRefObject<HTMLDivElement[]>): void {
    listItemRefs.current.map(e => {
        if (e.id === "3" && elementId === "3") {
            e.scrollIntoView();
            // e.remove();
            // e.style.background = "blue";
        }
    });
}

export function Buttons(props: { items: string[], listItemRefs: MutableRefObject<HTMLDivElement[]> }) {
    return <Grid container direction={"column"} padding={2}>
        {props.items.map((e, index) =>
            <Box key={index}>
                <Grid item>
                    <Button onClick={() => selectElement(e, props.listItemRefs)}>
                        Select {e}
                    </Button>
                </Grid>
            </Box>
        )}
    </Grid>;
}