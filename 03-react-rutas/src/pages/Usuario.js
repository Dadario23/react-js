import { useParams } from "react-router-dom";

const Usuario = () => {
  //let params = useParams();
  //console.log(params);
  let { username } = useParams();
  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre de usuario <b>{username}</b>
      </p>
    </div>
  );
};

export default Usuario;
