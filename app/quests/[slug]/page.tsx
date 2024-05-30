'use client';

import React, { useEffect, useState } from 'react';
import ArtImg from '../../../public/assets/art.png';
import Exp from '../../../public/assets/exp.png';
import Gold from '../../../public/assets/gold.png';
import Solidity from '../../../public/assets/solidity.svg';
import Sword from '../../../public/assets/sword.svg';
import LightSword from '../../../public/assets/light_sword.svg';
import Image from 'next/image';
import { MainLayout } from '@/components/layout';
import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { goldAtom, expAtom } from '../../../atom/atoms';
import { useAtom } from 'jotai';
import { CustomButton, CustomLink } from '@/components/button';

const QuestsDetails = () => {
	const params = useParams();

	const { slug } = params;
	const [questData, setQuestData] = useState<QuestData | null>(null);
	const [, setGold] = useAtom(goldAtom);
	const [, setExp] = useAtom(expAtom);

	useEffect(() => {
		if (slug) {
			const fetchQuestData = async () => {
				try {
					const response = await fetch(`http://localhost:3000/api/quest?questSlug=${slug}`, {
						cache: 'no-store'
					});
					if (!response.ok) {
						throw new Error('Failed to fetch quest');
					}
					const data: QuestData = await response.json();
					setQuestData(data);
				} catch (error) {
					console.error(error);
				}
			};

			fetchQuestData();
		}
	}, [slug]);

	const handleAirdrop = () => {
		if (questData) {
			setGold((prev) => prev + questData.rewards.gold);
			setExp((prev) => prev + questData.rewards.expPoints);
		}
	};

	if (!questData) {
		return <div>Loading...</div>;
	}

	return (
		<MainLayout>
			<QuestStyleWrapper>
				<div className='quest-wrapper'>
					<div className='quest-card'>
						<div>
							<Image
								src={typeof questData.cover === 'string' ? questData.cover : ArtImg}
								alt='cover'
								height={200}
								width={500}
							/>
							<div className='title-bar'>
								<h2 style={{ textTransform: 'uppercase' }}>{questData.title}</h2>
							</div>
							<div className='tag-section'>
								<div className='d-flex'>
									<div className='borderd d-flex'>
										<Image src={Solidity} alt='Solidity' />
										<p>{questData.language.label}</p>
									</div>
									<div className='borderd d-flex'>
										{[...Array(5)].map((_, index) => (
											<Image key={index} src={index < questData.difficulty ? Sword : LightSword} alt='Sword' />
										))}
									</div>
								</div>
								<div className='d-flex'>
									<div className='d-flex'>
										<Image src={Gold} alt='gold' />
										<p>{questData.rewards.gold}</p>
									</div>
									<div className='d-flex' style={{ marginLeft: 12 }}>
										<Image src={Exp} alt='exp' />
										<p>{questData.rewards.expPoints}</p>
									</div>
								</div>
							</div>
						</div>
						<p style={{ color: '#7C7C7C', fontSize: 18 }}>{questData.description}</p>
						<div className='d-flex '>
							<CustomLink btnText='Go Back' textColor='#B69E72' href={'/'} />
							<CustomButton
								btnText='Airdrop rewards to The Guardian'
								textColor='#000'
								bgColor='#B69E72'
								onClick={handleAirdrop}
							/>
						</div>
					</div>
				</div>
			</QuestStyleWrapper>
		</MainLayout>
	);
};

export default QuestsDetails;

const QuestStyleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	.quest-wrapper {
		margin-top: 5%;
		background-color: #080808;
		display: flex;
		flex-wrap: wrap;
		border: 2px solid #40382c;
		width: 50%;
		padding: 20px;
		overflow: auto;
		border-radius: 12px;

		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;

		.quest-card {
			padding: 20px;
			border: 1px solid #212121;
			border-radius: 12px;
			width: 100%;
			margin-bottom: 8px;
			text-decoration: none;
			img {
				width: 100%;
				height: auto;
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
				justify-content: space-between;
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
		}
	}

	/* Responsive styles */
	@media (max-width: 768px) {
		.quest-wrapper {
			width: 90%;
			padding: 10px;
		}

		.quest-card {
			.title-bar h2 {
				font-size: 20px;
			}

			.title-bar p {
				font-size: 12px;
			}

			.tag-section p {
				font-size: 14px;
			}

			.borderd {
				height: 35px;
				padding: 0 6px;
			}
		}
	}

	@media (max-width: 480px) {
		.quest-wrapper {
			width: 100%;
			padding: 5px;
		}

		.quest-card {
			.title-bar h2 {
				font-size: 18px;
			}

			.title-bar p {
				font-size: 10px;
			}

			.tag-section p {
				font-size: 12px;
			}

			.borderd {
				height: 30px;
				padding: 0 4px;
			}
		}
	}
`;
