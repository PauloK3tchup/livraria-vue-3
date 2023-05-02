<script>
import AutoresApi from "@/api/autores";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autores: [],
      autor: {},
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autor = {};
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
  },
};
</script>

<template>
  <h1>Autor</h1>
  <hr />
  <div class="form">
    <input
      class="inputEnviar"
      type="text"
      v-model="autor.nome"
      placeholder="Nome do autor"
      required
    />
    <input
      class="inputEnviar"
      type="text"
      v-model="autor.email"
      placeholder="Email da autor"
    />
    <button class="btn" @click="salvar">
      <font-awesome-icon icon="fa-solid fa-floppy-disk" /> <span>Salvar</span>
    </button>
  </div>
  <hr />
  <table>
    <tr>
      <th class="cabeça">Id do Autor</th>
      <th class="cabeça">Nome</th>
      <th class="cabeça">Email (Opcional)</th>
      <th class="cabeça">Ação</th>
    </tr>
    <tr v-for="autor in autores" :key="autor.id">
      <td>{{ autor.id }}</td>
      <td>{{ autor.nome }}</td>
      <td>{{ autor.email }}</td>
      <td>
        <button class="btn-excluir" @click="excluir(autor)">
          <font-awesome-icon icon="fa-trash" /> <span>Excluir</span>
        </button>
        <button class="btn-editar" @click="editar(autor)">
          <font-awesome-icon icon="fa-pencil" /> <span>Editar</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<style></style>
