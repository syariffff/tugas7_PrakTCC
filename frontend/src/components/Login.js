import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Import Link
import useAuth from '../auth/useAuth';

const LoginPage = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(Username, password);
    if (success) {
      navigate('/notes');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <section className="hero is-fullheight has-background-black">
      <div className="hero-body">
        <div className="container">
          <div
            className="box"
            style={{
              maxWidth: '420px',
              margin: '0 auto',
              backgroundColor: '#f4f4f4',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
            }}
          >
            <h1 className="title has-text-centered has-text-dark">Masuk ke Akun</h1>

            {error && (
              <div className="notification is-danger is-light is-small">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="field">
                <label className="label has-text-dark">Username</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-light"
                    type="text"
                    placeholder="e.g. user123"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label has-text-dark">Password</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-light"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div className="field mt-5">
                <button className="button is-primary is-fullwidth">Login</button>
              </div>
            </form>

            <p className="has-text-centered mt-3 is-size-7 has-text-grey-dark">
              Belum punya akun?{' '}
              <Link to="/register" className="has-text-link">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
