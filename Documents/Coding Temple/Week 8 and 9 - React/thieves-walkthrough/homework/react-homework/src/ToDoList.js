import React, { Component } from 'react'

export default class ToDoList extends Component {
constructor () {
    super();
    this.state = {
        ToDoList: []
    };
}

addItem = (item) => {
    item.preventDefault();
    const dbzProduct = {
        name: item.target.product.value,
        id: Date.now()
    }
    this.setState((previousState) => previousState.ToDoList.push(dbzProduct))
    console.log(this.state.ToDoList)
}

displayDBZProduct = (product) => {
    return (
        <li key={product.id}>{product.name}<button type='' className='btn btn-danger'>Remove</button></li>
    )
}

removeItem = (id) => {
    
}

render() {
    return (
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

            <h4 class="text-center my-3 pb-3">To Do App</h4>

            <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={this.addItem}>
              <div class="col-12">
                <div class="form-outline">
                  <input name="product" type="text" id="item" class="form-control" />
                  <label class="form-label" for="form1">Enter a task here</label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
                <ul>
                    {this.state.ToDoList.map(this.displayDBZProduct)}
                </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

}
