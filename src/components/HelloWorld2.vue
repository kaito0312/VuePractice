<template>
  <div class="hello container">
    <div class="input-group mb-3 mt-3">
      <input type="text" class="form-control" v-model="message" placeholder="輸入訊息" />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          @click="submitMessage()"
          type="button"
          id="button-addon2"
        >送出</button>
      </div>
    </div>
    <div class="media mt-3" v-for="item in messages">
      <img
        v-if="item.user==user"
        src="https://picsum.photos/id/237/100/100"
        class="align-self-start mr-3"
        alt="..."
      />
      <div class="media-body">
        <h5 class="mt-0">{{item.user}}</h5>
        <p>{{item.message}}</p>
      </div>
      <img
        v-if="item.user!=user"
        src="https://picsum.photos/id/1062/100/100"
        class="ml-3"
        alt="..."
      />
    </div>
    <!-- <div class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">Media object</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
      <img src="https://picsum.photos/id/1062/100/100" class="ml-3" alt="..." />
    </div>-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: "Casper",
      message: "",
      messages: [
        {
          user: "Casper",
          message: "Hello 你好"
        },
        {
          user: "卡斯楚",
          message: "不好 FuckYou"
        }
      ]
    };
  },
  methods: {
    submitMessage() {
      let self = this;
      self.messages.unshift({
        user:self.user,
        message:self.message
      });
      self.message=''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
