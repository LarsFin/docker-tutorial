// realistically this should be done via a cms
export const slugToName = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
};
