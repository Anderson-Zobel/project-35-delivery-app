import React, { useState } from 'react';
import { Card, CardMedia, CardHeader, CardContent, TypoGraphy, ButtonGroup, TextField } from '@mui/material';

export default function CardDrinks () {
	return (
		<Card variant="outlined">  
			<CardHeader>
				<TypoGraphy>
				{ nome do produto }
				</TypoGraphy>
			<CardMedia>
				{ imagem do produto } 
			</CardMedia>
			<CardContent>
				<TypoGraphy>
					{ preço }
				</TypoGraphy>
				<ButtonGroup>
					<Button>+</Button>
					<TextField/>
					<Button>-</Button>				
				</ButtonGroup>
			</CardContent>
			</CardHeader>
		</Card>
	)
};