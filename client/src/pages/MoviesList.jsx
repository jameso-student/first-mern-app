import { React, useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'p-5',
})``

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        console.clear()
        const fetchMovies = async () => {
            setLoading(true);
            await api.getAllMovies().then(movies => {
                setMovies(movies.data.data);
                setLoading(false);
            })
        }
        fetchMovies();
    }, [])

    let showTable = true
    if (!movies.length) {
        showTable = false
    }

    return (
        <Wrapper>
            {isLoading ? 'waiting' : movies.map(movie => (
            <p>{movie.name}</p>
        ))}
        </Wrapper>
    );
}