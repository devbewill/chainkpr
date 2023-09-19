import SwitchTheme from "./SwitchTheme";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center p-4 h-screen">
        <SwitchTheme />
      </div>
      {children}
    </div>
  );
};

export default Layout;
