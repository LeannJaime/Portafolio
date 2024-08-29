import IconCloud from "../InteractiveIcons";
import TextAnimate from "../Texts/Textanimated";

const slugs = [
    // "typescript",
    "javascript",
    "vite",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "firebase",
    "vercel",
    "git",
    "github",
];

export function Skills() {
    return (
        <>
            <div className="flex justify-center">
                <TextAnimate text="SKILLS" type="fadeIn" />
            </div>
            <div className="flex w-full items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8">
                <IconCloud iconSlugs={slugs} />
            </div>
        </>
    );
}
