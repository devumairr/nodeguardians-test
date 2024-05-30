'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';

import ArtImg from '../../public/assets/art.png';
import Exp from '../../public/assets/exp.png';
import Gold from '../../public/assets/gold.png';
import Solidity from '../../public/assets/solidity.svg';
import Sword from '../../public/assets/sword.svg';
import LightSword from '../../public/assets/light_sword.svg';
import Link from 'next/link';

const QuestCard: FC<IQuest> = ({ title, rewards, slug, description, cover, language, type, difficulty }) => {
	return (
		<QuestCardStyle>
			<Link href={`/quests/${slug}`} passHref>
				<div>
					<Image src={cover || ArtImg} alt='cover' width={500} height={120} />
					<div className='title-bar'>
						<h2>{title}</h2>
						<div className='d-flex'>
							<Image src={Exp} alt='exp' />
							<p>{rewards.expPoints}</p>
						</div>
					</div>
					<div className='tag-section'>
						<div className='d-flex'>
							<div className='borderd d-flex'>
								<Image src={Solidity} alt='Solidity' />
								<p>{language.label}</p>
							</div>
							<div className='borderd d-flex'>
								{[...Array(5)].map((_, index) => (
									<Image key={index} src={index < difficulty ? Sword : LightSword} alt='Sword' />
								))}
							</div>
							<div className='borderd d-flex'>
								<p>{type.label}</p>
							</div>
						</div>
						<div className='d-flex'>
							<Image src={Gold} alt='gold' />
							<p>{rewards.gold}</p>
						</div>
					</div>
				</div>
			</Link>
		</QuestCardStyle>
	);
};

export default QuestCard;

const QuestCardStyle = styled.div`
	padding: 20px;
	border: 1px solid #212121;
	border-radius: 12px;
	width: 33%;
	margin-bottom: 8px;
	color: inherit;

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
		border-radius: 10px;
	}

	.title-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12px 0;

		p {
			margin: 0 4px;
			color: #cccccc;
			font-size: 14px;
			font-family: 'Playfair Display';
		}

		h2 {
			margin: 0;
			color: #cccccc;
			font-size: 24px;
			font-family: 'Playfair Display';
		}
	}

	.d-flex {
		display: flex;
		align-items: center;

		img {
			width: 20px;
		}
	}

	.tag-section {
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			margin: 0 4px;
			color: #cccccc;
			font-size: 16px;
		}
	}

	.borderd {
		border: 1px solid gray;
		border-radius: 10px;
		height: 45px;
		padding: 0 8px;
		margin-right: 4px;
	}

	@media (max-width: 768px) {
		width: 48%;
		margin-bottom: 16px;

		.title-bar h2 {
			font-size: 20px;
		}

		.title-bar p {
			font-size: 12px;
		}

		.tag-section p {
			font-size: 14px;
		}

		.tag-section .borderd {
			height: 35px;
			padding: 0 6px;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	@media (max-width: 480px) {
		width: 100%;
		margin-bottom: 24px;

		.title-bar h2 {
			font-size: 18px;
		}

		.title-bar p {
			font-size: 10px;
		}

		.tag-section p {
			font-size: 12px;
		}

		.tag-section .borderd {
			height: 30px;
			padding: 0 4px;
		}
	}
`;
