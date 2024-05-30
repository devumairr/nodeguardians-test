'use client';

import { FC, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import Backgroundimage from '../../public/assets/background.png';
import Header from '../header';

const MainLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
	return (
		<QuestsLayoutStyle bgImage={Backgroundimage}>
			<Header />
			{children}
		</QuestsLayoutStyle>
	);
};

export default MainLayout;

const QuestsLayoutStyle = styled.div`
	background-image: url(${(props) => props.bgImage.src});
	background-size: cover;
	background-position: center;
	min-height: 100vh;
`;
