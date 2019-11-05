<template>
  <q-page class="flex flex-center">
    <q-input @input="hacerAlgo" v-model="text" label="Standard" />
    {{ text }}
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  
  methods: {
    hacerAlgo () {
      console.log('haciendo algo')
    }
  }
}
</script>
