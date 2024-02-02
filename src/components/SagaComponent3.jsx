import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class ThirdSaga extends Component{
    state = {
        film3: [],
    }

    fetchJurassicPark = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b84970d1&s=Jurassic Park')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayOfJurassic) => {
            console.log('Film della Saga', arrayOfJurassic.Search)
            this.setState({
              film3: arrayOfJurassic.Search
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      
      componentDidMount() {

        this.fetchJurassicPark()
      }

      render() {
        return (
            <Container fluid className='pb-2'>
          <Row className="gy-3">
                    <h2 className='text-white'>Jurassic Park</h2>
                    {
                        this.state.film3.slice(0, 6).map((jpFilm)=> {
                            console.log("Film della Saga3:", jpFilm)
                            return (
                                <Col xs={6} md={3} lg={2} key={jpFilm.imdbID}>
                                    <div>
                                        <img src={jpFilm.Poster} alt="poster movie" width={300} height={450}/>
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

export default ThirdSaga
