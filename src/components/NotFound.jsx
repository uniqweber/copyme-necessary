import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-4xl uppercase h-screen flex items-center justify-center text-highlight relative">
      <button
        onClick={() => navigate("/")}
        className="absolute px-6 py-2 top-6 left-6 text-sm text-white bg-dark"
      >
        Go to Home
      </button>
      !NotFound
    </div>
  );
};

export default NotFound;
