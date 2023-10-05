// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import Counter from '../components/counter';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <Counter />
    </div>
  );
}

export default Home;
