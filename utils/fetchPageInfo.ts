
import { PageInfo,  } from "../typings";

export const fetchpageInfo = async ()  => {
    const res = await fetch (`${process.env.NEXT_PUBLICK_BASE_URL}/api/pageinfo`);
    const data = await res.json();
    const PageInfo: PageInfo[] = data.pageInfo;
// console.log ("fetching",socials);
    return PageInfo;
};