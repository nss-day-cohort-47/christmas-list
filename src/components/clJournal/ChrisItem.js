import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link as RRLink } from "react-router-dom";

export const ChrisItem = ({ item, bgcolor, iGotIt, deleteThisItem }) => {

	//controls the clickable-ness of the checkbox
	const [isLoading, setIsLoading] = useState(true);

	const handleGotIt = (event) => {
		setIsLoading(true);
		//make a copy of original data
		const updatedItem = { ...item }
		//set value to opposite
		updatedItem.gotIt = updatedItem.gotIt ? false : true;
		//invoke function on parent
		//why is it on the parent? So that when it finishes the update,
		//we can invoke getAll and update the ChrisList state
		iGotIt(updatedItem)
	}

	const handleDelete = () => {
		setIsLoading(true);
		deleteThisItem(item.id);
	}

	useEffect(() => {
		setIsLoading(false)
	}, [item])

	//date info: https://www.tutorialspoint.com/es6/es6_date.htm
	return (

		<Card bg={bgcolor} className="mb-2 text-white">
			<Card.Body >
				<Card.Title>{item.title}</Card.Title>
				<Card.Subtitle>Date added: <strong>{item.timestamp && new Date(item.timestamp).toLocaleDateString()}</strong></Card.Subtitle>
				<Card.Text>
					Description: <strong>{item.details}</strong>
				</Card.Text>
			</Card.Body>
			<Card.Body className="text-right" >
				<div>
					<input id={`cb-${item.id}`} type='checkbox' className="mycheck" onChange={handleGotIt} checked={item.gotIt} disabled={isLoading} />
					<label htmlFor={`cb-${item.id}`}>I got it!</label>
				</div>
				<div><RRLink className="btn ouline-lite btn-sm" style={{ width: "7.25em" }} disabled={isLoading} to={`/chrisItem/edit/${item.id}`}>Edit</RRLink></div>
				<div><Button onClick={handleDelete} variant="outline-lite" size="sm" style={{ width: "7.25em" }} disabled={isLoading}>Remove</Button></div>
			</Card.Body>
		</Card>
	)
}