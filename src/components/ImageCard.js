import React, {useState} from "react";
import Card from 'react-bootstrap/Card';

function ImageCard(props){
    let [numOfLikes, setNumOfLikes] = useState(0);

    const incrementNumOfLikes = () => {
        setNumOfLikes(numOfLikes+1)
        props.increment();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} onClick={incrementNumOfLikes} />
                <Card.Body>
                <Card.Title>title: {props.title} </Card.Title>
                <Card.Text>
                    Number of Likes: {numOfLikes}
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ImageCard;