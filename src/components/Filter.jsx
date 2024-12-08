import React, { useState } from 'react';
 

function Filter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value, filterStatus });
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    onFilterChange({ searchTerm, filterStatus: e.target.value });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={filterStatus} onChange={handleStatusChange}>
        <option value="">Filtrar por estado</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
    </div>
  );
}

export default Filter;
