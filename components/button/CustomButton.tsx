import React, { FC } from 'react';
import styled from 'styled-components';

const CustomButton: FC<ICustomButton> = ({ btnText, textColor, bgColor, onClick }) => {
	return (
		<ButtonWrapper textColor={textColor} bgColor={bgColor} onClick={onClick}>
			{btnText}
		</ButtonWrapper>
	);
};

export default CustomButton;

const ButtonWrapper = styled.button<{ textColor?: string; bgColor?: string }>`
	color: ${(props) => (props.textColor ? props.textColor : '#fff')};
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'black')};
	border: 1px solid gray;
	border-radius: 10px;
	padding: 12px;
	margin-right: 4px;
	font-size: 24px;
	text-decoration: none;
	display: inline-block;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s ease;

	/* Responsive styles */
	@media (max-width: 768px) {
		font-size: 20px;
		padding: 10px;
	}

	@media (max-width: 480px) {
		font-size: 18px;
		padding: 8px;
	}
`;
