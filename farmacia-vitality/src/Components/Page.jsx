import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./Pagina/Inicio/Inicio";
import { ProductosList } from "./Pagina/Productos/Productos";
import { ProductosDetalles } from "./Pagina/Productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
