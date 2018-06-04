import '../assets/styles/footer.styl'
export default {
   data(){
      return {
         authur:'唐七'
      }
   },
   render () {
      return (
         <div id='footer'>
            <span>Write By {this.authur}</span>
         </div>
      )
   }
}