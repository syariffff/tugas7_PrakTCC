import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";  // import useNavigate
import { BASE_URL } from "../Utils";
import useAuth from "../auth/useAuth";
import axios from '../api/axiosInstance';

const NoteList = () => {
  const [notes, setNote] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>{
    getNotes();
  },[]);

  const getNotes = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      console.log(token);

      const response = await axios.get(`${BASE_URL}/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response data:', response.data);
      setNote(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-note/${id}`);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  }

  // Fungsi untuk logout
  const handleLogout = () => {
    logout();      // panggil fungsi logout dari useAuth
    navigate('/'); // arahkan ke halaman login ("/")
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-three-quarters box p-5">
        <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
          <h2 className="title has-text-centered">Daftar Catatan</h2>
          <button 
            className="button is-danger is-small"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="buttons is-centered mb-4">
          <Link to="/add" className='button is-success is-medium'>Tambah Catatan</Link>
        </div>
        <table className='table is-striped is-fullwidth is-hoverable'>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Isi</th>
              <th>Kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={note.id} >
                <td>{index+1}</td>
                <td><strong>{note.title}</strong></td>
                <td>{note.isi.length > 50 ? note.isi.substring(0, 50) + "..." : note.isi}</td>
                <td>
                  <span className={`tag ${note.kategori === "Pribadi" ? "is-primary" : note.kategori === "Pendidikan" ? "is-info" : note.kategori === "Pekerjaan" ? "is-warning" : "is-danger"}`}>
                    {note.kategori}
                  </span>
                </td>
                <td>
                  <div className="buttons">
                    <button
                      className='button is-small is-info'
                      onClick={() => navigate(`../edit/${note.id}`)}
                    >
                      Edit
                    </button>

                    <button onClick={() => deleteNote(note.id)} className='button is-small is-danger'>Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NoteList;
