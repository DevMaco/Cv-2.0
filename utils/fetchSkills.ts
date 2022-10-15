import Skills from "../components/Skills";
import { Skill } from "../typings";

export const fetchSkills = async ()  => {
    const res = await fetch (`${process.env.NEXT_PUBLICK_BASE_URL}/api/getSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;
// console.log ("fetching",skil);
    return skills;
};