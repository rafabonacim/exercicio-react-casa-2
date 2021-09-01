import {useState,useEffect} from 'react'
// class PageHeading extends Component {
//   state = {
//     titulo:'Painel do cliente',
//     nome:"Rafa"
//   }

  // componentDidMount(){
  //   window.alert('Componente renderizou')
  // }

  // componentWillMount(){
  //   window.alert('Este componente está sendo montado')
  // }
//   render(){
//     return (
//       <div className="d-sm-flex align-items-center justify-content-between mb-4">
//         <h1 className="h3 mb-0 text-gray-800">{this.state.titulo}</h1>
//       </div>
//     );
//   }
// }

// export default PageHeading;

//a cada click muda
function PageHeading () {
  const [contaClick, setContaClick] = useState(0)
  const [appName,setAppName] = useState('Painel do cliente')

  useEffect(() =>{
    setAppName('Dashboarad do infinito')
   },[])

  function alterarContador(){
    setContaClick(contaClick+1)
    setAppName('Dashboard do infinito')
  }
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">{appName}</h1>
      <button onClick={alterarContador}>{contaClick}</button>
    </div>
  );
}
export default PageHeading;