export interface INavBar {
  href: string;
  name: string;
  active: boolean;
}

export interface ITypeParams {
  word: string;
  speed: number;
  deleting?: boolean;
}

export interface ITabs {
  active: boolean;
  name: string;
  id: string;
  category: string;
}

export interface IProgressBar {
  percent: number;
  skill: string;
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

export interface Experience {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description?: string;
}
