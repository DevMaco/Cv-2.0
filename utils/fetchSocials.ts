
import { Social } from "../typings";

export const fetchsocials = async ()  => {
    const res = await fetch (`${process.env.NEXT_PUBLICK_BASE_URL}/api/getsocials`);
    const data = await res.json();
    const socials: [] = data.socials;
// console.log ("fetching",socials);
    return socials;
};