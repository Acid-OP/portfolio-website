interface NameDescriptionProps {
  name: string;
  description: string;
}

export default function NameDescription({ name, description }: NameDescriptionProps) {
  const words = description.split(" ");
  const firstLine = words.slice(0, 3).join(" ");
  const secondLine = words.slice(3).join(" ");

  return (
    <h1 className="text-3xl font-medium font-sans leading-snug text-black">
      {name} —{" "}
      <span className="text-zinc-400">
        {firstLine}
        <br />
        {secondLine}
      </span>
    </h1>
  );
}
