import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";




function Home() {
    // console.log(bots)
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);

    //fetch data from endpoints
    useEffect(() => {
      fetch('http://localhost:3000/bots')
        .then(response => response.json())
        .then(data => setBots(data));
  
      fetch('http://localhost:3000/army')
        .then(response => response.json())
        .then(data => setArmy(data));
    }, []);

    //Card to hold the whole bot army
    const cards= bots.map((bot)=> {
      return (
          <Col key={bot.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card onClick={handleClickDelete}>
              <Card.Img src={bot.avatar_url} />
              <Card.Body>
                <Card.Text>
                  {bot.catchphrase}
                </Card.Text>
                <Card.Text>
                  <div className="icon-value">
                    {bot.health > 0 ? <FaHeart /> : <FaHeartBroken />} {bot.health}
                  </div>
                  <div className="icon-value">
                    {bot.damage > 0 ? <FaHeartBroken />: <FaHeart /> } {bot.damage}
                  </div>
                  <div className="icon-value">
                    {bot.armor > 0 ? <FaPersonMilitaryRifle /> : <FaHeartBroken />} {bot.armor}
                  </div>
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
      )
  }) 

  function handleClickDelete(bot){
    const updatedBots = bots.filter((b) => b.id !== bot.id);

    //Update the state

    fetch(`http://localhost:3000/bots/${bot.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
    })
    .then((res)=> res.json())
    .then((data)=>console.log(data))
    .catch(error=>error)
  }

  return (
    <div className='mt-4'>
        <h3 >Bot Army</h3>
        <Row>
          {cards}
        </Row>
          
        
    </div>
  )
}

export default Home