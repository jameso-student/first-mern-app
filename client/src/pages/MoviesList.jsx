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

    return (
        <Wrapper>
            {isLoading ? 'Loading...' : 
                <table className='table'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Time</th>
                    </tr>
                    {movies.map(movie => (
                    <tr>
                        <td>{movie._id}</td>
                        <td>{movie.name}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.time.join(' / ')}</td>
                    </tr>
                    ))}
                </table>
            }
        </Wrapper>
    );
}