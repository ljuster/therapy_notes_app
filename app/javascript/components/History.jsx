import React from "react";
import { get } from "lodash"
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";

const interventions = {
    reflection: "Therapist asked open-ended questions to facilitate self-reflection.",
    positive: "Therapist provided positive regard, structure, and support.",
    containment: "Therapist provided containment and modeled appropriate boundaries.",
    expression: "Therapist encouraged creative expression and positive, supportive social interactions.",
    selfExpression: "Therapist encouraged creative self-expression and spontaneity.",
    psychoeducation: "Therapist provide psychoeducation on the DBT skill of",
    identifyingStressors: "Therapist supported client in identifying current stressors.",
    reframing: "Therapist supported client in reframing thoughts.",
    identifyingStrengths:"Therapist supported client in identifying personal strengths."
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    submitButton: {
        marginLeft: theme.spacing(1),
        color: "#1D4B77"
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

export default () => {
    const classes = useStyles();
    const [affect, setAffect] = React.useState("depressed");
    const [participation, setParticipation] = React.useState("active");
    const [intervention, setIntervention] = React.useState(get(interventions, "reflection"));
    const [firstName, setFirstName] = React.useState();
    const [participationOutput, setParticipationOutput] = React.useState("");
    const [affectOutput, setAffectOutput] = React.useState("");
    const [interventionOutput, setInterventionOutput] = React.useState(get(interventions, "reflection"));
    const [output, setOutput] = React.useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    };

    const handleAffect = (event) => {
        setAffect(event.currentTarget.name);
        setAffectOutput(`${firstName} presented with a ${affect} mood.`)
        setOutput(participationOutput + `${firstName} presented with a ${affect} mood.`)
    };

    const handleParticipation = (event) => {
        setParticipation(event.currentTarget.name);
        setParticipationOutput(`Client ${event.currentTarget.name} in session. `)
        setOutput(`Client ${event.currentTarget.name} in session. `)
    }

    const handleIntervention = (event) => {
        setIntervention(event.currentTarget.name);
        setInterventionOutput(get(interventions, event.currentTarget.name))
        setOutput(`${participationOutput} ${affectOutput} ${get(interventions, event.currentTarget.name)}`)
    }

    const handleOutputChange = (event) => {
        setOutput(event.currentTarget.value)
    }

    return (
        <div key="container" className="container mt-5">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h1 className="display-4">Psych Notes</h1>
                    <div className='col-sm-12 col-lg-6 offset-lg-3 ' key="name">
                        <TextField
                            key="first_name"
                            name="firstName"
                            onChange={handleFirstName}
                            value={firstName}
                            label="First Name"
                            placeholder={"Name"}
                            variant="outlined"
                        />
                    </div>
                    <Divider className={classes.divider} />

                    <Button onClick={handleParticipation} name="participated actively" variant="contained" color="primary">Active</Button>
                    <Button onClick={handleParticipation} name="participated as a witness" variant="contained" color="primary">Witness</Button>
                    <Button onClick={handleParticipation} name="was lethargic" variant="contained" color="primary" >Lethargic</Button>
                    <Divider className={classes.divider} />

                    <Button onClick={handleAffect} name="dysphoric" variant="contained">Dysphoric</Button>
                    <Button onClick={handleAffect} name="depressed" variant="contained">Depressed</Button>
                    <Button onClick={handleAffect} variant="contained" color="primary" name="distant">Distant</Button>
                    <Button onClick={handleAffect} variant="contained" name="anxious">Anxious</Button>
                    <Divider className={classes.divider} />

                    <Button onClick={handleIntervention} name="reflection" color="primary" variant="contained">Reflection</Button>
                    <Button onClick={handleIntervention} name="positive" color="secondary" variant="contained">Positive</Button>
                    <Button onClick={handleIntervention} name="containment" color="primary" variant="contained">Containment</Button>
                    <Button onClick={handleIntervention} name="expression"  color="secondary" variant="contained">Creative Expression</Button>
                    <Button onClick={handleIntervention} name="selfExpression"  color="primary" variant="contained">Self-Expression</Button>
                    <Button onClick={handleIntervention} name="psychoeducation"  color="secondary" variant="contained">Psychoeducation</Button>
                    <Button onClick={handleIntervention} name="identifyingStressors"  color="primary" variant="contained">Identifying Stressors</Button>
                    <Button onClick={handleIntervention} name="identifyingStrengths"  color="secondary" variant="contained">Identifying Strengths</Button>
                    <Button onClick={handleIntervention} name="reframing"  color="primary" variant="contained">reframing</Button>
                   
                    <Divider className={classes.divider} />
                    <div className='col-sm-12 col-lg-6 offset-lg-3 ' key="name">
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={10}
                            variant="outlined"
                            value={output}
                            onChange={handleOutputChange}
                            placeholder={"Output"}
                        />
                    </div>
                </Grid>
            </Grid>
    </div>);
};