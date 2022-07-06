import { React, useEffect, useState } from 'react'
import api from '../api'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'p-5',
})``

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

function UpdateMovie(props) {
    const updateUser = event => {
        event.preventDefault();
        window.location.href = `/movies/update/${props.id}`;
    }

    return <Update onClick={updateUser}>Update</Update>
}

function DeleteMovie(props) {
    const deleteMovie = event => {
        event.preventDefault();

        if (window.confirm(
            `Do you want to delete the movie ${props.name} permanently?`
            )
        ) {
            api.deleteMovieById(props.id);
            window.location.reload();
        }
    }

    return <Delete onClick={deleteMovie}>Delete</Delete>
}

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
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
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Time</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie._id}</td>
                            <td>{movie.name}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.time.join(' / ')}</td>
                            <td>{<UpdateMovie id={movie._id} name={movie.name} />}</td>
                            <td>{<DeleteMovie id={movie._id} name={movie.name} />}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            }
        </Wrapper>
    );
}