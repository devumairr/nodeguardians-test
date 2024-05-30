interface QuestData {
	title: string;
	rewards: { expPoints: number; gold: number };
	description: string;
	cover: string | StaticImageData;
	language: { label: string; id: string };
	type: { label: string; id: string };
	difficulty: number;
}

interface IQuest {
	title: string;
	difficulty: number;
	description: string;
	slug: string;
	cover: string;
	language: {
		label: string;
		id: string;
	};
	type: {
		label: string;
		id: string;
	};
	rewards: {
		expPoints: number;
		gold: number;
	};
}

interface ICustomButton {
	btnText: string;
	textColor?: string;
	bgColor?: string;
	onClick?: () => void;
}

interface ICustomLink {
	btnText: string;
	textColor?: string;
	bgColor?: string;
	href: string;
}
