import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class SecondSaga extends Component{
    state = {
        film2: [],
    }

    fetchHarryP = () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b84970d1&s=Harry Potter')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayofHP) => {
            console.log('Film della Saga', arrayofHP.Search)
            this.setState({
              film2: arrayofHP.Search
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      
      componentDidMount() {

        this.fetchHarryP()
      }

      render() {
        return (
            <Container fluid>
          <Row className="gy-3 mt-2 mb-2">
                    <h2 className='text-white'>Harry Potter</h2>
                    {
                        this.state.film2.slice(0, 6).map((hpfilm)=> {
                            console.log("Film della Saga2:", hpfilm)
                            return (
                                <Col xs={6} md={3} lg={2} key={hpfilm.imdbID}>
                                    <div>
                                        <img src={hpfilm.Poster} alt="poster movie" width={300} height={450}/>
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

export default SecondSaga
