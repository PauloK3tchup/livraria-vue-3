<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <span> | </span>
    <router-link to="/categorias">Categorias</router-link>
    <span> | </span>
    <router-link to="/categorias">Editoras</router-link>
    <span> | </span>
    <router-link to="/categorias">Autores</router-link>
    <span> | </span>
    <router-link to="/categorias">Livros</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
