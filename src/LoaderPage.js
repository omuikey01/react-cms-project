import React, { useState, useEffect } from 'react';
import StuDashboard from './components/InsideComponent/StuDashboard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function LoaderExample() {

  const [isLoading, setIsLoading] = useState(true);
  let LoginAuth = useSelector(state => state.Student.stuName)
  let Mynav = useNavigate()

  useEffect(() => {
    const delayToShowContent = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delayToShowContent);
  }, []);

  if (LoginAuth !== "") {
    return (
      <div>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Loading...</h2>
          </div>
        ) : (
          <StuDashboard />
        )}
      </div>
    )
  }
  else {
    Mynav("/")
  }
}
export default LoaderExample;