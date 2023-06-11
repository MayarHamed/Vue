<template>
  <div class="d-flex justify-content-center">
    <div class="card rounded bg-secondary shadow-lg text-light text-center w-50 p-2">
      <div class="card-header">
        <h2>Create User</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
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
        </form>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-dark">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      console.log(this.user);
    },
  },
};
</script>

<style scoped>
.form-group {
  justify-content: space-evenly;
  align-content: center;
}
</style>