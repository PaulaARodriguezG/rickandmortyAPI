import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 

function PersonajeDetails() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const fetchPersonajeDetails = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setPersonaje(response.data);
      } catch (error) {
        console.error('Error al cargar los detalles del personaje:', error);
      }
    };

    fetchPersonajeDetails();
  }, [id]);

  if (!personaje) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div className="character-details">
      <h2>{personaje.name}</h2>
      <p>Status: {personaje.status}</p>
      <p>Especie: {personaje.species}</p>
      <p>Género: {personaje.gender}</p>
      <p>Origen: {personaje.origin.name}</p>
      <p>Ubicación: {personaje.location.name}</p>
      <img src={personaje.image} alt={personaje.name} />
    </div>
  );
}

export default PersonajeDetails;
