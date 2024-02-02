import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class SingleSaga extends Component{
    state = {
        films: [],
    }


    fetchFilms = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e57367c2&s=Star Wars')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayOfFilms) => {
            console.log('Film della Saga', arrayOfFilms.Search)
            this.setState({
              films: arrayOfFilms.Search
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }


      componentDidMount() {

        this.fetchFilms()
      }

      render() {
        return (
            <Container fluid className='mt-3'>
                <Row className="gy-3">
                <h2 className='text-white'>Star Wars</h2>
                    {
                        this.state.films.slice(0, 6).map((film)=> {
                            console.log("Film:", film)
                            return (
                                <Col xs={6} md={3} lg={2} key={film.imdbID}>
                                    <div>
                                        <img src={film.Poster} alt="poster movie" width={300} height={450}/>
                                    </div>

                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        )
    }
}

export default SingleSaga






