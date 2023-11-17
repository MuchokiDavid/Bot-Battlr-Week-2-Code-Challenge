import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({bots}) {
    // console.log(bots)
    const cards= bots.map((bot)=> {
      return (
          <Col key={bot.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <Card.Img src={bot.avatar_url} />
              <Card.Body>
                <Card.Text>
                  {bot.catchphrase}
                </Card.Text>
                <Card.Text>
                  h: {bot.health} d: {bot.damage} a: {bot.armor}
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
      )
  })  

  return (
    <div>
        <h3>Bot Army</h3>
        <Row>
          {cards}
        </Row>
          
        
    </div>
  )
}

export default Home