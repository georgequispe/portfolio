// Proyecto.jsx
import { proyectos } from "../data/proyectos";
import ProyectoCard from "./ProyectoCard";
import { Grid } from "./Proyecto.styles";

const Proyecto = () => {
  return (
    <section>
      <h2>Mis Proyectos</h2>
      <Grid>
        {proyectos.map(proyecto => (
          <ProyectoCard key={proyecto.id} {...proyecto} />
        ))}
      </Grid>
    </section>
  );
};

export default Proyecto;