import React from 'react';
import axios from 'axios';
import { Card, Image, Divider, Container, Header } from 'semantic-ui-react';
import "../styles/MyHeros.css";


class MyHeros extends React.Component {
  state = { heros: [] }

  componentDidMount() {
    axios.get('/api/my_heros')
      .then( res => this.setState({ heros: res.data}) )
    }

  render() {
    const { heros } = this.state;

    return (
      
      <Container className="card-group">

        <Header as="h1" textAlign="center"> My Heroes </Header>

        <Card.Group itemsPerRow={4}>
          { heros.map( hero => 
            <Card key={hero.id}>
              <Image src={hero.avatar} />
              <Card.Content>
                <Divider />
                <Card.Header textAlign="center">
                  { hero.name }
                </Card.Header>
                <Card.Description textAlign="center">
                  {hero.power}
                </Card.Description>
              </Card.Content>
            </Card>
            )}
        </Card.Group>
        </Container>
            
    )
  }
}


export default MyHeros;