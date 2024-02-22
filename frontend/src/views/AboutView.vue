<template>
  
<body>
<div>

  <table>
   
    
    <thead>
      <tr>
        <th scope="col">Product ID</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">Image</th>
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
      <td><img :src="item.prodUrl" width="120px" height="100px"></td>
    </tr>
    </tbody>
        </table>
   
</div>


<div>
  <input type ='name' class="iput1" placeholder="name" required v-model="prodName">
  <input type ='number' class='iput1' placeholder="age" required v-model="quantity">
  <br><br>
  <!-- <input type ='email' placeholder="email" required v-model="email">
    <br><br>
      <input type ='password' placeholder="password" required v-model="password">
      <br><br>
      <input type ='textarea' placeholder="message" required v-model="message">
      <br><br> -->
      <button @click="submitData()">Submit</button>
    </div>
    
    
    
    
    
    
  </body>

  
</template>

<script>
// @ is an alias to /src

export default {
  data(){
  return{
      prodName: null,
      quantity: null
    }
   
  },
  methods:{
      deleteproduct(prodName){
      this.$store.dispatch('deleteProduct', prodName)
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
console.log(this.$data)
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
    // this.deleteFriend
    // this.editFriend
  }
}

</script>
<style>

  </style>
