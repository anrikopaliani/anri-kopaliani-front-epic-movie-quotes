import { Button } from "@/components";
import { useNavbar } from "@/hooks";

const Navbar = () => {
  const { handleLoginModal, handleSignUpModal, blurModalBackground } =
    useNavbar();
  return (
    <nav
      className={`px-16 bg-theme text-white flex items-center justify-between pt-6 ${
        blurModalBackground ? "blur" : ""
      }`}
    >
      <p className="text-DCA">MOVIE QUOTES</p>
      <div className="space-x-4">
        <Button
          handleClick={handleSignUpModal}
          text="Sign Up"
          backgroundColor="red"
        />
        <Button handleClick={handleLoginModal} text="Log in" />
      </div>
    </nav>
  );
};

export default Navbar;