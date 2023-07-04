import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import './Toggle.css';
import { toggleFavoriteComment } from '../../services/API_proyect/comment.service';
import { useAuth } from '../../contexts/authContext';
import { updateTecnologia } from '../../services/API_proyect/user.service';

const ToggleTech = ({ setArrayTecn, arrayTecn }) => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valuePather, setValuePather] = useState('');
  const [elementId, setElementId] = useState(null);
  const { user } = useAuth();
  const buttonRef = useRef(null);

  const handleAddTech = async () => {
    const data = buttonRef.current.parentElement.attributes[1].textContent;
    setValuePather(data);
    setArrayTecn((value) => {
      if (value.includes(data)) {
        console.log('entro en el if');

        const copyValue = [];
        value.forEach((element) => {
          if (element != data) {
            copyValue.push(element);
          }
        });

        return copyValue;
      } else {
        console.log('entro en el else');
        const copyValue = [...value];
        copyValue.push(data);
        return copyValue;
      }
    });
  };
  useEffect(() => {}, [arrayTecn]);

  useEffect(() => {
    setElementId(buttonRef?.current?.parentElement?.attributes[1]?.textContent);
  }, []);

  return (
    <button 
      style={{ background: 'none', border: 'none' }}
      onClick={handleAddTech}
      disabled={loading || user == null}
      ref={buttonRef}
      className={
        arrayTecn.includes(valuePather) || arrayTecn.includes(elementId)
          ? 'favorite'
          : 'noFavorite'
      }
    >
      {arrayTecn.includes(valuePather) || arrayTecn.includes(elementId) ? (
        <AiTwotoneHeart size={15} className="favorite-icon-red" />
      ) : (
        <AiOutlineHeart size={15} className="favorite-icon" />
      )}
    </button>
  );
};

export default ToggleTech;
