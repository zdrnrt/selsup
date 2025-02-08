import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'

interface Props {
  params: Param[];
  model: Model;
}
interface Param {
  id: number;
  name: string;
  type: string;
}
interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Color {
  value: string
}
/*
  const params = [
    {
      id: 1,
      name: "Назначение",
    },
    {
      id: 2,
      name: "Длина",
    },
  ];
  const model = {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      },
    ],
  };
*/
class ParamEditor extends React.Component<Props, State> {
  public getModel(): Model {
  }
  
  render(){
    return (
      <div>
        <label>
          <span>Название</span>
          <input value={'Значение'} />
        </label>
      </div>
    )
  }
}

const App:React.FunctionComponent = () => {
  
  return (
    <>
      <h1>Selsup test</h1>
      <ParamEditor />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
