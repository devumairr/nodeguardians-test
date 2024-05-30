import { MainLayout } from '@/components/layout';
import { FC, ReactElement } from 'react';
import Quests from './quests/page';

const HomePage: FC = (): ReactElement => {
	return (
		<MainLayout>
			<Quests />
		</MainLayout>
	);
};

export default HomePage;
