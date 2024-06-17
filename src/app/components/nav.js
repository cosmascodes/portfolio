import Link from "next/link";

const Nav = ({ links, activeSection }) => {
  return (
    <ul className="mt-16 hidden lg:block" aria-label="In-page jump links">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className="group flex items-center py-3 active"
            href={"#" + link}
          >
            <span
              className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                activeSection == link &&
                "w-16 bg-slate-200 group-focus-visible:bg-slate-200"
              }`}
            ></span>
            <span
              className={`text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                activeSection == link && "text-slate-200"
              }`}
            >
              {link}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
