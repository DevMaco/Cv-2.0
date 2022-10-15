import { Technology } from "./Technology";

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt:string
}
interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    }
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundinformation: string;
    email: string;
    phoneNumber:string;
    profilePic:Image;
}
export interface Skill extends SanityBody{
    _type:"skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Technology extends SanityBody{
    _type:"skill";
    image: Image;
    progress: number;
    title: string;
}


export interface Experience extends SanityBody{
    _type:"experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologie: Technology[];
}
export interface project extends SanityBody{
    _type:"project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
