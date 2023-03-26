// @ts-nocheck
import Mapper from "../components/results/Mapper";
import Catchphrase from "../components/Catchphrase";
import SearchBar from "../components/searchbars/SearchBar";
import FavoriteList from "../components/results/FavoriteList";
import { useAtomValue } from "jotai";
import { mapReloadAtom } from "../state";


export default function MainPage() {
  const isReloading = useAtomValue(mapReloadAtom);
  return (
    <div>
      <div className="font-fuzzy-bubbles grid grid-cols-12 pt-2 text-center font-bold">
      <Catchphrase />
        <h1 className="col-span-2 col-start-6 text-6xl pb-2 tracking-widest">
          Anaxi
        </h1>
        {/* temporary login while redirects are sorted */}
        <a className="col-start-9 pt-4 transition-all ease-out duration-300 pt-3 hover:scale-110 hover:bg-black hover:bg-opacity-10 border-1 rounded-t-lg text-3xl tracking-wide text-stone-800" href="/login">
          login
        </a>
        {/* to avoid redirect, convert a tags to buttons, use onclick to trigger event */}
        <a className="col-start-10 transition-all ease-out duration-300 pt-4 hover:scale-110 hover:bg-black hover:bg-opacity-10 border-1 rounded-t-lg text-3xl tracking-wide text-stone-800" href="/home">
          home
        </a>
        <a className="pt-4 transition-all ease-out duration-300 pt-3 hover:scale-110 hover:bg-black hover:bg-opacity-10 border-1 rounded-t-lg text-3xl tracking-wide text-stone-800" href="/favorites">
          favorites
        </a>
        <a className="pt-4 transition-all ease-out duration-300 pt-3 hover:scale-110 hover:bg-black hover:bg-opacity-10 border-1 rounded-t-lg text-3xl tracking-wide text-stone-800" href="/logout">
          logout
        </a>
      </div>

      {!isReloading && <Mapper />}

      <SearchBar />

      <FavoriteList />

    </div>
  );
}
