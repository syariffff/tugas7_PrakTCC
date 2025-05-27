import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Utils';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return setError('Password dan konfirmasi tidak sama');
    }

    try {
      await axios.post(`${BASE_URL}/register`, {
        username,
        password,
        confirm_password: confirm,
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registrasi gagal');
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
            <h1 className="title has-text-centered has-text-dark">Daftar Akun</h1>

            {error && (
              <div className="notification is-danger is-light is-small">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister}>
              <div className="field">
                <label className="label has-text-dark">Username</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-light"
                    type="text"
                    placeholder="e.g. user123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
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

              <div className="field">
                <label className="label has-text-dark">Konfirmasi Password</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-light"
                    type="password"
                    placeholder="********"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div className="field mt-5">
                <button className="button is-primary is-fullwidth">Daftar</button>
              </div>
            </form>

            <p className="has-text-centered mt-3 is-size-7 has-text-grey-dark">
              Sudah punya akun?{' '}
              <a href="/" className="has-text-link">
                Masuk di sini
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
