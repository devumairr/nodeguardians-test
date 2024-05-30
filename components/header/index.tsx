import React from 'react';
import styled from 'styled-components';

// Assuming you have the image icons available locally
import Lefticon from '../../public/favicon.svg';
import userProfileIcon from '../../public/assets/avatar.png';
import Image from 'next/image';
import Exp from '../../public/assets/exp.png';
import Gold from '../../public/assets/gold.png';
import { useAtom } from 'jotai';
import { goldAtom, expAtom } from '../../atom/atoms';

const Header = () => {
	const [gold] = useAtom(goldAtom);
	const [exp] = useAtom(expAtom);

	return (
		<HeaderStyle>
			<div className='app-logo'>
				<h4>N</h4>
				<Image src={Lefticon} alt='Left Icon' width={50} />
				<h4>G</h4>
			</div>
			<div className='user_profile'>
				<div className='d-flex'>
					<Image src={Gold} alt='gold' />
					<p>{gold}</p>
				</div>
				<div className='d-flex'>
					<Image src={Exp} alt='exp' />
					<p>{exp}</p>
				</div>
				<div className='user-avatar'>
					<Image src={userProfileIcon} alt='User Profile avatar' />
				</div>
			</div>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;

	h4 {
		margin: 0;
		color: white;
		font-size: 40px;
		font-family: 'Playfair Display';
	}
	p {
		margin: 0 4px;
		color: #b69e72;
		font-size: 20px;
		font-family: 'Playfair Display';
	}
	.app-logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.user_profile {
		display: flex;
		align-items: center;

		.d-flex {
			display: flex;
			align-items: center;
			margin: 0 8px;
		}
		.user-avatar {
			border: 2px solid #212121;
			border-radius: 50px;
			padding: 4px;
			display: flex;
			justify-content: center;
			img {
				border: 2px solid #b69e72;
				border-radius: 50px;
			}
		}
	}
`;
