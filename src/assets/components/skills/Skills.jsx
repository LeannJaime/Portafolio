import IconCloud from "../InteractiveIcons";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "figma",
];

export function Skills() {
    return (
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
