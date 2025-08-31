// 相册配置数据结构
export interface Photo {
	id: string;
	src: string;
	thumbnail?: string;
	alt: string;
	title?: string;
	description?: string;
	tags?: string[];
	date?: string;
	location?: string;
	width?: number;
	height?: number;
	camera?: string;
	lens?: string;
	settings?: {
		aperture?: string;
		shutter?: string;
		iso?: string;
		focal?: string;
	};
}

export interface AlbumGroup {
	id: string;
	title: string;
	description?: string;
	cover: string;
	date: string;
	location?: string;
	tags?: string[];
	photos: Photo[];
	layout?: "grid" | "masonry";
	columns?: number;
}

// 相册数据
export const albumsData: AlbumGroup[] = [];
