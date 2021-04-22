import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { getAll, updateItem, deleteItem } from '../../modules/APIManager';
import { ChrisItem } from "./ChrisItem";
import { getUser } from "../../modules/APIManager";

export const ChrisList = () => {

	const [journalArray, setJournalArray] = useState([])

	const user = getUser();

	const iGotIt = (item) => {
		updateItem(item)
			.then(() => {
				getAllJournalEntries();
			});

	}

	const deleteThisItem = (fbid) => {
		deleteItem(fbid)
			.then(status => {
				if (status === 200){
					getAllJournalEntries();
				}else {
					console.log("oops, error here")
				}
			})
	}

	const getAllJournalEntries = () => {
		getAll()
			.then(data => {
				//and sort with most recent date first
				data.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
				setJournalArray(data)
			})
	}

	useEffect(() => {
		getAllJournalEntries()
	}, [])

	//cycle through the colors for each card
	const colorArray = ['Secondary', 'Success', 'Danger', 'Warning', 'Info']

	let colorCount = 0;

	const cyleBackgroundColor = () => {
		const variant = colorArray[colorCount];
		colorCount < colorArray.length - 1 ? colorCount++ : colorCount = 0;
		return variant.toLowerCase()
	}


	return (
		<>
		{console.log("journalArray", journalArray)}
			<Container fluid="xl">
				<h5 className="username">{user.name}'s List</h5>
				
				<Col className="m-2">
					{
						journalArray.map(item => {
							const mybgcolor = cyleBackgroundColor();

							return (
								<ChrisItem item={item} 
											bgcolor={mybgcolor} 
											key={item.id} 
											iGotIt={iGotIt} 
											deleteThisItem={deleteThisItem} />
							)
						})
					}

				</Col>
			</Container>
		</>
	)
}