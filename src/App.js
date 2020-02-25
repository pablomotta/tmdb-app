import React from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ActorCard from './components/ActorCard';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

function App() {
    return (
        <Container>
            <Col className='mt-5 text-center' md={{ span: 6, offset: 3 }}>
                <Header></Header>
                <SearchForm></SearchForm>
                <ActorCard></ActorCard>
                <MovieList></MovieList>
            </Col>
        </Container>
    );
}

export default App;
