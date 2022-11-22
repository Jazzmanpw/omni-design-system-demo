import SectionTitles from "./SectionTitles";

export default {
  title: "Molecules/Section Titles",
  args: {
    title: "",
    subtitle: "",
  },
};

export const _SectionTitles = ({ title, subtitle }) => (
  <SectionTitles title={title || "Title"} subtitle={subtitle} />
);
