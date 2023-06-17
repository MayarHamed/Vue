<template>
  <div class="main">
  <div class="d-flex justify-content-center">
    <div
      class="card rounded bg-secondary shadow-lg text-light text-center w-50 p-2"
    >
      <div class="card-header">
        <h2>Update User</h2>
      </div>
      <form @submit.prevent="update">
        <div class="card-body">
          <div class="d-flex form-group m-2">
            <label class="text-center" for="fname">First Name:</label>
            <input
              type="text "
              class="form-control w-50 p-2"
              v-model="fname"
            />
          </div>
          <div class="d-flex form-group m-2">
            <label class="text-center" for="lname">Last Name:</label>
            <input
              type="text "
              class="form-control w-50 p-2"
              v-model="lname"
            />
          </div>
          <div class="d-flex form-group m-2">
            <label class="text-center" for="gender">Gender:</label>
            <select
              class="form-control w-50 p-2 ms-4"
              v-model="gender"  >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-dark">Update</button>
        </div>
      </form>
    </div>
  </div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: "edituserApp",
  data() {
    return {
      fname: "",
      lname: "",
      gender: "",
      user:{}
    };
  }, 
  created() {
    this.getuserById();
  },
  methods: {
    getuserById() {
      this.id = this.$route.params.id;
      axios
        .get(` http://localhost:3000/users/${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.fname = res.data.first_name;
          this.lname = res.data.last_name;
          this.gender = res.data.gender;
          this.user.id = res.data.id;

        })
        .catch((err) => console.log(err));
    },
    update() {
      this.user.first_name = this.fname;
      this.user.last_name = this.lname;
      this.user.gender = this.gender;
       this.updateUser(this.user);
    },
    updateUser(user) {
      axios
        .put(`http://localhost:3000/users/${user.id}`, user)
        .then(() => {
          this.$router.push(`/users/${user.id}`);
        })
        .catch((err) => console.log(err));
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
  