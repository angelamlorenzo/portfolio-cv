export interface ITabs {
  active: boolean;
  name: string;
  id: string;
  category: string;
}

export interface IGallery {
  category: string;
  projects: IProject[];
}

export interface IProject {
  title: string;
  previewImg: string;
  date: number;
  description: string;
  paragraphOne: string;
  paragraphTwo: string | null;
  paragraphThree: string | null;
  technicalSpecs: string;
  images: IImage[];
  url: string | null;
  urlName: string | null;
}

export interface IImage {
  src: string;
  altText: string;
}
