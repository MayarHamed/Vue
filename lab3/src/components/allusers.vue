<template>
  <div class="d-flex flex-column align-items-center">
    <router-link to="/create"
      ><img class="add m-2" src="../assets/addd.png"
    /></router-link>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div
        class="crad rounded shadow-sm bg-secondary text-light text-center w-25 m-2"
        v-for="user in users"
        :key="user.id"
      >
        <div class="card-header m-2">
          <h3 class="id rounded p-3 shadow-sm">
            {{ user.id }}
          </h3>
        </div>
        <div class="card-body m-2">
          <p>First Name: {{ user.first_name }}</p>
          <p>Last Name: {{ user.last_name }}</p>
          <p>
            <img class="w-25" src="../assets/gender.png" /> {{ user.gender }}
          </p>
        </div>
        <div class="card-footer m-2">
          <hr />
          <button
            class="btn btn-sm btn-danger m-1"
            @click="deleteUser(user.id)"
          >
            Delete
          </button>
          <button class="btn btn-sm btn-dark m-1">
            <router-link
              class="text-decoration-none text-light"
              :to="`/edit/${user.id}`"
            >
              Edit
            </router-link>
          </button>
          <button class="btn btn-sm btn-info m-1">
            <router-link
              class="text-decoration-none text-light"
              :to="`/users/${user.id}`"
            >
              View
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "allusersApp",
  setup() {
    const users = ref([]);

    const getAllUsers = () => {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          console.log(res.data);
          users.value = res.data;
        })
        .catch((err) => console.log(err));
    };

    //   onMounted(() => {
    getAllUsers();
    //   });

    return {
      users,
    };
  },
};
</script>

<style scoped>
.id {
  background: rgba(82, 150, 192, 0.763);
  width: fit-content;
}
.add {
  width: 50px;
}
</style>