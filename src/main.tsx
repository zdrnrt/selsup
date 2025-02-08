import React, { ReactElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './main.css'

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
  colors?: Color[];
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Color {
  value: string
}

const paramsExample: Param[] = [
  {
    id: 1,
    name: "Назначение",
    type: 'string'
  },
  {
    id: 2,
    name: "Длина",
    type: 'string'
  },
];
const modelExample = {
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

class ParamEditorInput extends React.Component<{ id: number, name: string, value: string, type: string, event: VoidFunction }> {
  render() {
    const valueId: number = this.props.id;
    return(
      <label className='flex items-center gap-x-[20px] my-[10px]'>
          <span className='block w-3xs text-center'>{this.props.name}</span>
          <input type={this.props.type} defaultValue={this.props.value} className='block w-3xs p-[4px] text-start bg-white border border-gray-300' placeholder={'Значение'} onChange={ () => this.props.event(event, valueId) }/>
      </label>
    )
  }
}

class ParamEditor extends React.Component<Props, Model> {
  state: Model = this.props.paramModel
  public getModel(): Model {
    return this.state
  }
  
  render(){
    const changeState = (e:React.FormEvent<HTMLInputElement>, id: number) : void => {
      this.setState( (state: Model) => {
        const newState:Model = {
          paramValues: []
        }
        newState.paramValues = state.paramValues.map( (el) => {
          if (el.paramId === id){
            el.value = e.target.value
          }
          return el
        })
        return newState
      })
    }

    const inputs: ReactElement[] = [];
    for (const param of this.props.params){
      const value = this.state.paramValues.find( (el) => el.paramId === param.id)?.value
      inputs.push(<ParamEditorInput key={param.id} id={param.id} name={param.name} value={value} type={param.type} event={changeState} />)
    }
    return (
      <div>
        {inputs}
        <div className='my-[30px] text-center'>
          <button className='px-[20px] py-[10px] border border-gray-300 hover:bg-gray-300 active:bg-gray-200' onClick={() => console.log('getModel()', this.getModel())}>getModel to console</button>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
      return (
        <div className='my-[40px] mx-auto max-w-3xl px-[20px]'>
          <h1>Selsup test</h1>
          <ParamEditor params={paramsExample} paramModel={modelExample}/>
        </div>
    );
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
