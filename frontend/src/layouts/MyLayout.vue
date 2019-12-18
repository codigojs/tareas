<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="statics/icon-tarea.svg">
          </q-avatar>
          Gestión de taréas
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-list padding class="rounded-borders">
        <q-item :to="{ name: 'index' }" clickable v-ripple>
          <q-item-section>
            Inicio
          </q-item-section>
        </q-item>

        <q-item :to="{ name:'usuarios' }" clickable v-ripple>
          <q-item-section >
            Usuarios
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'acerca' }" clickable v-ripple>
          <q-item-section>
            Acerca de
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
