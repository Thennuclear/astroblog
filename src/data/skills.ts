// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 相关项目ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "gmodaddons",
		name: "Garry's Mod Lua",
		description: "Garry's Mod的Lua脚本编写，用于创建游戏模组和插件。",
		icon: "logos:lua",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 9 },
		projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
		color: "#24acf2",
	},
	// Backend Skills
	{
		id: "python",
		name: "Python",
		description: "通用编程语言，广泛应用于Web开发、数据分析、人工智能等领域。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},

	// Database Skills

	// Tools
	{
		id: "github",
		name: "Github",
		description: "代码托管和版本控制平台，支持协作开发和项目管理。",
		icon: "logos:github-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "ollama",
		name: "Ollama",
		description: "本地运行大型语言模型（LLM）的工具，支持离线AI应用开发。",
		icon: "logos:ollama",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["e-commerce-platform", "task-manager-app"],
		color: "#ffffff",
	},

	{
		id: "VSCode",
		name: "Visual Studio Code",
		description: "流行的代码编辑器，支持多种编程语言和扩展。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},

	// Other Skills
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年数
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
