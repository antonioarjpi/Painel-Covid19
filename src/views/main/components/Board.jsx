import React, { memo } from "react"
import { Skeleton, Grid } from "../../../components"
import Card from './Card'


function Board({ data }) { 
    const { cases, todayCases, active, deaths, todayDeaths, recovered, critical } = data 

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="CASOS" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(active)} label="ATIVO" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="HOJE" color="#000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(deaths)} label="ÓBITOS" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(todayDeaths)} label="HOJE" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(recovered)} label="RECUPERADOS" color="#008000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(critical)} label="CRÍTICO" color="#FF7F00" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)