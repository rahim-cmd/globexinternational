import gallery from "../../data/gallery";
import GalleryCard from "./GalleryCard";

export default function GalleryGrid() {
  return (
    <div
      className="
      mt-20
      grid
      gap-8

      md:grid-cols-2
      lg:grid-cols-3
      "
    >
      {gallery.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}