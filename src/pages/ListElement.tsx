import {Grid, Typography} from "@mui/material";
import {loremIpsum} from "lorem-ipsum";

export function ListElement(props: { id: string }) {
    return <Grid container padding={2}>
        <Grid item>
            <Typography>Id: {props.id}</Typography>
        </Grid>
        <Grid item>
            <Typography>
                {loremIpsum({count: 10})}
            </Typography>
        </Grid>
    </Grid>;
}