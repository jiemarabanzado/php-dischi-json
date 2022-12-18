const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        disks:[]
      }
    },
    created(){
        axios.get('http://localhost/php-dischi-json/api.php').then((res)=>{
        this.disks=res.data;
        });
    }
  }).mount('#app')