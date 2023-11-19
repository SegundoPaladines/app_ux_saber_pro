import { Box, Grid, Paper, Typography } from '@mui/material';
import React from "react";

type BoxProps = {
    title: string;
    score?: number | null;
    description?: string | null;
}

export const BoxComponent: React.FC<BoxProps> = ({ title, score, description }) => {
    return (
        <Box width="100%">
            <Paper elevation={5}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        height: "6rem",
                        width: "100%",
                        p: 2,
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            {title} {score ? (<b style={{ fontSize: "30px" }}> {score}/500</b>) : null}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ textAlign: 'center' }}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
