import Chapter from "./Chapter";
import { chapters } from "./data";

export default function Evening() {
  return (
    <>
      {chapters.map((chapter) => (
        <Chapter
          key={chapter.id}
          title={chapter.title}
          subtitle={chapter.subtitle}
          image={chapter.image}
          items={chapter.items}
        />
      ))}
    </>
  );
}