import React, { useState, useEffect } from 'react';
import StuDashboard from './components/StuDashboard';

function LoaderExample() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delayToShowContent = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delayToShowContent);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {isLoading ? (
        // Loader UI
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Loading...</h2>
          {/* You can use a spinner or any other loading indicator here */}
        </div>
      ) : (
        // Content to display after loading
        <StuDashboard />
      )}
    </div>
  );
}

export default LoaderExample;
