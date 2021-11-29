import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="loading">
      <div>LOADING...</div>
    </div>
  );
};

export default LoadingScreen;
