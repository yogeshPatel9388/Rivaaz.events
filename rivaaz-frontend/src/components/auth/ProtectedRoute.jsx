import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { loading } = useAuth();

  // If we are still checking for a saved session in localStorage,
  // show a quick loader to prevent layout shift.
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-rivaaz-rose rounded-full border-4 border-t-rivaaz-red animate-spin"></div>
          <p className="font-modern text-[10px] uppercase tracking-widest text-slate-400">
            Loading Rivaaz...
          </p>
        </div>
      </div>
    );
  }

  // We no longer check "if (!user)".
  // We simply return children so the app is visible to everyone.
  return children;
};

export default ProtectedRoute;
