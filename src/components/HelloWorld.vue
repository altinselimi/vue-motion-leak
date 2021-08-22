<template>
  <div style="display: flex; flex-direction: column">
    <span>Route id: {{ id }}</span>
    <button style="margin-right: auto" @click="updateRouteId">
      Update route id
    </button>
    <ul>
      <li
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        v-for="item in 10"
        :key="item"
      >
        Item {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "HelloWorld",
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const updateRouteId = () => {
      router.replace({
        name: "TestingLeak",
        params: {
          id: parseInt(props.id) + 1,
        },
      });
    };
    return {
      updateRouteId,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
