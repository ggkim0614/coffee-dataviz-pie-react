import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Typography, Switch } from '@mui/material'; // Import the Switch component
import Slider from '@mui/material/Slider';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { ChartsTooltip } from '@mui/x-charts';

const nameAndScoreData = [
	{
		label: 'GW03 Princesa Carmen Geisha',
		rank: 1,
		value: 98,
		color: '#f4ece2',
	},
	{
		label: 'Wilton Benitez Pink Bourbon Colombia',
		rank: 2,
		value: 98,
		color: '#d3cabe',
	},
	{ label: 'Kona Pointu®', rank: 3, value: 97, color: '#e2caab' },
	{ label: 'Kenya AA TOP Gicherori', rank: 4, value: 97, color: '#af9f8b' },
	{
		label: 'Colombia Finca El Paraíso Geisha Sake',
		rank: 5,
		value: 96,
		color: '#9e8369',
	},
	{
		label: 'Grand Champion Red Bourbon Natural',
		rank: 6,
		value: 96,
		color: '#96693c',
	},
	{
		label: 'Wilton Benitez Colombia Sidra',
		rank: 7,
		value: 96,
		color: '#77573b',
	},
	{
		label: 'El Salvador 2022 COE#17 El Mirador Washed Gesha',
		rank: 8,
		value: 96,
		color: '#754626',
	},
	{
		label: 'La Papaya Ecuador Geisha Natural',
		rank: 9,
		value: 96,
		color: '#633705',
	},
	{
		label: 'Ethiopia Shantawene Washed',
		rank: 10,
		value: 96,
		color: '#363c0f',
	},
];

const priceData = [
	{
		label: '$416 per 100g',
		rank: 1,
		value: 416,
		color: '#f4ece2',
	},
	{
		label: '$9 per 100g',
		rank: 2,
		value: 9,
		color: '#d3cabe',
	},
	{ label: '$31 per 100g', rank: 3, value: 31, color: '#e2caab' },
	{ label: 'Kenya AA TOP Gicherori', rank: 4, value: 9, color: '#af9f8b' },
	{
		label: '$53 per 100g',
		rank: 5,
		value: 53,
		color: '#9e8369',
	},
	{
		label: '$31 per 100g',
		rank: 6,
		value: 31,
		color: '#96693c',
	},
	{
		label: '$24 per 100g',
		rank: 7,
		value: 24,
		color: '#77573b',
	},
	{
		label: '$15 per 100g',
		rank: 8,
		value: 15,
		color: '#754626',
	},
	{
		label: '$9 per 100g',
		rank: 9,
		value: 9,
		color: '#633705',
	},
	{
		label: '$6 per 100g',
		rank: 10,
		value: 6,
		color: '#363c0f',
	},
];

const CustomTooltipContentComponent = ({ item }) => (
	<div>
		<strong>{item.label}</strong>: Score: {item.value}
	</div>
);

export default function Pie() {
	const [itemNb, setItemNb] = React.useState(1);
	const [priceComparingMode, setPriceComparingMode] = React.useState(false);

	const handleItemNbChange = (event, newValue) => {
		if (typeof newValue !== 'number') {
			return;
		}
		setItemNb(newValue);
	};

	const handleInputChange = (e) => {
		if (e.target.value <= 10 || e.target.value > 0) {
			setItemNb(e.target.value);
		} else {
			e.target.value = 1;
			setItemNb(1);
		}
	};

	const handlePriceComparingModeChange = (event) => {
		setPriceComparingMode(event.target.checked);
	};

	return (
		<Container>
			<Box sx={{ width: '80%' }}>
				<Header>
					<Box>
						<Baskerville>Top</Baskerville>
						<EditableNumber
							value={itemNb}
							onChange={handleInputChange}
							type="number"
							min="1"
							max="10"
							maxlength="2"
						/>
						Coffee Beans of 2023
					</Box>
					<Source>Source: CoffeeReview.com</Source>
				</Header>

				{priceComparingMode ? (
					<PieChart
						margin={{ top: 150, left: 100, right: 100 }}
						height={600}
						series={[
							{
								startAngle: -90,
								endAngle: 90,
								data: nameAndScoreData.slice(0, itemNb),
								highlightScope: { faded: 'global', highlighted: 'item' },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: 'gray',
								},
								showMark: false,
								outerRadius: 60,
							},
							{
								startAngle: -90,
								endAngle: 90,
								data: priceData.slice(0, itemNb),
								innerRadius: 80,
								highlightScope: { faded: 'global', highlighted: 'item' },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: 'gray',
								},
								showMark: false,
							},
						]}
						sx={{
							[`& .${pieArcLabelClasses.root}`]: {
								fill: 'white',
								fontSize: 14,
							},
						}}
						slotProps={{
							legend: {
								direction: 'row',
								position: { vertical: 'top', horizontal: 'middle' },
								padding: 0,
							},
						}}
					>
						<ChartsTooltip
							slotProps={{
								itemContent: {
									/* Your custom props here */
								},
							}}
							slots={{
								itemContent: CustomTooltipContentComponent,
							}}
						/>
					</PieChart>
				) : (
					<PieChart
						margin={{ top: 150, left: 100, right: 100 }}
						height={600}
						series={[
							// { data: priceData, outerRadius: radius },
							{
								startAngle: -90,
								endAngle: 90,
								data: nameAndScoreData.slice(0, itemNb),
								highlightScope: { faded: 'global', highlighted: 'item' },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: 'gray',
								},
								showMark: false,
							},
						]}
						sx={{
							[`& .${pieArcLabelClasses.root}`]: {
								fill: 'white',
								fontSize: 14,
							},
						}}
						slotProps={{
							legend: {
								direction: 'row',
								position: { vertical: 'top', horizontal: 'middle' },
								padding: 0,
							},
						}}
					>
						<ChartsTooltip
							slotProps={{
								itemContent: {
									/* Your custom props here */
								},
							}}
							slots={{
								itemContent: CustomTooltipContentComponent,
							}}
						/>
					</PieChart>
				)}

				<Center>
					<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
						<SwitchLabel>View Price Together</SwitchLabel>
						<Switch
							checked={priceComparingMode}
							onChange={handlePriceComparingModeChange}
						/>
					</Box>
				</Center>
				<Guide>Move the slider to see more coffees</Guide>
				<Center>
					<Slider
						value={itemNb}
						onChange={handleItemNbChange}
						valueLabelDisplay="auto"
						min={1}
						max={10}
						aria-labelledby="input-item-number"
						sx={{
							width: '50%',
							'& .MuiSlider-thumb': {
								color: '#573124',
							},
							'& .MuiSlider-track': {
								color: '#573124',
							},
							'& .MuiSlider-rail': {
								color: '#573124',
							},
							'& .MuiSlider-active': {
								color: '#573124',
							},
						}}
					/>
				</Center>
			</Box>
		</Container>
	);
}

const Center = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Header = styled.h1`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
	padding: 18px 24px;
	background-color: #2e1609;
	color: #fff8f5;
	font-size: 18px;
	letter-spacing: -1px;
	border-radius: 8px;
`;

const SwitchLabel = styled.p`
	opacity: 0.5;
`;

const Baskerville = styled.span`
	font-family: Baskerville, Baskerville Old Face, Hoefler Text, Garamond,
		Times New Roman, serif;
`;

const EditableNumber = styled.input`
	border: 0;
	outline: 4px solid #59311b;
	background-color: #402313;
	width: 34px;
	color: #fff8f5;
	font-size: 18px;
	border-radius: 12px;
	font-family: Baskerville, Baskerville Old Face, Hoefler Text, Garamond,
		Times New Roman, serif;
	font-weight: bold;
	padding: 4px 8px;
	margin: 0px 8px;
	cursor: pointer;
	-webkit-appearance: none;
`;

const Source = styled.p`
	font-size: 12px;
	opacity: 0.8;
	font-weight: 500;
`;

const Guide = styled.p`
	text-align: center;
	opacity: 0.5;
`;
