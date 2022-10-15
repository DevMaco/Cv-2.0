import { project,  } from "../typings";

export const fetchProjects = async ()  => {
    const res = await fetch (`${process.env.NEXT_PUBLICK_BASE_URL}/api/getProject`);
    const data = await res.json();
    const Projects: project[] = data.project;
// console.log ("fetching",socials);
    return Projects;
};