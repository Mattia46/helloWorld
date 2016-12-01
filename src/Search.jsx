import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
        <div><strong colSpan='4'>{this.props.category}</strong></div>
    )
}
}

class ProductRow extends React.Component {
  render(){
      var prod = this.props.product.stocked ? this.props.product.name :
                  <span style={{color: 'green'}}>{this.props.product.name} </span>;
      return (
        <div>
          <div> {prod} {this.props.product.price} </div>
        </div>
      )}
}

class ProductTable extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
      var product = [];
      var category = null;
      this.props.products.forEach((p) => {

      if(p.name.indexOf(this.props.searchText) === -1 || (!p.stocked && this.props.inStock)) {
       return;
      }
      if(category !== p.category){
        product.push(<ProductCategoryRow category={p.category} key={p.category} />)
          category = p.category;
        }
      product.push(<ProductRow product={p}  key={p.name}/>)
      })
    return (
    <div>
      {product}
    </div>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
     super(props);
     this.change = this.change.bind(this);
  }

  componentDidMount() {
      this.searchText.focus();
  }

  change() {
    this.props.changeState(
      this.searchText.value,
      this.inStock.checked
    )
  }

  render(){
    return (
      <div>
        <input type='text'  placeholder='Search...' value={this.props.anyname} ref={(input) => this.searchText = input} onChange={this.change}/>
          <input type="checkbox" value={this.props.inStockOnly} ref={(input) => this.inStock = input} onChange={this.change}/>
      </div>
    )
  }

}

SearchBar.defaultProps = { boh: 'mattia' }

export class FilteredProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      inStock: false
    }
    this.changeState = this.changeState.bind(this)
  }


  changeState(searchText, inStock) {
      this.setState({
          searchText: searchText,
          inStock: inStock
      })
  }

  render() {
    return (
      <div>
        <SearchBar anyname={this.state.searchText} inStockOnly={this.state.inStock} changeState={this.changeState} />
        <ProductTable products={this.props.products} searchText={this.state.searchText} inStock={this.state.inStock}/>
      </div>
    )}
}

