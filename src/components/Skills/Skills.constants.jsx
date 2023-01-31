import reactIcon from '../../Assets/images/skills/react.png';
import csharpIcon from '../../Assets/images/skills/csharp.png';
import unityIcon from '../../Assets/images/skills/unity.png';
import vuforiaIcon from '../../Assets/images/skills/vuforia.png';
import figmaIcon from '../../Assets/images/skills/figma.png';

export const skillCat = {
	web: {
		categoryName: 'Web Dev',
		percentage: 100,
		skillList: [
			{ name: 'HTML', xp: '8 YRS', icon: reactIcon },
			{ name: 'CSS', xp: '8 YRS', icon: reactIcon },
			{ name: 'Javascript', xp: '8 YRS', icon: reactIcon },
			{ name: 'React', xp: '7 YRS', icon: reactIcon },
			{ name: 'Angular', xp: '5 YRS', icon: reactIcon },
			{ name: 'Vue', xp: '5 YRS', icon: reactIcon },
			{ name: 'Next', xp: '5 YRS', icon: reactIcon },
			{ name: 'PHP', xp: '5 YRS', icon: reactIcon },
			{ name: 'Node', xp: '5 YRS', icon: reactIcon },
			{ name: 'C#', xp: '5 YRS', icon: reactIcon },
			{ name: 'ASP.NET', xp: '5 YRS', icon: reactIcon },
			{ name: 'SQL', xp: '8 YRS', icon: reactIcon },
		],
	},
	game: {
		categoryName: 'Game Dev',
		percentage: 100,
		skillList: [
			{ name: 'Unity', xp: '3 YRS', icon: unityIcon },
			{ name: 'C#', xp: '5 YRS', icon: csharpIcon },
			{ name: '3Dmax', xp: '3 YRS', icon: vuforiaIcon },
		],
	},
	Blockchain: {
		categoryName: 'Blockchain',
		percentage: 100,
		skillList: [
			{ name: 'Smart Contract', xp: '4 YRS', icon: figmaIcon },
			{ name: 'Solidity', xp: '4 YRS', icon: figmaIcon },
			{ name: 'Rust', xp: '3 YRS', icon: figmaIcon },
			{ name: 'Web3', xp: '4 YRS', icon: figmaIcon },
		],
	},
	soft: {
		categoryName: ['Creative', 'Patient', 'Enthusiastic', 'Hardworking', 'Teamplayer'],
		percentage: 100,
	},
};
