import Link from "next/link";
import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributions() {
    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                        GitHub Activity
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
                        light: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"],
                        dark: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]
                    }}
                />
            </Link>
        </div>
    )
}