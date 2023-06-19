var app = {
    data(){
        return {
            books:[
                {author:"托尔斯泰",name:"战争与和平",isbn:1},
                {author:"托尔斯泰",name:"安娜卡列尼娜",isbn:3},
                {author:"托尔斯泰",name:"伊凡伊里奇之死",isbn:4},
                {author:"菲茨杰拉德",name:"了不起的盖茨比",isbn:5}
            ],
            showModal:false 
        }
    },
    template:`
     <h1> the book list </h1>
     
     <div class="toolbar"> 
        <button @click="showModal = !shoModal"> add a book </button>
      
     </div>

     <div class="flex flex-column">  
         <div class="row flex " v-for="book in books ">
           <div class="field w-1/3 p-5"> {{book.name}}</div>
           <div class="field w-1/3 p-5"> {{book.author}}</div>
           <div class="field w-1/3 p-5"> {{book.isbn}}</div>
         </div>
     </div>
    
     <div id="modal" v-if="showModal">
        <div id="modal-content">
            <div class="modal-head">  </div>
         <div> <h2>Modal Title  </h2>  </div>
          
        <p>
            <label for="title">title</label> <input type="text" name="title" id="title" value="" />  


        </p>


          <button @click="showModal = !showModal" class="close-modal">Close Modal</button>
        </div>
      </div>

    `,
   methods:{


   },
   computed:{


   }


}

Vue.createApp(app).mount('#app');