var app = {
    data(){
        return {
            books:[
                // {author:"托尔斯泰",name:"战争与和平",isbn:1},
                // {author:"托尔斯泰",name:"安娜卡列尼娜",isbn:3},
                // {author:"托尔斯泰",name:"伊凡伊里奇之死",isbn:4},
                // {author:"菲茨杰拉德",name:"了不起的盖茨比",isbn:5}
            ],
            showModal:false ,

            // add new book 
            new_title:" new title ",
            new_author:" new authour "
        }
    },
    template:`
     <h1> the book list </h1>
     
     <div class="toolbar"> 
        <button @click="showModal = !shoModal"> add a book </button>

        <button @click="send()"> send  </button>
     </div>

     <div class="flex flex-column">  
         <div class="row flex " v-for="book in books ">
           <div class="field w-1/3 p-5"> {{book.title}}</div>
           <div class="field w-1/3 p-5"> {{book.author}}</div>
           <div class="field w-1/3 p-5"> {{book.id }}</div>
         </div>
     </div>
    
     <div id="modal" v-if="showModal">
        <div id="modal-content">
            <div class="modal-head">  </div>
         <div> <h2>Modal Title  </h2>  </div>
          
         <form action="#" method="post" >
        <div class="row">
            <label for="title">book name  </label>

            <input class="input" type="text" name="title" v-model="new_title" id="title" value="">

        </div>

        <div class="row">
            <label for="author">book author  </label>

            <input class="input" type="text" name="author" v-model="new_author" id="author" value="">

        </div>
        <div class="row">

            <button  type="button" class="button" @click="addBook();">submit</button>
        </div>

    </form>

         <div class="modal-footer">
          <button @click="showModal = !showModal" class="close-modal">Close Modal</button>
          </div>
        </div>
      </div>

    `,
   methods:{
        getBooks(){ 
            const  base_url= 'http://127.0.0.1:5001';
            let  that = this 
            axios.get(base_url + '/books')
                .then(function (res) {
                    that.books = res.data.books;
                    console.log('this = ',this );
                   console.log('third ',this.books );
                })
                .catch(function (error) {
                 
                    console.log(error.message);
                })
                .finally(function () {
                   console.log('finally here ');
                });
        },

        send(){
            console.log('send method ');

        },

        addBook(e){


            console.log("add book here ");
          
            const  base_url= 'http://127.0.0.1:5001';
            let  that = this 
            var post_data = {
                title:this.new_title,
                author:this.new_author,
                read:false
            }

            console.log(post_data);
            axios.post(base_url + '/books',post_data)
                .then(function (res) {
                  console.log('the result ', res );
                  if(res.data.status =='success'){
                      console.log("add book success");
                      that.showModal = false;
                      that.getBooks();
                  }
                  //that.getBooks();
                })
                .catch(function (error) {
                    console.log(error.message);
                })
                .finally(function () {
                   console.log('finally here ');
                });
        }
   },
   computed:{


   },
   created() {
    console.log('creat function ');
    this.getBooks();
  }
}

Vue.createApp(app).mount('#app');