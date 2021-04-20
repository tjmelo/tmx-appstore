import { Switch, Route } from 'react-router-dom';
import { SitewareStore } from './SitewareStore';
import { Header } from './header/Header';
import { Banner } from './banner/Banner';
import { Shoes } from './shoes/Shoes';
import { Socks } from './socks/Socks';
import { Promotions } from './promotions/Promotions';
import { Filter } from './filter/filter';
// import { Messages } from './messages/Messages';
import { Cart } from './cart/Cart';
import { Empty } from './empty/empty';
import { Login } from './crud/login/login';
import { Cadastre } from './crud/cadastre/Cadastre';
import { Painel } from './crud/painel/painel';
import { Detail } from './detail/Detail';
import { ListProducts } from './crud/list/listProducts';

export const Siteware = props => {
    return(
        <SitewareStore>
          <Header />
          <Switch>
            <Route path="/shoes" component={Shoes} />
            <Route path="/socks" component={Socks} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/empty" component={Empty} />
            <Route path="/filter/:category" component={Filter} />
            <Route path="/login" component={Login} />
            <Route path="/cadastre" component={Cadastre} />
            <Route path="/painel/:id" component={Painel} />
            <Route path="/list" component={ListProducts} />
          
            <Route exact path="/">
              <Banner />
              <Promotions />
            </Route>

          </Switch>
          
            {/* <Banner /> */}
            {/* <Messages>
                    <p>Compre 2 unidades do Tênis Nike Revolution 5 - Feminino e Pague apenas o valor de 1</p>
                    <button>Saber mais</button>
            </Messages>*/}
            
            {/* <Cards />  */}

        </SitewareStore>
    )
}