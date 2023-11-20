import React, { useRef, useState } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, TextField} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ScoreFormProps {
    onSocreChangue?: (newScore:number) => void | undefined;
}

export const ScoreForm: React.FC<ScoreFormProps> = ({ onSocreChangue }) => {

    const lecturaCriticaRef = useRef<HTMLInputElement>(null);
    const matematicasRef = useRef<HTMLInputElement>(null);
    const cSocialesRef = useRef<HTMLInputElement>(null);
    const cNaturalesRef = useRef<HTMLInputElement>(null);
    const inglesRef = useRef<HTMLInputElement>(null);

    const [year, setYear] = useState<string>('');
    const [period, setPeriod] = useState<string>('');
    const [score, setScore] = useState<number>(0);
  
    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.name === "year") {
        setYear(event.target.value);
        } else if (event.target.name === "period") {
        setPeriod(event.target.value);
        }
    };

    const handleTextFieldChange = () => {
        const lecturaCriticaValue = parseFloat(lecturaCriticaRef.current?.value || "0") || 0;
        const matematicasValue = parseFloat(matematicasRef.current?.value || "0") || 0;
        const cSocialesValue = parseFloat(cSocialesRef.current?.value || "0") || 0;
        const cNaturalesValue = parseFloat(cNaturalesRef.current?.value || "0") || 0;
        const inglesValue = parseFloat(inglesRef.current?.value || "0") || 0;

        const res = lecturaCriticaValue + matematicasValue + cNaturalesValue + cSocialesValue + inglesValue;

        setScore(res);
        
        if(onSocreChangue){onSocreChangue(res);}
    }

    const handleTextButtonClic = () => {
        console.log(score);
    }

    return (
        <Box width="100%">
            <Grid
                container
                direction="row"
                alignItems="flex-end"
                justifyContent="flex-end"
                justifyItems="flex-end"
                spacing={2}
                sx={{
                    minWidth: "100hv"
                }}
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        justifyItems="center"
                        spacing={5}
                        >
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                    <InputLabel id="year-label">Año</InputLabel>
                                    <Select
                                    labelId="year-label"
                                    id="year"
                                    name="year"
                                    value={year}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Año"
                                    >
                                    <MenuItem value="2023">
                                    </MenuItem>
                                    <MenuItem value="2023">2023</MenuItem>
                                    <MenuItem value="2022">2022</MenuItem>
                                    <MenuItem value="2021">2021</MenuItem>
                                    </Select>
                                </FormControl>
                        </Grid>

                        <Grid 
                            item 
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <FormControl sx={{ m: 1, minWidth: 108 }}>
                                <InputLabel id="period-label">Periodo</InputLabel>
                                <Select
                                    labelId="period-label"
                                    id="period"
                                    name="period"
                                    value={period}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Periodo"
                                    >
                                    <MenuItem value="A">
                                    </MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mt={2}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        justifyItems="center"
                        spacing={2}
                        >
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <TextField
                                id="_critica"
                                label="Lectura Critica"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => handleTextFieldChange()}
                                inputRef={lecturaCriticaRef}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <TextField
                                id="math"
                                label="Matemáticas"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => handleTextFieldChange()}
                                inputRef={matematicasRef}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <TextField
                                id="c_sociales"
                                label="C. Sociales y Ciudadanas"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => handleTextFieldChange()}
                                inputRef={cSocialesRef}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <TextField
                                id="c_naturales"
                                label="Ciencias Naturales"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => handleTextFieldChange()}
                                inputRef={cNaturalesRef}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12} sm={2} md={2} lg={2} xl={2}
                        >
                            <TextField
                                id="ingles"
                                label="Inglés"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => handleTextFieldChange()}
                                inputRef={inglesRef}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid 
                    item 
                    mt={2}
                    xs={12} sm={2} md={2} lg={2} xl={2}
                >
                    <Button
                        className="btn-nav"
                        variant="outlined"
                        onClick={(e) => handleTextButtonClic()}
                    >Registrar</Button>
                </Grid>
            </Grid>
        </Box>
    );
};