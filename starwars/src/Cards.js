import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const Cards = props => {
    return (
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="image" />
            <CardBody>
                <CardTitle>{props.person.name}</CardTitle>
                <CardText>Height: {props.person.height}</CardText>
                <CardText>Mass: {props.person.mass}</CardText>
                <CardText>Hair Color: {props.person.hair_color}</CardText>
                <CardText>Skin Color: {props.person.skin_color}</CardText>
                <CardText>Eye Color: {props.person.eye_color}</CardText>
                <CardText>Birth Year: {props.person.birth_year}</CardText>
                <CardText>Gender: {props.person.gender}</CardText>
                <Button href={props.person.url} target='_blank' color='primary'>More</Button>
            </CardBody>
        </Card>
    )
}

export default Cards;