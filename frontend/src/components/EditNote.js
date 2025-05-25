import React, { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from "../Utils";

const EditNote = () => {
    const [judul, setJudul] = useState("");
    const [isi, setIsi] = useState("");
    const [kategori, setKategori] = useState("Pribadi");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getNoteById = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/notes/${id}`);
                console.log(response.data);
                setJudul(response.data.data.title);
                setIsi(response.data.data.isi);
                setKategori(response.data.data.kategori);
            } catch (error) {
                console.log(error);
            }
        };
        getNoteById();
    }, [id]);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${BASE_URL}/update-note/${id}`, {
                judul,
                isi,
                kategori,
            });
            navigate("/notes");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half box p-5">
                <h2 className="title has-text-centered">Edit Catatan</h2>
                <form onSubmit={updateNote}>
                    <div className="field">
                        <label className='label'>Judul</label>
                        <div className="control">
                            <input 
                                className='input' 
                                type="text" 
                                placeholder='Judul'
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Isi</label>
                        <div className="control">
                            <textarea
                                className='textarea' 
                                placeholder='Isi catatan...'
                                rows={4}
                                value={isi}
                                onChange={(e) => setIsi(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Kategori</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select 
                                    value={kategori}
                                    onChange={(e) => setKategori(e.target.value)}
                                >
                                    <option value="Pribadi">Pribadi</option>
                                    <option value="Pendidikan">Pendidikan</option>
                                    <option value="Pekerjaan">Pekerjaan</option>
                                    <option value="Keuangan">Keuangan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button className='button is-info is-fullwidth' type='submit'>Perbarui Catatan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNote;