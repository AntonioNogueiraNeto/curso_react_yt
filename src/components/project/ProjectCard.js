import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function Project({ name, budget }) {
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <div className={styles.project_card_actions}>
        <Link>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill />
          Deletar
        </button>
      </div>
    </div>
  );
}

export default Project;
