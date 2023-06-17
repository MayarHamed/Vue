<template>
  <div class="main">
    <div class="d-flex justify-content-center">
      <div
        class="crad rounded bg-secondary shadow-lg text-light text-center w-25 m-2"
      >
        <div class="card-header m-2">
          <h3 class="id rounded p-3 shadow-sm">
            {{ user.id }}
          </h3>
          <img class="w-50" src="../assets/person.png" />
        </div>
        <div class="card-body m-2">
          <p>First Name: {{ user.first_name }}</p>
          <p>Last Name: {{ user.last_name }}</p>
          <p>
            <img class="w-25" src="../assets/gender.png" /> {{ user.gender }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "userdetailsApp",
  setup() {
    const user = reactive({
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
    });

    const route = useRoute();
    const id = route.params.id;

    const getUserById = () => {
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => {
          user.id = res.data.id;
          user.first_name = res.data.first_name;
          user.last_name = res.data.last_name;
          user.gender = res.data.gender;
        })
        .catch((err) => console.log(err));
    };

    onMounted(getUserById);

    return {
      user,
    };
  },
};
</script>

<style scoped>
.id {
  background: rgba(82, 150, 192, 0.763);
  width: fit-content;
}
.main {
  height: 100vh;
}
</style>
