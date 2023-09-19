import SwitchTheme from "./SwitchTheme";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex justify-end p-4">
        <SwitchTheme />
      </div>
      {children}
    </div>
  );
};

export default Layout;
