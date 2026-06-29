const categories = [
  "All",
  "Vegetables",
  "Rice",
  "Spices",
];

export default function GoodsCategories() {
  return (
    <section className="py-10">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">

        {categories.map((category) => (

          <button
            key={category}
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:border-[#F6B91A]
            hover:bg-[#F6B91A]
            hover:text-black
            "
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}