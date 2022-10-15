import { Experience } from "../typings";

export const fetchexperience = async () => {
  const res = await fetch(
    "${process.env.NEXT_PUBLICK_BASE_URL}/api/getexperiences"
  );
};
