import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header, Card, Icon, Image, Button, Divider } from "semantic-ui-react";
import "../styles/Home.css";


class Home extends React.Component {
  state = { heros: [] }; 

  componentDidMount() {
    axios.get('/api/heros')
      .then(res => this.setState({ heros: res.data }))
  }

  sample = () => {
    const { heros } = this.state;

    if (heros.length) {
      const index = Math.floor(Math.random() * heros.length);
      return heros[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { heros } = this.state;
    this.setState({ heros: heros.filter( h => h.id !== id)})
  }

  upVote = (id) => {
    const { heros } = this.state;
    axios.put(`/api/heros/${id}`)
      .then( () => this.setState({ heros: heros.filter( h => h.id !== id)}))
  }

  render() {
    const hero = this.sample();
    if (hero) {
      return (
        <div>
          <br />
          <Header as='h1' textAlign='center'>Find Your Hero</Header>
          <br />
          
          <div className="card-placement">
          <Card key={hero.id}>
            <Image src={hero.avatar} />
            <Card.Content>
              <Card.Header textAlign="center">
                {hero.name}
              </Card.Header>
              <Card.Description textAlign="center">
                {hero.power}
              </Card.Description>
              <Divider />
              <Card.Content extra textAlign="center">
                <Button color="red" icon basic onClick={() => this.downVote(hero.id)}>
                  <Icon name="thumbs down" />
                </Button>
                <Button color="green" icon basic onClick={() => this.upVote(hero.id)}>
                  <Icon name="thumbs up" />
                </Button>
              </Card.Content>
            </Card.Content>
          </Card>
          </div>
          
          <div className="button-place">

          <Link to="/my_heros">
            <Button color="yellow">
              My Heroes
            </Button>
          </Link>
          </div>
        </div>
      );
    } else {
      return <Header textAlign='center'>No More Heroes</Header>
    }
  }
}

export default Home;