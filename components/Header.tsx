import NextThemeProvider from "./ThemeProvider";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <div className="flex justify-start items-center w-full md:w-auto mb-4 md:mb-0">
        <NextThemeProvider>
          <ThemeSwitch />
        </NextThemeProvider>
      </div>
      <h1 className="text-lg font-semibold">Todo</h1>
      <ul className="flex gap-[40px] text-m">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
