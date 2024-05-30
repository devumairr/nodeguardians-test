'use client';

import React from 'react';
import styled from 'styled-components';
import QuestCard from '@/components/cards';

const QuestsPage = async () => {
	const response = await fetch('http://localhost:3000/api/quests', {
		cache: 'no-store'
	});

	if (!response.ok) {
		throw new Error('Failed to fetch quests');
	}

	const quests: IQuest[] = await response.json();

	return (
		<QuestStyleWrapper>
			<div className='quest-wrapper'>
				{quests.map((quest) => (
					<QuestCard
						key={quest.slug}
						title={quest.title}
						difficulty={quest.difficulty}
						description={quest.description}
						slug={quest.slug}
						cover={quest.cover}
						language={quest.language}
						type={quest.type}
						rewards={quest.rewards}
					/>
				))}
			</div>
		</QuestStyleWrapper>
	);
};

export default QuestsPage;

const QuestStyleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;

	.quest-wrapper {
		background-color: #080808;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border: 2px solid #40382c;
		height: 75vh;
		width: 90%;
		padding: 20px;
		overflow: auto;
		border-radius: 12px;

		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`;
