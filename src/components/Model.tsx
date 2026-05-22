import './Model.css';

type props = {
  imgUrl?: string;
  imgAlt?: string;
  msg?: string;
  onClose?: () => void;
};

const Model = ({ imgUrl, msg, imgAlt, onClose }: props) => {
  return (
    <div id="model" className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {imgUrl && <img src={imgUrl} alt={imgAlt || 'Undefined'} id="modelImage" />}
        {msg && <p>{msg}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Model;
