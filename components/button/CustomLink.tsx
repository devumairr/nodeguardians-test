import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

const CustomLink: FC<ICustomLink> = ({ btnText, textColor, bgColor, href }) => {
	return (
		<Link href={href} passHref>
			<ButtonWrapper textColor={textColor} bgColor={bgColor}>
				{btnText}
			</ButtonWrapper>
		</Link>
	);
};

export default CustomLink;

const ButtonWrapper = styled.a<{ textColor?: string; bgColor?: string }>`
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
`;
