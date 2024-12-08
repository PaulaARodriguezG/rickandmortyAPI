import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Filter from './Filter';
import { Link } from 'react-router-dom';
 

function List() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      } catch (error) {
        console.error('Error al cargar los personajes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearch = (query) => {
    const filtered = characters.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const handleFilterChange = ({ searchTerm, filterStatus }) => {
    const filtered = characters.filter((char) => {
      const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus ? char.status === filterStatus : true;
      return matchesSearch && matchesFilter;
    });
    setFilteredCharacters(filtered);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      {isLoading ? (
        <div>Cargando personajes...</div>
      ) : (
        <div className="character-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((char) => (
              <div key={char.id} className="character-card">
                <Link to={`/personaje/${char.id}`}>{char.name}</Link>
                <p>Status: {char.status}</p>
                <img src={char.image} alt={char.name} />
              </div>
            ))
          ) : (
            <p>No se encontraron personajes</p>
          )}
        </div>
      )}
    </div>
  );
}

export default List;


