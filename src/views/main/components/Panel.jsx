 import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import WorldFlag from '../../../assets/images/world.png'
 import { Card, Button, MenuItem, Typography, Select } from '../../../components'
 import { CardPanelContentStyled, ItemStyled } from './style'

function Panel({ updateAt, onChange, data, country }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data
    const [countries, setCountries] = useState([])

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.name} >
            <ItemStyled>
                <div>{country.name}</div>
                <img src={country.flag} alt={`País-${country.name}`} width='30px' />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country}, Total de Casos: ${cases}, Óbitos de Hoje: ${todayDeaths}, 
    Casos de Hoje: ${todayCases}, Total de Mortes: ${deaths}, Recuperados: ${recovered}.`

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid-19 - ${country}`,
            text: textCovid19,
        })
    }
    
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    //trocando a bandeira do afeganistão na mão, pois da API não estava correta
    countries.splice(0, 1, {name: "Afghanistan", iso2: 'AF', iso3: "AFG", flag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7olNz7Xz9FKr9bAWgdCvv0Bm069r5JQzdOAstLtfr7WYeRczZ7jzMdHoVa_LCvmkQoFo&usqp=CAU"})
    
    //Colocando o mundo nas opções
    countries.splice(211, 1, {name: "World", flag: WorldFlag, iso2: 'WR', iso3: "WDL"})

    //carrega todos os países
     useEffect(() =>{
         axios.get(`https:countriesnow.space/api/v0.1/countries/flag/images`)
     .then(response => {
         setCountries(response.data.data)
     })
     },[])   

     

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">Coronavírus (COVID-19) </Typography>
                    <Typography variant="h6" component="span" color="primary">Painel Geral </Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {countries.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {renderShareButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)