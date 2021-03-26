import React from "react";
import { get } from "lodash"
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField/TextField";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { INTERVENTIONS, SUBJECTIVE, BEHAVIOR_IN_GROUP, AFFECTS } from "../packs/constants";

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
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default () => {
    const classes = useStyles();
    const [affect, setAffect] = React.useState("depressed");
    const [participation, setParticipation] = React.useState("active");
    const [intervention, setIntervention] = React.useState("");
    const [subjective, setSubjective] = React.useState("");
    const [firstName, setFirstName] = React.useState();
    const [participationOutput, setParticipationOutput] = React.useState("");
    const [affectOutput, setAffectOutput] = React.useState("");
    const [interventionOutput, setInterventionOutput] = React.useState(INTERVENTIONS["reflection"]);
    const [subjectiveOutput, setSubjectiveOutput] = React.useState(SUBJECTIVE["reflection"]);
    const [output, setOutput] = React.useState("");

    const handleParticipation = (event) => {
        setParticipation(event.currentTarget.name);
        setParticipationOutput(`${BEHAVIOR_IN_GROUP[event.currentTarget.name]}`)
        setOutput(`${BEHAVIOR_IN_GROUP[event.currentTarget.name]}`)
    }

    const handleAffect = (event) => {
        setAffect(event.currentTarget.name);
        setAffectOutput(`Mood - ${AFFECTS[event.currentTarget.name]}`)
        setOutput(`${participationOutput} ${AFFECTS[event.currentTarget.name]}`)
    };

    const handleSubjective = (event) => {
        setSubjective(event.currentTarget.name);
        setSubjectiveOutput(SUBJECTIVE[event.currentTarget.name])
        setOutput(`${participationOutput} ${affectOutput} ${SUBJECTIVE[event.currentTarget.name]}`)
    }

    const handleIntervention = (event) => {
        setIntervention(event.currentTarget.name);
        setInterventionOutput(INTERVENTIONS[event.currentTarget.name])
        setOutput(`${participationOutput} ${affectOutput} ${subjectiveOutput} ${INTERVENTIONS[event.currentTarget.name]}`)
    }

    const handleOutputChange = (event) => {
        setOutput(event.currentTarget.value)
    }

    return (
        <div key="container" className="container mt-5">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className="display-4">Psych Notes</h1>
                    <div className='col-sm-12 col-lg-6 offset-lg-3 ' key="name">
                        <Button component={Link} to={"/groups/new"} color="default">New Group</Button>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.root}>
                        { Object.keys(BEHAVIOR_IN_GROUP).map((k) => (
                            <Button onClick={handleParticipation} p={1} name={k} color="primary" variant="contained">{k}</Button>
                        ))}
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.root}>
                        { Object.keys(AFFECTS).map((k) => (
                            <Button onClick={handleAffect} p={1} name={k} color="primary" variant="contained">{k}</Button>
                        ))}
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.root}>
                    { Object.keys(SUBJECTIVE).map((k) => (
                        <Button onClick={handleSubjective} name={k} color="primary" variant="contained">{k}</Button>
                    ))}
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.root}>
                        { Object.keys(INTERVENTIONS).map((k) => (
                            <Button onClick={handleIntervention} name={k} color="primary" variant="contained">{k}</Button>
                        ))}
                    </div>
                    <TextField fullWidth
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={10}
                        variant="outlined"
                        value={output}
                        onChange={handleOutputChange}
                        placeholder={"Output"}
                    />
                </Grid>
            </Grid>

    </div>);
};