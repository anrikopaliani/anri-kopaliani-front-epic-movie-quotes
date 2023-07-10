import { Button } from "@/app/components";

const Navbar = () => {
  return (
    <nav className="px-16 bg-theme text-white flex items-center justify-between pt-6">
      <p>MOVIE QUOTES</p>
      <div className="space-x-4">
        <Button text="Sign Up" backgroundColor="red" />
        <Button text="Log in" />
      </div>
    </nav>
  );
};

export default Navbar;
