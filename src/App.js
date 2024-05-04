import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Razor Viper V2',
          img: 'razorV2.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Mouse',
          price: '76.48$',
        },
        {
          id: 2,
          title: 'Logitech G Pro X Superlight 2',
          img: 'gPro.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Mouse',
          price: '114.66$',
        },
        {
          id: 3,
          title: 'Razer Kraken Kitty Ed. V2 Pro',
          img: 'razorHead.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Headphone',
          price: '267.95$',
        },
        {
          id: 4,
          title: 'SteelSeries Apex Pro',
          img: 'steelKey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Keyboard',
          price: '199.66$',
        },
        {
          id: 5,
          title: '27" ASUS TUF Gaming',
          img: 'AsusM1.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Monitor',
          price: '309.45$',
        },
        {
          id: 6,
          title: 'Red Square Keyrox Hanami',
          img: 'Hanami.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'Keyboard',
          price: '80.99$',
        }

      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      <Footer />
    </div>
  )
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
  this.setState({orders: [...this.state.orders, item]})
}
}

export default App;
