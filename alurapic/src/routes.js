import Cadastro from './components/cadastro/Cadastro.vue'
import CaixaEntrada from './components/CaixaEntrada.vue'
import Home from './components/home/Home.vue'

export const routes = [
  { path: '', name:'home', component: Home, titulo:'Home', menu:true},
  { path:'/cadastro', name:'cadastro', component: Cadastro, titulo:'Cadastro', menu:true },
  { path:'/Caixa', name:'caixa', component: CaixaEntrada, titulo:'Caixa', menu:true },
  { path:'/cadastro/:id', name:'altera', component: Cadastro, titulo:'Cadastro', menu:false },
  { path: '*', component: Home, menu:false}

];
