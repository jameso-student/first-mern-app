import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from '../api';
import styled from "styled-components";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group p-5',
})``

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

export default function MoviesUpdate() {

    const params = useParams();
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [time, setTime] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            await api.getMovieById(params.id).then(movie => {
                setName(movie.data.data.name);
                setRating(movie.data.data.rating);
                setTime(movie.data.data.time.join(' / '));
                setLoading(false);
            })
        }
        fetchMovie()
    }, [params.id])

    const handleChangeInputName = async event => {
        setName(event.target.value);
    }

    const handleChangeInputRating = async event => {
        setRating(event.target.validity.valid ? event.target.value : rating);
    }

    const handleChangeInputTime = async event => {
        setTime(event.target.value);
    }

    const handleMovieUpdate = async () => {
        const timeArray = time.split(' / ');
        const payload = {
            name,
            rating,
            time: timeArray,
        };

        await api.updateMovieById(params.id, payload).then(res => {
            window.alert('Movie updated successfully');
            window.location.reload();
        });
    }

    return (
        <Wrapper>
            {
                isLoading ? 'Loading...' :
                <>
                    <Title>Update Movie</Title>
                    <Label>Name: </Label>
                    <InputText
                        type="text"
                        value={name}
                        onChange={handleChangeInputName}
                    />
        
                    <Label>Rating: </Label>
                    <InputText
                        type="number"
                        step="0.1"
                        lang="en-US"
                        min="0"
                        max="10"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={rating}
                        onChange={handleChangeInputRating}
                    />
        
                    <Label>Time: </Label>
                    <InputText
                        type="text"
                        value={time}
                        onChange={handleChangeInputTime}
                    />
        
                    <Button onClick={handleMovieUpdate}>Update Movie</Button>
                    <CancelButton href={'/movies/list'}>Cancel</CancelButton>
                </>
            }
        </Wrapper>
    );
}