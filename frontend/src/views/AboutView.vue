<template>
  
<body>
  <!-- <button id="addProductBtn" data-bs-toggle="modal" data-bs-target="#addProductModal">Add new product</button> -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add new product</button>
  <div class="overlay image">

    <div class="table-container">
      
  <table class="table table-dark table-striped" >
    <thead>
      <tr>
        <th scope="col">Product ID</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">Image</th>
        <th scope="col">#</th>
        <th scope="col">#</th>
      </tr>
    </thead>
    <tbody v-for="item in $store.state.products" :key="item.id">
    <tr>
      <!-- <th scope="row"></th> -->
      <td>{{ item.prodID }}</td>
      <td>{{ item.prodName }}</td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.amount }}</td>
      <td>{{ item.category }}</td>
      <td><img :src="item.prodUrl" width="100px" height="100px"></td>
      <td><img src="https://i.ibb.co/94g6875/bin.png" alt="Delete" @click="deleteproduct(item.prodID)" width="30" height="30"></td>
      <td><img src="https://i.ibb.co/JxK7ptg/product-design.png" alt="Edit" @click="editProducts(item.id)" width="30" height="30"></td>
    </tr>
  </tbody>
        </table>
   
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type ='name' class="iput1" placeholder="product name" required v-model="prodName">
        <input type ='number' class='iput1' placeholder="product quantity" required v-model="quantity">
        <input type ='number' class='iput1' placeholder="product amount" required v-model="amount">
        <input type ='text' class='iput1' placeholder="product category" required v-model="category">
        <input type ='text' class='iput1' placeholder="product image url" required v-model="prodUrl">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="submitData()" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>








</div>
</body>

  
</template>
<style scoped>
.table-container {
  margin-top: 120px; 
  max-width: 88%; 
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 767px) {
    .table-container {
      max-width: 100%; 
      overflow-x: auto; 
    }
  }
  body {
  position: relative;
}

 .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.6); /* Greenish overlay color */
   z-index: 1; /* Ensure the overlay is above other elements */
}  
.image{
  background-image: url('https://i.ibb.co/6DVhg7n/maxresdefault.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  position: relative;
} 
  

</style>
<script>
// @ is an alias to /src

export default {
  data(){
  return{
      prodName: null,
      quantity: null,
      amount:null,
      category:null,
      prodUrl:null

    }
   
  },
  methods:{
      deleteproduct(prodID){
      this.$store.dispatch('deleteProduct', prodID)
    },
    editProducts(id){
              let edit={
                id:id,
                // name and age from data function .. whenever inside script tag in view and wanna refer to data function must use this.
                prodName:this.prodName,
                quantity:this.quantity
              }
              // passing edit through to action
               this.$store.dispatch('editProduct',edit)
            },
    submitData(){
      console.log('Product URL:', this.prodUrl); // Add this line

this.$store.dispatch('addProduct',this.$data)

    }
    
    
    },
  computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
    addProduct(){
      this.$store.dispatch('addProduct', this.$data)
    }
  },mounted(){
    this.getProducts
    this.deleteproduct
    // this.editFriend
  }
}

</script>
