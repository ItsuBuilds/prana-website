import MenuHeader from "./MenuHeader";
import MenuList from "./MenuList";
import MenuImage from "./MenuImage";

export default function Menu() {
  return (
    <section
      id="menu"
      className="bg-[#0b0b0b] py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <MenuHeader />

        <div className="mt-24 grid items-start gap-20 lg:grid-cols-2">

          <MenuList />

          <MenuImage />

        </div>

      </div>
    </section>
  );
}