import Link from "next/link";
import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributions() {
    return (
        <div className="w-full flex flex-col items-center mb-4 gap-4 max-sm:hidden">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tighter sm:text-3xl">
                        GitHub Contributions
                    </h2>
                </div>
            </div>
            <Link href={'https://github.com/Acid-OP'} target="_blank">
                <GitHubCalendar
                    username="Acid-OP"
                    blockSize={10}
                    blockMargin={3}
                    theme={{
                        light: ["#2b2b3f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#cfa3e0"],
                        dark:  ["#ebedf0", "#9b59b6", "#8e44ad", "#7d3c98", "#672d7a"]
                    }}
                />
            </Link>
        </div>
    )
}