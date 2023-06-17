<template>
  <div class="main">
  <div class="d-flex justify-content-center">
    <div
      class="card rounded bg-secondary shadow-lg text-light text-center w-50 p-2"
    >
      <div class="card-header">
        <h2>Create User</h2>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <div class="d-flex form-group m-2">
            <label class="text-center" for="fname">First Name:</label>
            <input type="text " class="form-control w-50 p-2" v-model="fname" />
          </div>
          <div class="d-flex form-group m-2">
            <label class="text-center" for="lname">Last Name:</label>
            <input type="text " class="form-control w-50 p-2" v-model="lname" />
          </div>
          <div class="d-flex form-group m-2">
            <label class="text-center" for="gender">Gender:</label>
            <select class="form-control w-50 p-2 ms-4" v-model="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-dark">Add</button>
        </div>
      </form>
    </div>
  </div></div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "createuserApp",
  data() {
    return {
      fname: "",
      lname: "",
      gender: "",
      user: {}, // Initialize user as an empty object
    };
  },
  methods: {
    submitForm() {
      this.user.first_name = this.fname;
      this.user.last_name = this.lname;
      this.user.gender = this.gender;
      // console.log(this.user);
      this.createUser(this.user);
    },
    createUser(user) {
      axios.post("http://localhost:3000/users", user).then(()=>{
        this.$router.push("/users");
      })
    },
  },
};
</script>
  
  <style scoped>
.form-group {
  justify-content: space-evenly;
  align-content: center;
}
.main{
  height: 100vh;
}
</style>
  